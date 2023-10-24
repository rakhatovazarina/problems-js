class Calculator {
    private result: number;

    constructor(initValue: number = 0) {
        this.result = initValue;
    }

    add(num: number): Calculator {
        this.result += num;
        return this;
    }

    subtract(num: number): Calculator {
        this.result -= num;
        return this;
    }

    divide(num: number): Calculator | string {
        if (num === 0) {
            return "Cannot divide by zero.";
        }
        this.result /= num;
        return this;
    }

    multiply(num: number): Calculator {
        this.result *= num;
        return this;
    }

    logResult(): Calculator {
        console.log(this.result);
        return this;
    }

    getResult(): number {
        return this.result;
    }
}

export default Calculator;
