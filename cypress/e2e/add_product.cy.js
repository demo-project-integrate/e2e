describe('Add Product with Authentication', () => {
    beforeEach(() => {
      cy.login(); // Perform login first
  
      // Preserve auth token before visiting the page
      cy.window().then((win) => {
        win.localStorage.setItem('authToken', Cypress.env('authToken'));
      });
  
      cy.visit('http://20.244.102.186:8081/product'); // Visit frontend
    });
  
    it('should successfully add a product', () => {
      cy.get('#productName').type('Test Product');
      cy.get('#productDesc').type('This is a test product description.');
      cy.get('#hcnCode').type('123456');
      cy.get('#productPrice').type('99.99');
      const token = Cypress.env('authToken');
      cy.log("Token from Cypress.env:", token);
  
      cy.intercept('POST', 'http://20.244.102.185:8081/api/product/create', (req) => {
        req.headers['Authorization'] = `Bearer ${token}`;
      }).as('addProduct');
  
      cy.contains('Submit').click();
  
      cy.wait('@addProduct').its('response.statusCode').should('eq', 201);
  
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.contains('Product added successfully!');
      });
    });
  });