function MulBy5(num) {
    return num * 5
}
MulBy5.power = 2

console.log(MulBy5(5));
console.log(MulBy5.power);
console.log(MulBy5.prototype);

function CreateUser(Username, Score) {
    this.Username = Username
    this.Score = Score
}

CreateUser.prototype.increment = function () {
    this.Score++
}

CreateUser.prototype.PrintMe = function () {
    console.log(`Price is ${this.Score}`);
}

const Coffee = new CreateUser("Coffee", 100)
const Tea = CreateUser("Tea", 70)

Coffee.PrintMe()