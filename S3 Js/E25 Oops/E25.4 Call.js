function SetUserName(Username) {
    this.Username = Username
    console.log("Called");

}

function CreateUser(Username, Email, Password) {
    SetUserName.call(this, Username)
    this.Email = Email
    this.Password = Password
}

const Coffee = new CreateUser("Coffee", "Coffee@gmail.com", "123")
console.log(Coffee);