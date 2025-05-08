const Calculator = require('./test.js'); // Adjust the path if necessary

// filepath: /workspaces/skills-copilot-codespaces-vscode/test.test.js

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('should initialize with a result of 0', () => {
        expect(calculator.getResult()).toBe(0);
    });

    test('should add a value to the result', () => {
        calculator.add(10);
        expect(calculator.getResult()).toBe(10);
    });

    test('should subtract a value from the result', () => {
        calculator.add(10).subtract(5);
        expect(calculator.getResult()).toBe(5);
    });

    test('should multiply the result by a value', () => {
        calculator.add(10).multiply(2);
        expect(calculator.getResult()).toBe(20);
    });

    test('should divide the result by a value', () => {
        calculator.add(10).divide(2);
        expect(calculator.getResult()).toBe(5);
    });

    test('should throw an error when dividing by zero', () => {
        expect(() => calculator.divide(0)).toThrow('Cannot divide by zero');
    });

    test('should clear the result to 0', () => {
        calculator.add(10).clear();
        expect(calculator.getResult()).toBe(0);
    });

    test('should chain multiple operations correctly', () => {
        calculator.add(10).subtract(5).multiply(2).divide(5);
        expect(calculator.getResult()).toBe(2);
    });
});