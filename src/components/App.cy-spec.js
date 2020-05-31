/// <reference types="cypress" />
import React from 'react'
import { mount } from 'cypress-react-unit-test'
import App from './App'

describe('App', () => {
  it('<App />', () => {
    mount(<App />)

    cy.get('.bx--form').should('exist')
    cy.get('.bx--modal').should('exist')
  })
})
