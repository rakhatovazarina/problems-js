class BankAccount {
    #balance: number = 0;

    withdraw(money: number): number {
        if (money <= 0 || money > this.#balance) {
            return -1;
        }
        this.#balance -= money;
        return this.#balance;
    }

    deposit(money: number): number {
        if (money <= 0 || money > 1000000) {
            return -1;
        }
        this.#balance += money;
        return this.#balance;
    }
}

const account = new BankAccount();

console.log(account.withdraw(100));       // -1
console.log(account.deposit(100));        // 100
console.log(account.withdraw(10));        // 90
console.log(account.deposit(10_000_000)); // -1
console.log(account.withdraw(10));        // 80

export default BankAccount;
