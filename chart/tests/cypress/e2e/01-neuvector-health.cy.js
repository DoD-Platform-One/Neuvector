Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  // gitlab throws this error in the console which by default fails the cypress test
  return false
})

// Login to NeuVector before each test
beforeEach(function () {
  cy.viewport(1920, 1080)
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
  cy.get('nav.sidebar > ul').contains("Assets").click()
  cy.get('nav.sidebar > ul').contains("System Components").click()
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
  cy.get('nav.sidebar > ul').contains("Assets").click()
  cy.get('nav.sidebar > ul').contains("Containers").click()
  cy.wait(1000)

  // Get a container that has not been scanned
  cy.get('div[role="rowgroup"] > div.ag-row div[col-id="security.scan_summary.status"] > app-containers-grid-status-cell:empty')
    .first()
    .parents('div.ag-row')
    .click()
    .then($row => {
      cy.get('button[aria-label="Scan action"]')
        .click()
        .then(() => {
          cy.intercept('/workload/scanned?start=0&limit=2000')
            .as('scanned')

          // When the scan is complete grid reloads, wait for that request to fire
          cy.wait('@scanned', { timeout: 90000 })

          const rowName = $row.find('app-containers-grid-name-cell')[0].innerText
          const rowId = $row.attr('row-id');

          // Type in container name to ensure row is visible
          cy.get('app-quick-filter input').type(rowName)

          // Fetch row by id
          cy.get(`div[role='rowgroup'] > div.ag-row[row-id='${rowId}']`)
            .find('app-containers-grid-status-cell', { timeout: 60000 })
            .should('contain', 'Finished', { timeout: 60000 })
        })
    })
})
