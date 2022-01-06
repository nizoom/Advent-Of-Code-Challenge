//TODO: count the number of times a depth measurement increases from the previous measurement. (There is no measurement before the first

const fs = require ('fs')

fs.readFile(__dirname + '/measurements.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err)
        return
    }
    
    createArrayOfMeasurements(data)

}) 


function createArrayOfMeasurements(textOfMeasurements){

    const measurements = textOfMeasurements.split('\n')

    countDistanceIncreaseTimes(measurements)

}



function countDistanceIncreaseTimes(measurements){

    let timesIncreased = 0

    //for every measurement except the first 
    for( let i = 1 ; i < test.length ; i ++){

 
        if( test[i] > test[i - 1] ){
            console.log(timesIncreased)
            timesIncreased ++
        }


    }

    console.log(timesIncreased)

    return timesIncreased
}



const test = [193,
    195,
    204,
    208,
    219,
    230,
    231,
    233,
    234,
    241,
    253,
    260,
    261,
    265,
    268,
    279,
    277,
    297,
    299,
    300,
    306,
    308,
    312,
    313, //22
    382,
    384,
    385,
    386,
    388,
    417,
    419,
    424,
    429,
    435,
    438,
    439,
    454,
    468,
    498,
    504,
    510,
    512,
    514,
    518,
    526 //43

] 