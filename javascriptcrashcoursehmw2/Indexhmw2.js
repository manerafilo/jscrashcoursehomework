
const Person = require('./employee')
const Conference = require('./conference')
const Database = require('./databasemw2')
const Chalk = require('chalk')
const person1 = new Person('Maya', 45)
const person2 = new Person('Kurt', 35)
 console.log(person1, person2)

const event = new Conference(12, 'Company meeting room')
person1.participate(event)
person2.participate(event)
event.participate()

Database.save(event)
const loadedFile = Database.load()
console.log(loadedFile.employees[0].name)