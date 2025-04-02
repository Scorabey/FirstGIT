class BankAccount { constructor(owner, balance) { this.owner = owner this.balance = balance this.accountNumber = this.generateAccountNumber() } generateAccountNumber() { return Math.floor(10000000 + Math.random() * 90000000); }

getInfo() {
    console.log(`Владелец счета: ${this.owner}, баланс счета: ${this.balance}, номер аккаунта: ${this.accountNumber}`)
}

Deposit(amount) {
    this.amount = amount
    if(amount >= 0) {
        this.balance += amount
        console.log(`Ваш счет пополнился на ${amount}, ваш поточный счет: ${this.balance}`)
    } else {
        console.log('Ошибка: счет пополнения должен быть положительный!')
    }
}
Withdraw(amount) {
    this.balance += amount
    if(this.balance >= 0) {
        console.log(`Ваш счет уменьшился на ${amount}, ваш поточный счет: ${this.balance}`)
    } else {
        console.log('Вам не хватает денег')
    }
}
}
const Account1 = new BankAccount('Alex', 1000, '009988') Account1.getInfo(); Account1.Deposit(1000); Account1.getInfo(); Account1.Withdraw(-1000) Account1.getInfo()
