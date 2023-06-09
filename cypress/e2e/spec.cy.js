describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Main shop section', () => {
    cy.get('[data-cy=item-list]').children().should('have.length.at.least', 5)
    cy.get('[data-cy=item-list] > a:nth-child(1)').click()
    cy.get('[data-cy=gallery-list]').children().should('have.length.at.least', 1)
    cy.get('[data-cy=image]').should('be.visible').and($img => expect($img[0].naturalWidth).to.be.gt(0))
    cy.get('a[data-cy=link-back]').click()
    cy.get('[data-cy=item-list]').children().should('have.length.at.least', 5)
  })
  it('Change language', () => {
    const langTitleEN='Welcome, Take A Look At Our Products:'
    const langTitleDE='Griaß Di, schaue dir unsere Produkte an:'
    cy.get('[data-cy=lang-title]').contains(langTitleEN)
  })
})