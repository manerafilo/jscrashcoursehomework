/*const fs = require('fs') // to save a file in node.js
module.exports={
    save:(package)=>{
      console.log(package)
      fs.writeFile('package.json',JSON.stringify(package))
    },
};

load(){
   return JSON.parse (fs.readFile('package.json','utf8'))
}*/


const fs = require('fs') // to save a file in node.js
module.exports={
    save:(package)=>{
        console.log(package)
        fs.writeFile('package.json',JSON.stringify(package))
    },
    load: () => {
        return JSON.parse (fs.readFile('package.json','utf8'))
    }
};
  

