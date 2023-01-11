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
  // If license acceptance is present, click it
  cy.get('body').then($body => {
    if ($body.find('#mat-checkbox-1').length == 0 ) {
      cy.get('button[type="submit"]').click({force:true})
      cy.wait(1000)
    }
    else if ($body.find('#mat-checkbox-1').length > 0 ){
      cy.get('#mat-checkbox-1').find('input').click({force:true})
      cy.get('button[type="submit"]').click({force:true})
      cy.wait(1000)
    }
  })
})

// Basic test that validates Dashboard panels exist
it('Check Dashboard Panels', function() {
  cy.get('app-exposure-chart')
  cy.get('app-policy-mode-panel[assettype="services"]')
  cy.get('app-policy-mode-panel[assettype="containers"]')
  cy.get('app-application-protocols-panel')
})

// Basic test that validates system component health
it('Check System Components', function() {
  cy.get('a[title="Assets"]').click()
  cy.get('a[title="System Components"]').click()
  cy.wait(1000)
  cy.get('div[role="row"] > div[col-id="connection_state"] > app-controllers-grid-status-cell > span').contains("Connected")
  cy.get('div[role="tablist"]').contains("Scanners").click()
  cy.wait(1000)
  cy.get('app-scanners-grid').contains(/[1-9]/)
  cy.get('div[role="tablist"]').contains("Enforcers").click()
  cy.wait(1000)
  cy.get('div[role="row"] > div[col-id="connection_state"] > app-enforcers-grid-status-cell > span').contains("Connected")
})

// Basic test that scans an image and validates results/success
it('Scan an image', function() {
  cy.get('a[title="Assets"]').click()
  cy.get('a[title="Containers"]').click()
  cy.wait(1000)
  cy.get('div[role="rowgroup"] > div[row-index="0"]').then($row => {
    // If a scan has already run, pick the second row
    if ($row.find('div[role="rowgroup"] > div[row-index="0"] > div[col-id="security.scan_summary.status"] > app-containers-grid-status-cell > span').length > 0) {
      cy.get('div[role="rowgroup"] > div[row-index="4"]').click({force:true})
      cy.get('button[aria-label="Scan action"]').click()
      cy.wait(6000)
      cy.get('div[role="rowgroup"] > div[row-index="4"] > div[col-id="security.scan_summary.status"] > app-containers-grid-status-cell > span').contains("Finished")
    // Otherwise scan the first row
    } else {
      cy.get('div[role="rowgroup"] > div[row-index="0"]').click({force:true})
      cy.get('button[aria-label="Scan action"]').click()
      cy.wait(6000)
      cy.get('div[role="rowgroup"] > div[row-index="0"] > div[col-id="security.scan_summary.status"] > app-containers-grid-status-cell > span').contains("Finished")
    }
  })
})
