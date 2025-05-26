const fs = require('fs');
const path = require('path');
const filePath=path.join(__dirname,'AllFile')

const dirPath = `${filePath}/data.txt`

for(i=0;i<6;i++){
    fs.writeFileSync(filePath + "/new" +i+ ".txt","HELLOW"+i) 
}

fs.readFileSync(dirPath,(err,data)=>{
    console.log(data)
})
