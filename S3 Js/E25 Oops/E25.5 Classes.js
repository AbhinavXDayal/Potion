class User {
    constructor(Username, Email, Password) {
        this.Username = Username
        this.Email = Email
        this.Password = Password
    }

    EncryptPass() {
        return `${this.Password}abc`
    }

    ChangeUserName() {
        return `${this.Username.toUpperCase()}`
    }
}

const Coffee = new User("Coffee", "Coffee@gmail.com", "123")

console.log(Coffee.EncryptPass());
console.log(Coffee.ChangeUserName());

function User(Username, Email, Password) {
    this.Username = Username
    this.Email = Email
    this.Password = Password
}