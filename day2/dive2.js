const fs = require('fs')

const path = require('path')

const filePath = path.join(__dirname, '../day2data.txt')

function getPostionWithNewRules(){

    const movementsStr = fs.readFileSync(filePath, 'utf-8', (err, data) => {

        if(err){
            console.log(err)
            return
        }

        return data;


    })

    const arrOfMovements = movementsStr.split('\n');

    let horizontalPosition = 0;

    let depth = 0;

    let aim = 0;

    for(let i = 0; i < arrOfMovements.length ; i++){

        const command = arrOfMovements[i];

        //split command into direction and distance/number

        const partsOfCommand = command.split(' ')

        const [direction, numberStr] = partsOfCommand;

        const number = parseInt(numberStr, 10);

        switch(direction) {

            case 'down': 
                
                aim += number

                break;

            case 'up':

                aim -= number

                break;
            
            case 'forward':

                horizontalPosition +=  number 

                depth = depth + (aim * number)

                break;

        }

    }

    console.log(horizontalPosition * depth)
    

}

getPostionWithNewRules();