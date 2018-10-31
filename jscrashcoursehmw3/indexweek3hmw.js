const Person = require('./employee2week3hmw')
const Conference = require('./conferencehmwweek3')
const Database = require('./databasehmw3')
const Chalk = require('chalk')
const person1 = new Person('Maya', 45)
const person2 = new Person('Kurt', 35)
//const person5 = new Person('Eva',18)
//const person6= new Person('Mario', 29)
 console.log(person1, person2)

const event = new Conference(12, 'Company meeting room')
person1.participate(event)
person2.participate(event)

event.participate()

Database.save(event)
const loadedFile = Database.load()
console.log(loadedFile.employees[0].name)
console.log(loadedFile.employees[1].name)
//console.log(loadedFile.employees[2].name)
//console.log(loadedFile.employees[3].name)

//const person3 = new Person(loadedFile.employees[2].name,loadedFile.employees[2].age)
const person5= Employee.create(loadedFile.employees[2].name, loadedFile.employees[2].age)
const person6= Employee.create(loadedFile.employees[3].name,loadedFile.employees[3].age)
person5.participate(event)
person6.participate(event)
//map is a special version of forEach!!**
const convertedEmployees=employees.map(Employee.create)
convertedEmployees.participate(event)
//part 2


let readFile = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, contents) => {
            if (err) return reject(err)

            resolve(contents)
        })
    })
}



/*let writeFile = (filename,content) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, content, (err, contents) => {
            if (err) return reject(err)

            resolve(contents)
        })
    })
}*/


//4th version
    const main = async () => {
        const contents1 = await readFile(__dirname + '\jsubungwtmarmagan\output1.txt')
        console.log(contents1)
    
        const contents2 = await readFile(__dirname + '\jsubungwtmarmagan\output2.txt')
        console.log(contents2)
    
        const contents3 = await readFile(__dirname + '\jsubungwtmarmagan\output3.txt')
        console.log(contents3)
    }
    
  

    main()
    

