import React from 'react';
import Calculator from '../containers/Calculator';
import { render, fireEvent } from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator />)
  })

  it('should change running total on number enter', () => {
    const button9 = container.getByTestId('number9');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button9);
    expect(runningTotal.textContent).toEqual('9');
  })

  it('should add whole integers together', () => {
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const buttonAddition = container.getByTestId('operator-add');
    fireEvent.click(buttonAddition);
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const buttonEquals = container.getByTestId('operator-equals');
    fireEvent.click(buttonEquals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should subtract whole integers', () => {
    const button5 = container.getByTestId('number5');
    fireEvent.click(button5);
    const buttonSubtract = container.getByTestId('operator-subtract');
    fireEvent.click(buttonSubtract);
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const buttonEquals = container.getByTestId('operator-equals');
    fireEvent.click(buttonEquals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('1');
  })

  it('should multiply numbers together', () => {
    const button6 = container.getByTestId('number6');
    fireEvent.click(button6);
    const buttonMultiply = container.getByTestId('operator-multiply');
    fireEvent.click(buttonMultiply);
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const buttonEquals = container.getByTestId('operator-equals');
    fireEvent.click(buttonEquals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('42');
  })

  it('should divide integers', () => {
    const button8 = container.getByTestId('number8');
    fireEvent.click(button8);
    const buttonDivide = container.getByTestId('operator-divide');
    fireEvent.click(buttonDivide);
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const buttonEquals = container.getByTestId('operator-equals');
    fireEvent.click(buttonEquals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('2');
  })

  it('should concatenate multiple button clicks', () => {
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('123');
  })

  it('should chain multiple operations together', () => {
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const buttonAddition = container.getByTestId('operator-add');
    fireEvent.click(buttonAddition);
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const buttonMultiply = container.getByTestId('operator-multiply');
    fireEvent.click(buttonMultiply);
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);
    const buttonEquals = container.getByTestId('operator-equals');
    fireEvent.click(buttonEquals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('9');
  })

  it('should clear the running total without affecting the calculation', () => {
    const button0 = container.getByTestId('number0');
    const button1 = container.getByTestId('number1');
    const button5 = container.getByTestId('number5');
    const buttonAddition = container.getByTestId('operator-add');
    const buttonEquals = container.getByTestId('operator-equals');
    const buttonClear = container.getByTestId('clear');
    fireEvent.click(button1);
    fireEvent.click(button0);
    fireEvent.click(buttonAddition);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    fireEvent.click(buttonAddition);
    fireEvent.click(button5);
    fireEvent.click(buttonClear);
    fireEvent.click(button1)
    fireEvent.click(button0);
    fireEvent.click(buttonEquals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('25');





  })
})