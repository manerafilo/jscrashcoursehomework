module.exports = class Employee2week3hmw{

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    participate(event) {
        event.employees.push(this)
    }

    static create(obj){
        return new Employee(obj.name, obj.age)
    }
}