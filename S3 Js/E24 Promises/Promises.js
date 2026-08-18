const Ans = new Promise(function (Resolve, Reject)
{
  if(true)
  {
    return Resolve();
  }
  else
  {
    return Reject();
  }
})

Ans
  .then(function ()
  {
    console.log("Resolved");
  })
  .catch(function ()
  {
    console.log("Rejected");
  })

const Ans2 = new Promise(function (Resolve, Reject)
{
  let Val = Math.floor(Math.random()*10)
  console.log(Val);
  
  if(Val < 5)
  {
    return Resolve();
  }
  else
  {
    return Reject();
  }
})

Ans2
  .then(function ()
  {
    console.log("Resolved");
  })
  .catch(function ()
  {
    console.log("Rejected");
  })

const Ans3 = new Promise(function (Res, Rej)
{
  return Res("Reached destination");
})

const Val = Ans3
                .then(function (Data)
                {
                  console.log(Data);

                  return new Promise(function (Res, Rej)
                  {
                    return Res("Fresh up");
                  })
                })

const Val2 = Val
                .then(function (Data)
                {
                  console.log(Data);

                  return new Promise(function (Res, Rej)
                  {
                    return Res("Get ready");
                  })
                })

const Val3 = Val2
                  .then(function (Data)
                  {
                    console.log(Data);
                  })

const PromiseOne = new Promise(function (Resolve, Reject) 
{
  setTimeout(function () 
  {
    console.log("Async task is complete");

    Resolve()
  }, 1000);
});

PromiseOne.then(function () 
{
  console.log("Promise consumed");
});

new Promise(function (Resolve, Reject) 
{
  setTimeout(function () 
  {
    console.log("Async task 2");

    Resolve()
  }, 1000)
})
.then(function () 
{
  console.log("Async 2 resolved");
})

const PromiseThree = new Promise(function (Resolve, Reject) 
{
  setTimeout(function () 
  {
    Resolve({ username: "Ex", email: "example.com" })
  }, 1000)
})

PromiseThree.then(function (User) 
{
  console.log(User);
})

const PromiseFour = new Promise(function (Resolve, Reject) 
{
  setTimeout(function () 
  {
    let Error = true

    if (!Error) 
    {
      Resolve({ username: "Abhi", password: "123" })
    }

    else 
    {
      Reject('Error: something went wrong')
    }
  }, 1000)
})

PromiseFour
  .then(function (User) 
  {
    console.log(User);
    return User.username
  })
  .then(function (Username) 
  {
    console.log(Username);
  })
  .catch(function (Err) 
  {
    console.log(Err);
  })
  .finally(function () 
  {
    console.log("Promise is either resolved or rejected");
  })

const PromiseFive = new Promise(function (Resolve, Reject) 
{
  setTimeout(function () 
  {
    let Error = true

    if (!Error) 
    {
      Resolve({ username: "Javascript", password: "123" })
    }

    else 
    {
      Reject('Error: js went wrong')
    }
  }, 1000)
})

function Abc() 
{
  fetch(`https://randomuser.me/api/`)
    .then(function (Raw)
    {
      return Raw.json();
    })
    .then(function (Data)
    {
      console.log(Data);
    })
}
Abc();

async function Abc2() 
{
  let Raw = await fetch(`https://randomuser.me/api/`)
  let Data = await Raw.json();
  
  console.log(Data);
}
Abc2();

async function ConsumePromiseFive() 
{
  try 
  {
    const Response = await PromiseFive
    console.log(Response);
  }

  catch (Error) 
  {
    console.log(Error);
  }
}
ConsumePromiseFive()

async function GetAllUsers() 
{
  try 
  {
    const Response = await fetch('https://jsonplaceholder.typicode.com/users')
    const Data = await Response.json()

    console.log(Data);
  }
  catch (Error) 
  {
    console.log("Error :", Error);
  }
}
GetAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
  .then(function (Res) 
  {
    return Res.json()
  })
  .then(function (Data) 
  {
    console.log(Data);
  })
  .catch(function (Err) 
  {
    console.log("Error");
  })