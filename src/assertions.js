/// <reference types="Cypress" />

// Example:
// cy.compareAliases('deep.equal', '@expected', '@result')
Cypress.Commands.add('compareAliases',
    (chainer, alias1, alias2, options) => {
        cy.get(alias2).then(aliasValue2 => {
            cy.get(alias1, options).should(chainer, aliasValue2)
        })
    }
)
