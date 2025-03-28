// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
    cy.request({
      method: 'POST',
      url: 'http://20.244.102.185:9000/realms/ims/protocol/openid-connect/token',
      body: {
        client_id: 'ims-client',
        grant_type: 'password',
        username: 'avinash',
        password: 'avinash',
      },
      form: true,
    }).then((response) => {
      const { access_token } = response.body;
      
      // Store token in localStorage for frontend authentication
      localStorage.setItem('authToken', access_token);
  
      // Set token as a default Cypress header
      Cypress.env('authToken', access_token);
    });
  });