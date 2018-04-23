const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
const print = document.createDocumentFragment();
const planetEl = document.getElementById("planets")

/*
Use the forEach method to add the name of each planet
to a section element in your HTML with an id of "planets".
Use string templates to construct the DOM elements.
*/

const printIt = function (planet) {
    const li = document.createElement("li");
    li.innerText = planet;
    print.appendChild(li);
    return planetEl
}

// Execute the printit function for each item in the array
planets.forEach(printIt)
planetEl.appendChild(print);


/*
Use the map method to create a new array where the
first letter of each planet is capitalized. Use the
`toUpperCase()` method on strings.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const upperCase = planets.map(function (planet) {
    const li = document.createElement("li");
    const upperPlanet = planet.charAt(0).toUpperCase() + planet.slice(1);
    li.textContent = upperPlanet;
    print.appendChild(li);
    return upperPlanet
})

// Print Capitolized Planets
    // Explanation as to why this works without being invoked
        //map(function => blah)
        //const upperCase = planets.map create to DOM capitalized planet
        //make array planet into section>Jupiter</section>, <seciton>Saturn, Mars, Earth
// planetEl.appendChild(print);

// Console Log Test uppercase function
// console.log(upperCase);

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const planetsWithE = planets.filter(planet => {
    const eSearch = (planet.includes("e") === true);
    return eSearch;
})

// Console Log test
// console.log(planetsWithE);




// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]


// ES6+ syntax
const totalSentance1 = words.reduce(
    (currentTotal, next) => currentTotal += " " + next
)

// Traditional syntax
const totalSentance2 = words.reduce(
    function (currentTotal, next) {
        return currentTotal += " " + next
    }
)
console.log(totalSentance1);
console.log(totalSentance2);