class Calculator {
    constructor() {
        this.result = 0;
    }

    add(value) {
        this.result += value;
        return this;
    }

    subtract(value) {
        this.result -= value;
        return this;
    }

    multiply(value) {
        this.result *= value;
        return this;
    }

    divide(value) {
        if (value === 0) {
            throw new Error("Cannot divide by zero");
        }
        this.result /= value;
        return this;
    }

    clear() {
        this.result = 0;
        return this;
    }

    getResult() {
        return this.result;
    }
}

// Example usage:
const calculator = new Calculator();
console.log(calculator.add(10).subtract(5).multiply(2).divide(5).getResult()); // Output: 2
calculator.clear();
console.log(calculator.getResult()); // Output: 0