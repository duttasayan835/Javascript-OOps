class BankAccount {
  constructor(accountHolder, initialBalance) {
    this.accountHolder = accountHolder;
    this.initialBalance = initialBalance;
  }
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited Rs.${amount}. New balance:Rs.${this.balance}`);
    } else {
      console.log("Invalid deposit amount.Please enter a positive amount");
    }
  }
  withdraw(amount) {
    if (amount > 0) {
      this.balance -= amount;
      console.log(`Withdraw Rs.${amount}.New balance:Rs${this.balance}`);
    } else {
      console.log("Invalid withdrawal amount. Please enter a positive amount");
    }
  }
  checkBalance() {
    console.log(`Account balance for ${this.accountHolder}:Rs.${this.balance}`);
  }
}
const myAccount = new BankAccount("Sayan", 1000);
myAccount.checkBalance();
myAccount.deposit(1000);
myAccount.deposit(-50);
myAccount.withdraw(1000);
myAccount.withdraw(1500);
myAccount.withdraw(-500);
myAccount.checkBalance();

//OUTPUT
// Account balance for Sayan:Rs.undefined
// Deposited Rs.1000. New balance:Rs.NaN
// Invalid deposit amount.Please enter a positive amount
// Withdraw Rs.1000.New balance:RsNaN
// Withdraw Rs.1500.New balance:RsNaN
// Invalid withdrawal amount. Please enter a positive amount
// Account balance for Sayan:Rs.NaN
