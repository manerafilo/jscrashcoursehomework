 
const School = require('./school.js')
module.exports =class Pupil{

  constructor(name, surname, id,pupils[]){
    //special object that refers to that instance that you create
    this.name= name //i will be access the name, when i ask for the name like armagan.name ..it will save it for me for future use  it s a reference to self
    this.surname= surname
    this.id= id
    this.pupils =[]
    console.log('im a poor pupil');
    //whenever im instantiating a new person, this constructor function is being called.I want this person has a name..
  }
  getName(){
    console.log('My name is', this.name)
  }
 getSurname(){
   console.log('My surname is', this.surname)
 }
 getId(){
   console.log('My ID is', this.id)
 }
 go(dcollege){
   this.dcollege=dcollege
   console.log('yuhu,Im going to ', dcollege)
   dcollege.pupils= this //im saving pupils to this school/dcollege. every school can have a single attendee. it stores not just name, but also the whole information
//pupil referes to dcollege, dcollege refers to pupil
   this.pupils.push(dcollege)//im saving meetup  to the list of the meetups
   dcollege.pupils.push(this)//i wanna record myself in the list of attendees of the meetup
 }

 /*attend(lesson){
   this.lesson=lesson
   console.log('yuhu',lesson)

 }*/
}

var anton = new Person( 'Anton','Mitchell',1234567) //I pass the name to the new person as a parameter
  //i wanna get the name of this object ..
var maria =new Person('Maria', 'Blatford',3456789)


console.log(pupil);
 anton.getName()
 anton.getSurname()
 anton.getId()
 maria.getName()
 maria.getSurname()
 maria.getId()

//how do i define the person has to have a name?
//pupil1.getName()
//pupil2.getName()


}
