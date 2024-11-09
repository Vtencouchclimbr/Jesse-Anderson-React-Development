import Footer from '../components/Footer.tsx';
import BarNav from '../components/BarNav.tsx';
import coder2 from '../utils/backgrounds/space1.jpg';

import './Code.css';

export default function Code() {
  return (
    
      <div className="projectContainer d-flex flex-column align-items-center min-vh-100"
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${coder2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      >
        <div className='barnav w-100'>
        <BarNav />
        </div>

        {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
    <div className="codeContainer1">
      <div className="codeContainer d-flex flex-column px-3"> 
        <div className="java1 btn-group">
            <button className="codeButton btn btn-secondary dropdown-toggle bg-dark m-1" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
              JS Objects
            </button>
            <ul className="codes1 dropdown-menu bg-dark p-2">
              <li className="text-light"><pre><code>{`// method to get the person's name
getName() {
    return this.name; // workhorse`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// method to set a new name
setName(newName) {
    this.name = newName; // workhorse
}`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// method to increase the person's age
incrementAge() {
    this.age += 1; // workhorse
}`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// method to get all hobbies
getHobbies() {
    return this.hobbies; // workhorse
}`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// method to add a new hobby
addHobby(newHobby) {
    this.hobbies.push(newHobby); // workhorse
}`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// method to check if the person is active
checkActiveStatus() {
    return this.isActive ? 'Active' : 'Inactive'; // workhorse
}`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// method to toggle active status
toggleActiveStatus() {
    this.isActive = !this.isActive; // workhorse
}`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// method to display person's info
getInfo() {
    return \`\${this.name} is \${this.age} years old and lives in \${this.city}\`; // workhorse
}`}
</code></pre></li>
            </ul>
        </div>


        <div className="java1 btn-group">
            <button className="codeButton btn btn-secondary dropdown-toggle bg-dark m-1" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
              JS Loops
            </button>
            <ul className="codes2 dropdown-menu bg-dark p-2">
              <li className="text-light"><pre><code>{`// for
for(let i = 0; i < Array.length; i++) {
    console.log(arr[i]);
}`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// iterating through arrays
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i< arr.length; i++) {
    console.log(arr[i]);
}`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// repeating a task a specific number of times
for (let i = 0; i < 3; i++) {
    console.log(arr[i]);
}`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// generating a sequence of numbers
for (let i = 1; i < 5; i++) {
    console.log(i);
}`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// accumulating a result (summing all elements of an array)
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += arr[i];
}
console.log('Sum', sum);`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// searching for a value
const searchArary = ['apple', 'banana', 'cherry'];
const target = 'banana';
for (let i = 0; i < searchArray.length; i++) {
    if (searchArray[i] === target) {
        console.log('Found', target);
        break;
    }
}`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// While loop
let n = 0;
while (n < 3) { // waiting for a condition to be met
    n++;
}
console.log(n); // expected output: 3`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// processing user input
let input;
while (input !== 'yes') {
    input = prompt('Type "yes" to continue:');
}`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// game loop
let playing = true;
while (playing) {
    console.log('Game is running...');
    playing = false;
}`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// polling a resource
let resourceReady = false;
while (!resourceReady) {
    console.log('Checking resources status...');
    if (Math.random() > 0.9) resourceReady = true;
}`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// do While loop
do {
    // code block to be executed
} while (condition);`}
</code></pre></li>
            </ul>
        </div>


        <div className="java1 btn-group">
            <button className="codeButton btn btn-secondary dropdown-toggle bg-dark m-1" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
              JS Filter
            </button>
            <ul className="codes3 dropdown-menu bg-dark p-2">
              <li className="text-light"><pre><code>{`// filter() creates a new array with all elements that pass the test implemented by the provided function
const newArray = array.filter(callback(element, index, array), thisArg);`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// example, filter in even numbers
const evenNumbers = numbers.filter(number => number % 2 === 0); // callback function asks if each number of the array is / by 2.`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// example, filter out null or undefined values
const validValues = array.filter(item => item !== null && item !== undefined);`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// example, filter based on object property
const activeUsers = users.filter(user => user.isActive); // filters in users with the isActive proerty set to true`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// example, filter out negative numbers
const positiveNumbers = numbers.filter(number => number >= 0); // filters in numbers with value greater than 0`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// example, filter in strings with length less than 4
const shortNames = names.filter(name => name.length <= 4); // filters in strings with fewer than 4 characters`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// example, filter based on multiple conditions
const affordableItems = items.filter(item => item.price >= 100 && item.price <= 500); // filters in items between 100-500`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// example, filter out duplicate items
const uniqueItems = array.filter((item, index, self) => self.indexOf(item) === index); // filters out duplicates`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// example, filtering by checking a substring in strings
const filteredWords = words.filter(word => word.includes('apple')); // finds a substring within a string`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// example, filtering by index
const everyOtherItem = array.filter((item, index) => index % 2 === 0); // filters by index`}
</code></pre></li>
            </ul>
        </div>

        <div className="java1 btn-group">
            <button className="codeButton btn btn-secondary dropdown-toggle bg-dark m-1" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
              JS Set
            </button>
            <ul className="codes4 dropdown-menu bg-dark p-2">
              <li className="text-light"><pre><code>{`// create a set
const mySet = new Set();`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// add, adds a value
mySet.add(1);`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// delete, deletes a value
mySet.delete(1);`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// has, checks if a value exists
mySet.add(2);
console.log(mySet.has(2)); // Output: true`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// clear all values
mySet.clear();
console.log(mySet); // Output: Set {}`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// iterate over the set
mySet.forEach(value => console.log(value)); // Output: 1, 2, 3 (each on new line)`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// size returns the number of values in a set
const howMuch = mySet.size; // Output: 3`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// values returns the values of the subject element
const values = mySet.values();
console.log([...values]); // Output: [1, 2, 3]`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// keys are an alias for values and provide the same return
const keys = mySet.keys();
console.log([...keys]); // Output: [1, 2, 3]`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// entries used here to assign key value pairs
const entries = mySet.entries();
for (let entry of entries) {
    console.log(entry); // Output: [1, 1], [2, 2], [3, 3] (each pair on a new line)
}`}
</code></pre></li>
            </ul>
        </div>

        <div className="java1 btn-group">
            <button className="codeButton btn btn-secondary dropdown-toggle bg-dark m-1" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
              JS Map
            </button>
            <ul className="codes5 dropdown-menu bg-dark p-2">
              <li className="text-light"><pre><code>{`// Create map
const map = new Map();`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// assign key value pairs 
for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
}`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// assign key value pairs
for (let num of nums) {
    map.set(num[0], num[1]);
}`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// set used to add values to a key value pair
map.set('name', 'alice');`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// get used to get the value associated with a key
const herName = map.get('name'); 
console.log(herName); // output: the value associated with the key 'name'`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// has used to check if a key exists
const isThere = map.has('name');
console.log(isThere); // expected output true
const isThere = map.has('notName');
console.log(isThere); // expected output false`}
</code></pre></li>
            </ul>
        </div>

        <div className="java1 btn-group">
            <button className="codeButton btn btn-secondary dropdown-toggle bg-dark m-1" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
              JS Timeout
            </button>
            <ul className="codes6 dropdown-menu bg-dark p-2">
              <li className="text-light"><pre><code>{`// setTimeout() delays implementation of a function for a determined interval setTimeout(func|code, delay, param1, param2, ...); 1000ms = 1sec
setTimeout(() => {
    console.log('Hello World!'); // it is necessary to use an anonymous callback function to pass the console.log, as opposed to passing the console log directly as a param to setTimeout
}, 500) // maximum delay is nearly 25 days`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// nested setTimeout() more flexible method than setInterval. the second call may be scheduled differently, depending on the result of the current one
let timerId = setTimeout(function tick() {
    alert('tick');
    timerId = setTimeout(tick, 2000);
}, 2000);`}
</code></pre></li>
              <li className="text-light"><pre><code>{`clearTimeout(timerId); // cancels the timeout so the alert will not happen`}
</code></pre></li>
              <li className="text-light"><pre><code>{`console.log(timerId); // same identifier (doesn't become null after canceling)`}
</code></pre></li>
              <li className="text-light"><pre><code>{`//setInterval() allows a function to run repeatedly; let timerId setInterval(func|code, [deloy], [arg1], [arg2] ...);
setInterval(function () {
    func(i++);
}, 1000); // this will call the function every second (or 1000ms)`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// clearInterval() clears the interval in order to stop the calls for the function
let timerId = setInterval(() => alert('tick'), 2000); // starts an interval that triggers an alert with 'tick' every 2 seconds
setTimeout(() => {
    clearInterval(timerId); // stops the interval after 5 seconds 
    alert('stop'); // triggers an alert saying 'stop'
}, 5000); // schedules the timeout to run after 5 seconds`}
</code></pre></li>
            </ul>
        </div>

        <div className="java1 btn-group">
            <button className="codeButton btn btn-secondary dropdown-toggle bg-dark m-1" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
              JS Common Methods
            </button>
            <ul className="codes7 dropdown-menu bg-dark p-2">
              <li className="text-light"><pre><code>{`console.log(\`the character at index \${index} is \${sentence.charAt(index)}\`);
// expected output: 'the character at index 4 is q'`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// substring() returns a substring of a specified string * substring(indexStart, indexEnd) * substring(indexStart) *
const str = 'mozilla';
console.log(str.substring(1, 3));
// expected output: 'oz'`}
</code></pre></li>
              <li className="text-light"><pre><code>{`console.log(str.substring(2));
// expected output: 'ziila'`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// toUppercase() converts a string to uppercase
const sentence = 'the quick brown fox jumps over the lazy dog';
console.log(sentence.toUpperCase());
// expected output: 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG'`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// toLowercase() converts a string to uppercase
const sentence = 'the quick brown fox jumps over the lazy dog';
console.log(sentence.toLowerCase());
// expected output: 'the quick brown fox jumps over the lazy dog'`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// split() splits a string based on given criteria
const words = str.split(' ');`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// reverse() reverse a string
const t = 'tree';
return t.reverse();`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// join() joins words into a string
return words.join(' ');`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// toString() converts a number to a string
number.toString();`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// splice() changes the contents of an array by removing or raplacing existing elements and or adding new elements
const nums = [1, 3, 4, 6];
nums.splice(1, 0, 2); // inserts 2 at index 1, subsequent items in array will be adjusted accordingly
nums.splice(4, 1, 5); // replaces 1 element at index 4, removing the existing item`}
</code></pre></li>
            </ul>
        </div>

        <div className="java1 btn-group">
            <button className="codeButton btn btn-secondary dropdown-toggle bg-dark m-1" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
              JS One-Liners
            </button>
            <ul className="codes8 dropdown-menu bg-dark p-2">
              <li className="text-light"><pre><code>{`// method to get the person's name
getName() {
    return this.name; // workhorse`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// method to set a new name
setName(newName) {
    this.name = newName; // workhorse
}`}
</code></pre></li>
            </ul>
        </div>

      </div>

      {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}

      {/* <div className="codeContainer d-flex flex-column px-3"> 
        <div className="java1 btn-group">
            <button className="codeButton btn btn-secondary dropdown-toggle bg-dark m-1" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
              Python
            </button>
            <ul className="codes1 dropdown-menu bg-dark p-2">
              <li className="text-light"><pre><code>{`// method to get the person's name
getName() {
    return this.name; // workhorse`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// method to set a new name
setName(newName) {
    this.name = newName; // workhorse
}`}
</code></pre></li>
            </ul>
        </div>


        <div className="java1 btn-group">
            <button className="codeButton btn btn-secondary dropdown-toggle bg-dark m-1" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
            Python Loops
            </button>
            <ul className="codes2 dropdown-menu bg-dark p-2">
              <li className="text-light"><pre><code>{`// method to get the person's name
getName() {
    return this.name; // workhorse`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// method to set a new name
setName(newName) {
    this.name = newName; // workhorse
}`}
</code></pre></li>
            </ul>
        </div>

        <div className="java1 btn-group">
            <button className="codeButton btn btn-secondary dropdown-toggle bg-dark m-1" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
            Python Filter
            </button>
            <ul className="codes3 dropdown-menu bg-dark p-2">
              <li className="text-light"><pre><code>{`// method to get the person's name
getName() {
    return this.name; // workhorse`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// method to set a new name
setName(newName) {
    this.name = newName; // workhorse
}`}
</code></pre></li>
            </ul>
        </div>

        <div className="java1 btn-group">
            <button className="codeButton btn btn-secondary dropdown-toggle bg-dark m-1" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
            Python Set
            </button>
            <ul className="codes4 dropdown-menu bg-dark p-2">
              <li className="text-light"><pre><code>{`// method to get the person's name
getName() {
    return this.name; // workhorse`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// method to set a new name
setName(newName) {
    this.name = newName; // workhorse
}`}
</code></pre></li>
            </ul>
        </div>

        <div className="java1 btn-group">
            <button className="codeButton btn btn-secondary dropdown-toggle bg-dark m-1" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
            Python Map
            </button>
            <ul className="codes5 dropdown-menu bg-dark p-2">
              <li className="text-light"><pre><code>{`// method to get the person's name
getName() {
    return this.name; // workhorse`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// method to set a new name
setName(newName) {
    this.name = newName; // workhorse
}`}
</code></pre></li>
            </ul>
        </div>

        <div className="java1 btn-group">
            <button className="codeButton btn btn-secondary dropdown-toggle bg-dark m-1" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
            Python Timeout
            </button>
            <ul className="codes6 dropdown-menu bg-dark p-2">
              <li className="text-light"><pre><code>{`// method to get the person's name
getName() {
    return this.name; // workhorse`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// method to set a new name
setName(newName) {
    this.name = newName; // workhorse
}`}
</code></pre></li>
            </ul>
        </div>

        <div className="java1 btn-group">
            <button className="codeButton btn btn-secondary dropdown-toggle bg-dark m-1" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
            Python Common Methods
            </button>
            <ul className="codes7 dropdown-menu bg-dark p-2">
              <li className="text-light"><pre><code>{`// method to get the person's name
getName() {
    return this.name; // workhorse`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// method to set a new name
setName(newName) {
    this.name = newName; // workhorse
}`}
</code></pre></li>
            </ul>
        </div>

        <div className="java1 btn-group">
            <button className="codeButton btn btn-secondary dropdown-toggle bg-dark m-1" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
            Python One-Liners
            </button> 
            <ul className="codes8 dropdown-menu bg-dark p-2">
              <li className="text-light"><pre><code>{`// method to get the person's name
getName() {
    return this.name; // workhorse`}
</code></pre></li>
              <li className="text-light"><pre><code>{`// method to set a new name
setName(newName) {
    this.name = newName; // workhorse
}`}
</code></pre></li>
            </ul>
        </div>

      </div> */}
    </div>


        <div className="footer1 col-12 mt-auto">
        <Footer />
        </div>
      </div>
    
  );
}

