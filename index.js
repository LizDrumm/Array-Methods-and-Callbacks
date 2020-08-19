import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

//(a) hometeam is the winner of the finals- Stage. answer is Germany 
const final = fifaData.filter (function(item){
   return item["Year"] === 2014 && item["Stage"] === "Final";
});

console.log('final',final)
console.log ('home', final[0]["Home Team Name"]);
//(b)
console.log ('away', final [0]["Away Team Name"]);
//(c)
console.log ('home goals', final [0]["Home Team Goals"]);
//(d)
console.log ('away goals', final[0]["Away Team Goals"]);
//(e)

const winner = fifaData.filter (function(item){
    return item["Year"] === 2014 && item["Stage"] === "Final" && item["Home Team Goals"]> item["Away Team Goals"];
 });
console.log ('winner', winner [0]["Home Team Name"]);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */
function getFinals(data){
const finalsData = data.filter (function(item){
return (item["Stage"])=== "Final" ;
});
return finalsData
}

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(data, getFinals){
    const years= getFinals(data);
    return years.map (function(item){
        return item ["Year"];
    });
}
console.log(getYears(fifaData,getFinals));


/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 


function getWinners(data, getFinals){
const winners= getFinals(data);
return winners.map(function (item){
 if (item["Home Team Goals"] > item ["Away Team Goals"]){
  return `${item["Home Team Name"]}`;
} 
else {
return `${item ["Away Team Name"]}`;
}
});
return winners;
}
console.log (getWinners(fifaData,getFinals));


/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinners, getYears) {
    let winners = getWinners (fifaData,getFinals) //giving a variable to to the invoked function
    //console.log (winners)- console logging to make sure info was correct
    let years =getYears (fifaData, getFinals)//giving a variable to to the invoked function
    //console.log (years)
    let winnerByYear = winners.map(function(winner,i){ //mapping through winners array and getting years from the callback functions- winner array only has winner and year
      return (`In ${years[i]}, ${winner} won the world cup!`)
    });
return winnerByYear
}
    console.log (getWinnersByYear(getWinners,getYears))

    //


//console.log(getWinnersByYear(getWinners(),getYears()));


/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let average=data.reduce(function(accum,i){
        return accum + i["Home Team Goals"] + i["Away Team Goals"]
    },0);
    return Math.round(average/fifaData.length)
}
console.log(getAverageGoals(fifaData))





/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
