function speak(name){
    return "Hello " + name;
}

Object.prototype.wrap = function (func) {
    return func.bind(undefined, this)
}

speak = speak.wrap(function(original, yourName, myName){
    const greeting = original(yourName);
    return greeting + ", my name is " + myName;
})

var greeting = speak("Mary", "Kate");

console.log(greeting)