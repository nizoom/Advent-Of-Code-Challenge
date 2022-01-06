
const fs = require ('fs')
const path = require ('path')

const filePath = path.join(__dirname, '../measurements.txt')


async function getIncreasedWindows(){

    const dataStr =  fs.readFileSync(filePath, 'utf-8', (err, data) => {

        if(err){
            console.log(err)
            return
        }
        
        return data

    }) 

    // convert str to arr

    const arrOfData = dataStr.split('\n')

    //tracker

    let timesWindowIncreases = 0

    // for loop to cycle through windows

    for(let i = 0 ; i < arrOfData.length ; i++){

        // firstWindow
        
        let element1 = parseInt(arrOfData[i], 10);

        let element2 = parseInt(arrOfData[i + 1], 10);

        let element3 = parseInt(arrOfData[i + 2], 10);

        let element4 = parseInt(arrOfData[i + 3], 10);

        const sumOfWindow1 = element1 + element2 + element3;

        const sumOfWindow2 = element2 + element3 + element4;

        if(sumOfWindow1 < sumOfWindow2){

            timesWindowIncreases ++
        }
        

    }
 

  console.log(timesWindowIncreases)


}

 

getIncreasedWindows();