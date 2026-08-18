const User =
{
    UserName: "Abhi",
    LogInCount: 7,
    SignedIn: true,

    GetUserDetails: function () {
        console.log("Got user details from db");
        console.log(`Username - ${this.UserName}`);
        console.log(this);

    }
}
console.log(User.UserName);
console.log(User.GetUserDetails());

function User2(UserName, LogInCount, IsLoggedIn) {
    this.UserName = UserName
    this.LogInCount = LogInCount
    this.IsLoggedIn = IsLoggedIn
    this.greeting = function () {
        console.log(`Welcome ${this.UserName}`);
    }

    return this
}

const UserOne = User2("Code", 5, true)
const UserTwo = User2("Js", 7, false)

console.log(UserOne);
console.log(UserTwo);

const UserThree = new User2("C++", 3, false)
const UserFour = new User2("Py", 2, true)

console.log(UserThree);
console.log(UserFour);