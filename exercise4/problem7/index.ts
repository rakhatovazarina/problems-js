class TypeChecker {
    isBoolean(value: unknown): boolean {
        return typeof value === "boolean";
    }

    isNumber(value: unknown): boolean {
        return typeof value === "number";
    }

    isString(value: unknown): boolean {
        return typeof value === "string";
    }

    isFunction(value: unknown): boolean {
        return typeof value === "function";
    }
}

const is = new TypeChecker();
export default is;
