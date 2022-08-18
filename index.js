class Person{
    constructor(color, form, age, height) {
        this.color = color
        this.form = form
        this.age = age
        this.height = height
    }

    hello = () => {
        return `I'm ${this.color} and i ${this.form} `
    }

    sayHello = () => {
        return `I have ${this.age} years and is height ${this.height} cm`
    }



}

const billy = new Person('Blue','Square')
const jhon = new Person('','','25','170')
const hello = billy.hello
const sayHello = jhon.sayHello
console.log((hello()))
console.log((sayHello()))