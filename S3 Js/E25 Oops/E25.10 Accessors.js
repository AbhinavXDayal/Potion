class User 
{
    constructor(Email, Password) 
    {
        this.Email = Email
        this.Password = Password
    }

    get Email() 
    {
        return this._Email.toUpperCase()
    }

    set Email(Value) 
    {
        this._Email = Value
    }

    get Password()
    {
        return `${this._Password}Abhi`
    }

    set Password(Value) 
    {
        this._Password = Value.toUpperCase()
    }
}

const Abhi = new User("Abhiexample.com", "abc")
console.log(Abhi.Password);
console.log(Abhi.Email);