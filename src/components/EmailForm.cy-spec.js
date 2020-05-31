/// <reference types="cypress" />
import React from 'react'
import { mount } from 'cypress-react-unit-test'
import EmailForm from './EmailForm'

describe('EmailForm', () => {
  it('renders learn react link', () => {
    const handleSubmit = cy.stub()
    const handleChange = cy.stub()

    mount(
      <EmailForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        values={{ categoryId: 0 }}
        isSubmitting={false}
        jobs={[]}
      />
    )

    cy.contains(/직군/).should('be.visible')
    cy.contains(/회사 아이디/).should('be.visible')
  })
})
