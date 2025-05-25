const fs = require('fs')
const Process = process.argv

if(Process[2] === 'add'){
fs.writeFileSync(Process[3],Process[4])
}
else if(Process[2] === 'remove'){
fs.unlinkSync(Process[3])
}
else{
    console.log('envalid input')
}