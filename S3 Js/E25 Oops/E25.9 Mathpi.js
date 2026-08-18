const Descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(Descripter);

const Coffee = 
{
    Name: "Mocha",
    Price: 100,
    IsAvailable: true
}
console.log(Object.getOwnPropertyDescriptor(Coffee, "Name"));

Object.defineProperty(Coffee, "Name", 
{
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(Coffee, "Name"));

const Tea = 
{
    Name: "Masala tea",
    Price: 50,
    IsAvailable: true,
    OrderTea: function () 
    {
        console.log("Tea not prepared");
    }
}
console.log(Object.getOwnPropertyDescriptor(Tea, "Name"));

Object.defineProperty(Tea, "Name", 
{
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(Tea, "Name"));

for (let [key, value] of Object.entries(Tea)) 
{
    if (typeof value !== 'function') 
    {
        console.log(`${key} : ${value}`);
    }
}