class User {
    constructor(Username) {
        this.Username = Username
    }

    LogMe() {
        console.log(`Username : ${this.Username}`);

    }

    static CreateId() {
        return `123`
    }
}

const Abhi = new User("Abhinav")
console.log(Abhi.CreateId());

class Teacher extends User {
    constructor(Username, Email) {
        super(Username)
        this.Email = Email
    }
}

const Phone = new Teacher("Phone", "Phone@gmail.com")

console.log(Phone.CreateId());