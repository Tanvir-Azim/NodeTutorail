const readLine = require('readline')

const InterFace = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})
const ToDos=[];

const ShowMenu=()=>{
    console.log("\n1: Add a Task")
    console.log("2: View Task")
    console.log("3: Exit")

    InterFace.question('Choose A Option ',(option)=>{
            if(option === "1"){
                InterFace.question('Enter The Task ',(task)=>{
                    ToDos.push(task)
                    console.log('task added',task)
                    ShowMenu()
                })
                 
                
            }

                else if(option === "2"){
                     ToDos.forEach((task, index) => {
                    console.log(`${index + 1}. ${task}`);
                });

                    ShowMenu()
            }
                 else if(option === "3"){
                    console.log('Good Bye ')
            }
            else{
                console.log('Envalid Input')
                ShowMenu()
            }



    })
}

ShowMenu()