class Calculator {
    #result: number;

    constructor(initValue: number = 0) {
        this.#result = initValue;
    }

    add(value: number): this {
        this.#result += value;
        return this;
    }

    subtract(value: number): this {
        this.#result -= value;
        return this;
    }

    multiply(value: number): this {
        this.#result *= value;
        return this;
    }

    divide(value: number): this | string {
        if (value === 0) {
            return "Don't divide by zero!";
        }
        this.#result /= value;
        return this;
    }

    logResult(): this {
        console.log(this.#result);
        return this;
    }
}

export default Calculator;
