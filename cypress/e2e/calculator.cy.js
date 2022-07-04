describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons #1', () => {
    cy.get('#number0').click();
    cy.get('.display').should('have.text', '0');
  })

  it('should have working number buttons #2', () => {
    cy.get('#number1').click();
    cy.get('.display').should('have.text', '1');
  })

  it('should have working number buttons #3', () => {
    cy.get('#number3').click();
    cy.get('.display').should('have.text', '3');
  })

  it('should have working number buttons #4', () => {
    cy.get('#number4').click();
    cy.get('.display').should('have.text', '4');
  })

  it('should have working number buttons #5', () => {
    cy.get('#number5').click();
    cy.get('.display').should('have.text', '5');
  })

  it('should have working number buttons #6', () => {
    cy.get('#number6').click();
    cy.get('.display').should('have.text', '6');
  })

  it('should have working number buttons #7', () => {
    cy.get('#number7').click();
    cy.get('.display').should('have.text', '7');
  })

  it('should have working number buttons #8', () => {
    cy.get('#number8').click();
    cy.get('.display').should('have.text', '8');
  })

  it('should have working number buttons #9', () => {
    cy.get('#number9').click();
    cy.get('.display').should('have.text', '9');
  })

  it('should have working number buttons #0', () => {
    cy.get('#number0').click();
    cy.get('.display').should('have.text', '0');
  })

  it('should update display with result of arithemetical operations #divide', () => {
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('have.text', '0.4');
  })
  it('should update display with result of arithemetical operations #multiply', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('have.text', '10');
  })
  it('should update display with result of arithemetical operations #subtract', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('have.text', '-3');
  })
  it('should update display with result of arithemetical operations #add', () => {
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('have.text', '7');
  })

  it('should be able to chain operators together', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('have.text', '5');
  })

  it('should be able to divide 1,000,000,000 by 1,000,000,000', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-divide').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('have.text', '1');
  })

  it('should be able to multiply 1,234,567,890 by 1,234,567,890', () => {
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#number5').click();
    cy.get('#number6').click();
    cy.get('#number7').click();
    cy.get('#number8').click();
    cy.get('#number9').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#number5').click();
    cy.get('#number6').click();
    cy.get('#number7').click();
    cy.get('#number8').click();
    cy.get('#number9').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('have.text', '1524157875019052000');
  })

  it('should be able to add decimals', () => {
    cy.get('#number0').click();
    cy.get('#decimal').click();
    cy.get('#number1').click();
    cy.get('#operator-add').click();
    cy.get('#number0').click();
    cy.get('#decimal').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0.300000000');
  })
  // I'm not changing this test because It's not react's fault that our stupid human brains
  // don't understand that 0.1 + 0.2 only adds up to 0.3 in our base 10 numbering system.

  // We wouldn't think twice if we tried to divide 2 by 3 in base 10 and ended up with
  // another floating point rounding error. Binary is a perfectly valid base numbering system
  // and claiming that it needs to conform to our version of 'correct' is frankly bullying.

  it('should return (i) when dividing by zero', () => {
    cy.get('#number1').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('have.text', 'i');
  })

  xit('should be able subtract negative integers', () => {
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('have.text', '1');
  })
})