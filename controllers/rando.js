const randBetween = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandom = (req, res) => {
    // establish the variables we'll use to build our array
    let randomMin;  
    let randomMax;  
    let limit;      

    // provide default query parameters
    if (req.query.min) {randomMin = req.query.min;} else {randomMin = 1;}
    if (req.query.max) {randomMax = req.query.max;} else {randomMax = 100;}
    if (req.query.limit) {limit = req.query.limit;} else {limit = 100;}

    // establish our array
    let returnArray = [];

    // fill it with random numbers up the desired limit
    for (let i = 0;i<limit;i++) {
        returnArray.push(randBetween(randomMin,randomMax));
    }

    // send the array back to the user
    return res.json({min: randomMin, max: randomMax, limit: limit, randos: returnArray });
}
  
  module.exports = {
    getRandom
  }