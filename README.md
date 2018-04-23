# Practice: Solar System
## Setup
These commands are a helpful quick start. You may choose to ignore them completely and create your own directory structure. If you choose to use this recommendation, just copy the commands below and paste. It doesn't matter what directory you are currently in.

```js
mkdir -p ~/workspace/javascript/exercises/array-methods && cd $_
touch index.html
touch array-methods.js
```

## Requirements
Copy the code below into the JavaScript file, and follow the instructions in the comments.
``` js
const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/


// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]
```

## More Practice: Spam, Spam, Spam, Spam
You have been tasked with building a list of email addresses for all of our customers, so we can spam them with email about Miffles the Vampire Weiner Dog.

1. Create a new project in ```workspace```.
1. In your JavaScript file, define a variable named ```customers```.
1. Copy the contents of the ```customers.json``` and make that object the value of ```customers```.

From that object extract just the customers' email addresses and store them in a new array. You will need to use methods such as ```map()```, ```forEach()``` and/or ```concat()``` to accomplish this.

# Challenge: Chaining Methods
## Setup
These commands are a helpful quick start. You may choose to ignore them completely and create your own directory structure. If you choose to use this recommendation, just copy the commands below and paste. It doesn't matter what directory you are currently in.
```
mkdir -p ~/workspace/exercises/javascript/chaining-methods && cd $_
touch index.html
touch chaining.js
```

## Requirements
Using one single line of JavaScript code, complete the following tasks on the array of integers below.

1. Sort the numbers in descending order (10, 9, 8, 7, etc).
1. Remove any integers greater than 19.
1. Multiply each remaining number by 1.5 and then subtract 1.
1. Then output (either in the DOM or the console) the sum of all the resulting numbers.
```js
const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
```

# Advanced Challenge: Car Dealership

Copy the JSON from ```cars.json``` and assign it to a variable in a new application. This data holds sales information for a car dealership. Your job is to produce the following reports for the dealership based on their total 2017 sales.

1. Total profit for 2017
1. In which month did they sell the most cars?
1. Which salesperson sold the most cars?
1. Which salesperson made the most profit?
1. Which model was the most popular?
1. Which bank provided the most loans to our customers?