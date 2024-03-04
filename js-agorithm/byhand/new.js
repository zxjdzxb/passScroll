function myNew(consturctor, ...args) {
  const obj = Object.create(consturctor.prototype)
  const instance = consturctor.apply(obj, args)
  return instance instanceof Object ? instance : obj
}
function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.sayHello = function () {
  console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`)
}

const john = myNew(Person, 'John', 30)
john.sayHello() // Output: Hello, I'm John and I'm 30 years old.
