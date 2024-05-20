/// <reference types="Cypress" />

import StyleHandler from './StyleHandler'

// Example:
// cy.colorLog('You did not pass the test!', '#FF0000',
//              { displayName: "ERROR:", data: { comments: 'Wrong!', toDo: 'Need way more practice.' } })
Cypress.Commands.add('colorLog',
    (message, hexColor, { displayName, $el, data = {}}) => {
        const name = StyleHandler.getStyleName(hexColor)
        Cypress.log({
            displayName,
            message,
            name,
            $el,
            consoleProps: () => {
                // return an object which will
                // print to dev tools console on click
                return {
                    displayName,
                    message,
                    name,
                    $el,
                    ...data
                }
            },
        })
    }
)

