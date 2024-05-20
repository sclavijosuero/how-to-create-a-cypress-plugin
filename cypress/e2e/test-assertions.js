/// <reference types="Cypress"/>

import '../../src/assertions.js'

import { keanuReeves, johnWick, winstonScott } from '../fixtures/test-data.json'

describe('Suite to showcase cy.compareAliases() command', () => {

    it('Test 1 - Keanu Reeves is same as John Wick', () => {
        cy.wrap(keanuReeves).as('keanuReeves')
        cy.wrap(johnWick).as('johnWick')

        cy.compareAliases('deep.equal','@keanuReeves', '@johnWick')
    });

    it('Test 2 - John Wick is not the same as Winston Scott', () => {
        cy.wrap(johnWick).as('johnWick')
        cy.wrap(winstonScott).as('winstonScott')

        cy.compareAliases('not.deep.equal','@johnWick', '@winstonScott')
    });
});
