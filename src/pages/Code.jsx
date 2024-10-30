import Footer from '../components/Footer';
import Dark4 from '../utils/backgrounds/climbing.jpg';


import './Code.css';


export default function Code() {
  return (
    
      <div className="projectContainer d-flex align-items-center min-vh-100"
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${Dark4})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        border: '1px solid white',
      }}
      >
          <div className="container">
            <div className="row justify-content-center ">
              <div className="col-12 col-sm-8 col-md-6 col-lg-4 mb-4 d-flex glow-on-hover">
                <div className="card-body infoCard">
                  <h5 className="card-title cardName">Code Examples</h5>
                  <hr />
                  
                  <pre>
                <code>
{`// Cool one liners
let nums = num.string().split(''); // number to string into items

// OBJECTS
const person = {
    name: 'Alice',
    age: 30,
    city: 'New York',
    hobbies: ['reading', 'swimming', 'hiking'],
    isActive: true,

    // method to get the person's name
    getName() {
        return this.name; // workhorse
    },

    // method to set a new name
    setName(newName) {
        this.name = newName; // workhorse
    },

    // method to increase the person's age
    incrementAge() {
        this.age += 1; // workhorse
    },

    // method to get all hobbies
    getHobbies() {
        return this.hobbies; // workhorse
    },

    // method to add a new hobby
    addHobby(newHobby) {
        this.hobbies.push(newHobby); // workhorse
    },

    // method to check if the person is active
    checkActiveStatus() {
        return this.isActive ? 'Active' : 'Inactive'; // workhorse
    },

    // method to toggle active status
    toggleActiveStatus() {
        this.isActive = !this.isActive; // workhorse
    },

    // method to display person's info
    getInfo() {
        return \`\${this.name} is \${this.age} years old and lives in \${this.city}\`; // workhorse
    }
};

// accessing name
console.log(person.getName());

// changing name
person.setName('Bob');
console.log(person.getName());

// incrementing age
person.incrementAge();
console.log(person.age);

// accessing hobbies
console.log(person.getHobbies());

// adding a new hobby
person.addHobby('cycling');

// checking active status
console.log(person.checkActiveStatus());

// toggling active status
person.toggleActiveStatus();
console.log(person.checkActiveStatus());

// displaying all information
console.log(person.getInfo());


// LOOPS
// for
for(let i = 0; i < Array.length; i++) {
    console.log(arr[i]);
}
// iterating through arrays
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// repeating a task a specific number of times
for (let i = 0; i < 3; i++) {
    console.log(arr[i]);
}
// generating a sequence of numbers
for (let i = 1; i < 5; i++) {
    console.log(i);
}
// searching for a value
const searchArray = ['apple', 'banana', 'cherry'];
const target = 'banana';
for (let i = 0; i < searchArray.length; i++) {
    if (searchArray[i] === target) {
        console.log('Found', target);
        break;
    }
}
// accumulating a result (summing all elements of an array)
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += arr[i];
}
console.log('Sum', sum);


// While
let n = 0;
while (n < 3) { // waiting for a condition to be met
    n++;
}
console.log(n); // expected output: 3

// processing user input
let input;
while (input !== 'yes') {
    input = prompt('Type "yes" to continue:');
}

// reading data from a file or stream
const fs = require('fs');
let data = '';
const stream = fs.createReadStream('file.txt');
stream.on('data', (chunk) => {
    data += chunk;
});
stream.on('end', () => {
    console.log('file read complete:', data);
});

// infinite loop
while (true) {
    console.log('Running...');
    if (Math.random() >= 0.8) break;
}

// game loop
let playing = true;
while (playing) {
    console.log('Game is running...');
    playing = false;
}

// polling a resource
let resourceReady = false;
while (!resourceReady) {
    console.log('Checking resource status...');
    if (Math.random() > 0.9) resourceReady = true;
}


// dowhile
// the dowhile loop is similar to the while loop, but the condition is evaluated after the loop body.
do {
    console.log('This runs at least once');
    count++;
} while (count < 1);


// FILTER
const newArray = array.filter(callback(element, index, array), thisArg);
// example, filter in even numbers
const evenNumbers = numbers.filter(number => number % 2 === 0);
// example, filter out null or undefined values
const validValues = array.filter(item => item !== null && item !== undefined);


// Set methods
const mySet = new Set();
mySet.add(1);
mySet.delete(1);
mySet.add(2);
console.log(mySet.has(2)); // Output: true
mySet.clear();
console.log(mySet); // Output: Set {}

// Hashmap
const map = new Map();
for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
}
for (let num of nums) {
    map.set(num[0], num[1]);
}

// Random number generation
const x = Math.floor(Math.random() * 10); // expected value of x is a whole number between 1-10

// Function with optional parameters
function greeting(name, message = 'Welcome to hubspot!') {
    return \`hello \${name}, \${message}\`;
}
console.log(greeting('john'));

// Inline function
let sayHello = () => console.log('Hello Reader!');
sayHello();


// Callback function
function sayHello(name, callback) {
    console.log('hello' + name);
    callback();
}
sayHello('User', function(){
    console.log('welcome to hotspot');
});

// String methods
let str = 'hello world';
let length = str.length;
console.log(length); // 11

// indexOf() example
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));
// substring() example
const str = 'mozilla';
console.log(str.substring(1, 3));
`}</code>
              </pre>
                  
                </div>
              </div>
            </div>
          </div>


          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-8 col-md-6 col-lg-4 mb-4 d-flex glow-on-hover">
                <div className="card-body infoCard">
                  <h5 className="card-title cardName">Code Examples</h5>
                  <hr />
                  
                  <pre>
                <code>
{`// Cool one liners
let nums = num.string().split(''); // number to string into items

// OBJECTS
const person = {
    name: 'Alice',
    age: 30,
    city: 'New York',
    hobbies: ['reading', 'swimming', 'hiking'],
    isActive: true,

    // method to get the person's name
    getName() {
        return this.name; // workhorse
    },

    // method to set a new name
    setName(newName) {
        this.name = newName; // workhorse
    },

    // method to increase the person's age
    incrementAge() {
        this.age += 1; // workhorse
    },

    // method to get all hobbies
    getHobbies() {
        return this.hobbies; // workhorse
    },

    // method to add a new hobby
    addHobby(newHobby) {
        this.hobbies.push(newHobby); // workhorse
    },

    // method to check if the person is active
    checkActiveStatus() {
        return this.isActive ? 'Active' : 'Inactive'; // workhorse
    },

    // method to toggle active status
    toggleActiveStatus() {
        this.isActive = !this.isActive; // workhorse
    },

    // method to display person's info
    getInfo() {
        return \`\${this.name} is \${this.age} years old and lives in \${this.city}\`; // workhorse
    }
};

// accessing name
console.log(person.getName());

// changing name
person.setName('Bob');
console.log(person.getName());

// incrementing age
person.incrementAge();
console.log(person.age);

// accessing hobbies
console.log(person.getHobbies());

// adding a new hobby
person.addHobby('cycling');

// checking active status
console.log(person.checkActiveStatus());

// toggling active status
person.toggleActiveStatus();
console.log(person.checkActiveStatus());

// displaying all information
console.log(person.getInfo());


// LOOPS
// for
for(let i = 0; i < Array.length; i++) {
    console.log(arr[i]);
}
// iterating through arrays
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// repeating a task a specific number of times
for (let i = 0; i < 3; i++) {
    console.log(arr[i]);
}
// generating a sequence of numbers
for (let i = 1; i < 5; i++) {
    console.log(i);
}
// searching for a value
const searchArray = ['apple', 'banana', 'cherry'];
const target = 'banana';
for (let i = 0; i < searchArray.length; i++) {
    if (searchArray[i] === target) {
        console.log('Found', target);
        break;
    }
}
// accumulating a result (summing all elements of an array)
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += arr[i];
}
console.log('Sum', sum);


// While
let n = 0;
while (n < 3) { // waiting for a condition to be met
    n++;
}
console.log(n); // expected output: 3

// processing user input
let input;
while (input !== 'yes') {
    input = prompt('Type "yes" to continue:');
}

// reading data from a file or stream
const fs = require('fs');
let data = '';
const stream = fs.createReadStream('file.txt');
stream.on('data', (chunk) => {
    data += chunk;
});
stream.on('end', () => {
    console.log('file read complete:', data);
});

// infinite loop
while (true) {
    console.log('Running...');
    if (Math.random() >= 0.8) break;
}

// game loop
let playing = true;
while (playing) {
    console.log('Game is running...');
    playing = false;
}

// polling a resource
let resourceReady = false;
while (!resourceReady) {
    console.log('Checking resource status...');
    if (Math.random() > 0.9) resourceReady = true;
}


// dowhile
// the dowhile loop is similar to the while loop, but the condition is evaluated after the loop body.
do {
    console.log('This runs at least once');
    count++;
} while (count < 1);


// FILTER
const newArray = array.filter(callback(element, index, array), thisArg);
// example, filter in even numbers
const evenNumbers = numbers.filter(number => number % 2 === 0);
// example, filter out null or undefined values
const validValues = array.filter(item => item !== null && item !== undefined);


// Set methods
const mySet = new Set();
mySet.add(1);
mySet.delete(1);
mySet.add(2);
console.log(mySet.has(2)); // Output: true
mySet.clear();
console.log(mySet); // Output: Set {}

// Hashmap
const map = new Map();
for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
}
for (let num of nums) {
    map.set(num[0], num[1]);
}

// Random number generation
const x = Math.floor(Math.random() * 10); // expected value of x is a whole number between 1-10

// Function with optional parameters
function greeting(name, message = 'Welcome to hubspot!') {
    return \`hello \${name}, \${message}\`;
}
console.log(greeting('john'));

// Inline function
let sayHello = () => console.log('Hello Reader!');
sayHello();


// Callback function
function sayHello(name, callback) {
    console.log('hello' + name);
    callback();
}
sayHello('User', function(){
    console.log('welcome to hotspot');
});

// String methods
let str = 'hello world';
let length = str.length;
console.log(length); // 11

// indexOf() example
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));
// substring() example
const str = 'mozilla';
console.log(str.substring(1, 3));
`}</code>
              </pre>
                  
                </div>
              </div>
            </div>
          </div>


        <div className="footer col-12 col-md-6 col-lg-4">
        <Footer />
        </div>
      </div>
    
  );
}

