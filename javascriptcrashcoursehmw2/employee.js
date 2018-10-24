module.exports = class Employee{


 
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    participate(event) {
        event.employees.push(this)
    }
}