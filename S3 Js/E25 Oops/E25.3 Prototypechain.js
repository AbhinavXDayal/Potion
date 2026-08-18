let Characters = ["Omen", "Cypher"]

let CharPowers =
{
    Omen: "Teleport",
    Cypher: "Spy",
    GetCypherPower: function () {
        console.log(`Cypher power is ${this.Cypher}`);
    }
}

Object.prototype.Abhi = function () {
    console.log(`Abhi is present in all objects`);
}

Array.prototype.HeyAbhi = function () {
    console.log(`Abhi says hello`);

}

CharPowers.Abhi()
Characters.Abhi()
Characters.HeyAbhi()

const User = {
    Name: "Coffee",
    Email: "Coffee@gmail.com"
}

const Teacher =
{
    MakeVid: true

}

const TeachingSupport = {
    IsAvailable: false
}

const TaSupport =
{
    MakeAssignment: 'Js assignments',
    FullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

Object.setPrototypeOf(TeachingSupport, Teacher)

let AnotherUserName = "CoffeeCode     "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);

}

AnotherUserName.trueLength()

"Abhi".trueLength()
"IceCoffee".trueLength()