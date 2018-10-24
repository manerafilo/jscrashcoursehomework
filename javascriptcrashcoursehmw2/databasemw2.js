const fs = require('fs') // to save a file in node.js
module.exports={
    save:(package)=>{
      console.log(package)
      fs.writeFileSync('package.json',JSON.stringify(package))
      
},

load(){
   return JSON.parse (fs.readFileSync('package.json'))
}
  
}