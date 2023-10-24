export class BankAccount {
  balance: number;

  constructor() {
    this.balance = 0;
  }

  withdraw(amount: number): number {
    if (this.balance >= amount) {
      this.balance -= amount;
      return this.balance;
    } else if (this.balance - amount < 100) {
      return -1;
    }
    return this.balance;
  }
}

export class FedexAccount {
  sendMail(recipient: string): void {
    console.log(`Sending mail to ${recipient}`);
  }

  receiveMail(sender: string): void {
    console.log(`Receiving mail from ${sender}`);
  }
}

export class KazPostAccount extends FedexAccount {
  bankAccount
