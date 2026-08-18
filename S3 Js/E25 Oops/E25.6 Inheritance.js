class User {
    constructor(Username) {
        this.Username = Username
    }

    LogMe() {
        console.log(`Username is ${this.Username}`);

    }
}

class Teacher extends User {
    constructor(Username, Email, Password) {
        super(Username)
        this.Email = Email
        this.Password = Password
    }

    AddCourse() {
        console.log(`A new course was added by ${this.Username}`);

    }
}

const Coffee = new Teacher("Coffee", "Coffeeteac.com", "123")

Coffee.LogMe()

const CoffeeMocha = new User("CoffeeMocha")

CoffeeMocha.LogMe()

console.log(Coffee === CoffeeMocha);
console.log(Coffee instanceof Teacher);
console.log(Coffee instanceof User);