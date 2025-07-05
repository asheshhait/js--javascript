//singleton

// object literals


const mySym = Symbol("key1")
const user = {
    name:"ashesh",
    "full name": "ashesh hait",
    age :22,
    [mySym]: "mykey1",
    hight:5.6,
    email:"ashesh@gmail.com",
    lastLoggin:["monday","sunday"]
}

console.log(user.email)
console.log(user["email"])
 console.log(user["full name"])
 console.log(user[mySym])

 // Object.freeze(JsUser)
user.email = "ashesh@gmail.com"
console.log(user);


user.greeting = function(){
    console.log("Hello JS user");
}
user.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(user.greeting());
console.log(user.greetingTwo());