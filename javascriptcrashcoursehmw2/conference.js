const Chalk = require('chalk')
//console.log(chalk.blue('Hello world!'));
module.exports = class Conference {

    constructor(time, location){

    this.time= time
    this.location=location
    this.employees=[]
}

participate(){
console.log(Chalk.red.bgYellow.bold(this.time,'conference is held at', Chalk.green(this.location), 'and number of participants are', this.employees.length))

}
}
