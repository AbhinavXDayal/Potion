function User(Email, Password) 
{
    this._Email = Email
    this._Password = Password

    Object.defineProperty(this, 'Email', 
    {
        get: function () 
        {
            return this._Email.toUpperCase()
        },

        set: function (Value) 
        {
            this._Email = Value
        }
    })

    Object.defineProperty(this, 'Password', 
    {
        get: function () 
        {
            return this._Password.toUpperCase()
        },

        set: function (Value) 
        {
            this._Password = Value
        }
    })
}

const Coffee = new User("Coffe.com", "Cafe")
console.log(Coffee.Email);