Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  // gitlab throws this error in the console which by default fails the cypress test
  return false
})

// Login to NeuVector before each test
beforeEach(function () {
  cy.visit(Cypress.env('url'))
  cy.title().should('contain', 'NeuVector')
  cy.get('input[id="Email1"]').type("admin")
  cy.get('input[id="password1"]').type("admin")
  cy.get('form[name="login.loginForm"] > div[aria-hidden="false"] > button[type="submit"]').click()
  cy.wait(1000)
  // If license acceptance is present, click it
  cy.get('body').then($body => {
    if ($body.find('button[ng-click="accept()"]').length > 0) {
      cy.get('button[ng-click="accept()"]').click()
    }
  })
})

// Basic test that validates Dashboard panels exist
it('Check Dashboard Panels', function() {
  cy.get('canvas[id="containers-sec-chart2"]')
  cy.get('canvas[id="service-policy-mode-chart"]')
  cy.get('canvas[id="container-mode-chart"]')
  cy.get('canvas[id="policy-apps2-chart"]')
})

// Basic test that validates system component health
it('Check System Components', function() {
  cy.get('a[title="Assets"]').click()
  cy.get('a[title="System Components"]').click()
  cy.wait(1000)
  cy.get('div[role="row"] > div[col-id="connection_state"] > span > span').contains("Connected")
  cy.get('span').contains("Scanners").click()
  cy.wait(1000)
  cy.get('label').invoke('text').should('match', /[1-9] Scanners found/)
  cy.get('span').contains("Enforcers").click()
  cy.wait(1000)
  cy.get('div[role="row"] > div[col-id="connection_state"] > span > span').contains("Connected")
})

// Basic test that scans an image and validates results/success
it('Scan an image', function() {
  cy.get('a[title="Assets"]').click()
  cy.get('a[title="Containers"]').click()
  cy.wait(1000)
  cy.get('div[class="ag-body-container"] > div[row-index="0"]').then($row => {
    // If a scan has already run, pick the second row
    if ($row.find('div[col-id="security.scan_summary.status"] > span').length > 0) {
      cy.get('div[class="ag-body-container"] > div[row-index="2"]').click({force:true})
      cy.get('button[display-control="runtime_scan"]').click()
      cy.get('div[class="ag-body-container"] > div[row-index="2"] > div[col-id="security.scan_summary.status"] > span',{timeout: 60000}).contains("Finished",{timeout: 60000})
    // Otherwise scan the first row
    } else {
      $row.click({force:true})
      cy.get('button[display-control="runtime_scan"]').click()
      cy.get('div[class="ag-body-container"] > div[row-index="0"] > div[col-id="security.scan_summary.status"] > span',{timeout: 60000}).contains("Finished",{timeout: 60000})
    }
  })
})
