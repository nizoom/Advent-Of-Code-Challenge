// TODO: tracking depth/vertical and horizontal movement forward , depth number going up means the sub going deeper down

const fs = require('fs')

const path = require('path')

const filePath = path.join(__dirname, '../day2data.txt' )

function getPostion(){

    const movementsStr = fs.readFileSync(filePath, 'utf-8', (err, data) => {

        if(err){
            console.log(err)
            return
        }
        
        return data;

    } )

    const arrOfMovements = movementsStr.split('\n')

    let horizontalPosition = 0;

    let depthPosition = 0;

    for (let i = 0 ; i < arrOfMovements.length ; i ++){

        //get full str of element

        let strElement = arrOfMovements[i];

        //split the element into the useful pieces 

        const arrOfString = strElement.split(' ')

        let direction = arrOfString[0];

        let number = parseInt(arrOfString[1], 10);

        //which direction is this element sending the submarine

        switch(direction) {

            case 'up' :

                depthPosition = depthPosition - number

                break; 

            case 'down' : 

                depthPosition = depthPosition + number 

                break; 

            case 'forward' : 

                horizontalPosition = horizontalPosition + number 

        }

    }

    console.log(depthPosition * horizontalPosition)


}

getPostion()