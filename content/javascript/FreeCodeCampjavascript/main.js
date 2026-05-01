//BASIC
/*
window
document doctype
dom document object model

document.getElementById() : seleccionar un elemento por la clase
document.getElementById().innerHTML = "This is a test" 
document.getElementsByClassName("title").innerHTML = "This is a test" 
var doc = document.getElementById("title")
doc.innerHTML = "This is a test" 
document.getElementById("main").getElementsByTagName("li")
addEventListener("click", activateItem)
function activateItem(){
    alert("Click Detected");
}

querySelector(#) querySelectorAll(".") similar to getElementById and getElementByClassName
*/


// 1- RUNNING JAVASCRIPT
    // 
// 2- COMMENTS
    // 
    /**/

// 3- DATA TYPES
    // undefined, null, boolean, string, symbol, number and object

// 4- VARIABLES
    // var, let, const

// 5- DECLARATION AND ASSIGNMENT
    var a;// Declaration
    var b = 2; //Assignment   

// 6 - CASE SENSITIVE AND CAMEL CASE
    // studyLaterAtHome = true;

// 7 - OPERATIONS
    // + - / * % 
    // INCREMENT DECREMENT a++ a--

// 8 - FLOATS
    // var ourDecimal = 5.7;

// 9 - AUGMENTED
    var a = 3; 
    a += 10;
    a -= 12;
    a*= 15;
    console.log(a);

// 10 - QUOTES
    var myStr = "I am a \"double quoted\" string inside double quotes with a backlash (\\)";
    var myStr2 = "I am a 'single quoted' string inside double quotes";
    console.log("Quotes: " + myStr + ' \n'+myStr2);

// 11 - ESCAPE SEQUENCES
/*
    \'  single quote
    \"  double quoute
    \\  backslash
    \n  new line
    \r  carriage return
    \t  tab
    \b  backspace
    \f  form feed
*/

    var backSlash = "FirstLine\n\t\\Second Line\nThirdLine";
    console.log("Escape Sequences: " +backSlash);

// 12 - CONCATENATE
    var concatenate1 = "Hello";
    var concatenate2 = ", how are you Mike?";
    var concatenate3 = "I thought";
    concatenate3 += " you were on holidays !";
    console.log("Concatenate: + and also += \n" + concatenate1 + ' ' + concatenate2 +"\n" + concatenate3);

// 13 - LENGHT
    var longitud = "Hola como estas?";
    console.log(longitud + ' .lenght: ' + longitud.length);

// 14 - BRACKET NOTATION
    var firstLetterOfFirstName= "";
    var firstName = "Alberto";
    firstLetterOfFirstName = firstName[0];
    console.log("First letter of Ada: " + firstLetterOfFirstName +'\n variableName[1]');
    var nameWrong = "Olberto";

// 15 - FIND LAST CHARACTER
    var lastCharacterName = "Alberto";
    var lastCharacter = lastCharacterName[lastCharacterName.length - 1];
    console.log("last character of Alberto: " + lastCharacter + "\n lastCharacterName[lastCharacterName.lenght-1]");

// 16- WORD BLANKS
    function worldBlanks(myNoun, myAdjective, MyVerb, myAdverb){
        var result = "";
        result += "The" + " " + "myAdjective" + " " + myNoun + " " +  MyVerb + " to the store very " + myAdverb;
        return result;
    }
    console.log("Word Blanks: "+ worldBlanks("dog", "big", "ran", "quickly"));
    console.log("Word Blanks: "+ worldBlanks("bike", "fast", "flew", "smoothly"));
    
// 17 - ARRAYS 40:56
    var ourArray = ["John", 23];
    var myArray = ["Quincy", 1];

// 18 - NESTED ARRAYS
    var ourNestedArray = [["the universe", 42], ["the ocean", 32],["the sky", 12]];

// 19 - ACCESS / MODIFY ARRAY DATA
    var ourArray = [50,60,70];
    var ourData = ourArray[0]; //equals 50
    console.log("the data in the array is: "+ ourData + "\nourArray[0] = 15; \nourArray[0]");
    ourArray[0] = 15;
    var ourData = ourArray[0]; 
    console.log("the data in the array is: "+ ourData + "\n ourArray[0]");

// 20 - ACCESS MULTIDIMENSIONAL ARRAYS
    var myArray = [[1,2,3], [4,5,6], [7,8,9],[10,11,12]];
    var myData = myArray[0][0];
    console.log("Acces data in multidimensional array var myArray = [[1,2,3], [4,5,6], [7,8,9],[10,11,12]]; is: \n"+ myData + "\nmyArray[0][0];");


// 21 - ARRAY PUSH()
    var arrayPush = ["Simpson", "B", "boy"];
    console.log("Normal array: "+ arrayPush);
    arrayPush.push("happy", "joy");
    console.log("Array.push('happy', 'joy'): " + arrayPush);

// 22- ARRAY  POP() - REMOVES LAST ELEMENT
    var arrayPop = arrayPush.pop();
    console.log("Array.pop(): " + arrayPush);

// 23 - ARRAY SHIFT() - REMOVES FIRST ELEMENT
    var arrayPop = arrayPush.shift();
    console.log("Array.shift(): " + arrayPush);

// 24 - ARRAY UNSHIFT() - ADDS FIRST ELEMENT
    var arrayPop = arrayPush.unshift("Homer");
    console.log("Array.unshift(): " + arrayPush);

// 25 - SHOPPING LIST
    var myList = [["cereal",3], ["milk", 2],["bananas",3], ["juice", 2],["eggs", 6]];

// 26 - REUSABLE FUNCTION
    function ourReusableFunction(){
        console.log("All things must pass");
    }
    ourReusableFunction()

// 27 - FUNCTIONS WITH ARGUMENTS
    function ourFunctionWithArgs(a,b){
        console.log(a - b);
    }
    console.log("Function with arguments: 10-3");
    ourFunctionWithArgs(10, 3);

// 28 - GLOBAL SCOPE
    var myGlobal = 10;

    function fun1() {
       oopsGlobal = 5;
    //    if it is var, it is not available in other functions
    //    empty it is available
    }

    function fun2(){
        var output = "";
        if (typeof myGlobal != "undefined"){
            output += 'myGlobal: ' + myGlobal; 
        }
        if (typeof oopsGlobal != "undefined"){
            output += " oopsGlobal: " + oopsGlobal;
        }
        console.log(output);
    }
    console.log("Global Scope:")
    fun1();
    fun2();


// 29 - LOCAL SCOPE - only visible in the function
    function myLocalScope(){
        var myVar = 5;
        console.log(myVar);
    }
    console.log("Local Scope:")
    myLocalScope();
    // console.log(myVar); will give error

// 30 - FUNCTION WITH RETURN
    function minusSeven(num){
        return num - 7;
    }
    console.log("Function with return:")
    console.log(minusSeven(10));

// 31 - UNDEFINED VALUE RETURNED FROM A FUNCTION
    var sum = 0;
    function addThree(){
        sum = sum + 3;
    }
    function addFive(){
        sum += sum + 5;
    }

// 32 - ASSIGNEMENT WITH A RETURNED VALUE
    var changed = 0;
    function change(num){
        return (num + 5) / 3;
    }
    changed = change(10);
    
// 33 - STAND IN LINE
    function nextInLine(arr, item){
        arr.push(item);
        return arr.shift();
    }
    var testArr = [1,2,3,4,5];

    console.log("Before: "+ JSON.stringify(testArr));
    console.log(nextInLine(testArr, 6));
    console.log("After: "+ JSON.stringify(testArr));

// 34 - BOOLEAN VALUES
    function welcomeToBooleans() {
        return false;
    }
    console.log("Boolean Values: ")
    console.log(welcomeToBooleans());

// 35 - IF STATEMENTS
function ourTrueOrFalse(isItTrue){
    if (isItTrue){
        return "Yes it is true";
    }
    return "No, it's false";
}
console.log(ourTrueOrFalse(true));

// 36 - EQUALITY OPERATORS
console.log("Equality operators:\n3 == 3  True \n3 === '3'  false (strict equality, value and type)\n= is for assignment");
function normalEquality(a,b){
    if (a == b){
        return 'Equal';
    }
    return "Not Equal";
}

function strictEquality(a,b){
    if (a === b){
        return "Equal"
    }
    return "Not Equal";
}
console.log("Compare 10 and '10' with == and === : ")
console.log("Test1 10 == '10' : " + normalEquality(10,'10'));
console.log("Test2 10 === '10' : " + strictEquality(10,'10'));

// 37 - INEQUALITZ OPERATORS

function inequality(a,b){
    if (a != b){
        return "Inequal"
    }
    return "Equal";
}

function strictInequality(a,b){
    if (a !== b){
        return "Inequal"
    }
    return "Equal";
}


console.log("Test3 10 != 14 : " + inequality(10,14));
console.log("Test3 10 !== '10' : " + strictInequality(10,'10'));


// 38 - GREATER AND LESS THAN
console.log(">, <, >=, <=");
    if ((13 < 50) && (13> 8)){
        console.log("13 is major than 8 and minor than 50");
    }


// 39 40 - LOGICAL AND && --- OR ||

// 41 - ELSE AND ELSEIF STATEMENTS

    function elsesIf(a){
    if (elseStatement > 3){
        return "greater than 3";
    }else if (elseStatement = 5){
        return "equal to 5";
    }else {
        return "lower than 3";
    }
    }
    var elseStatement = 5;
    console.log(elseStatement + " is " + elsesIf(elseStatement));

// 42 - ORDER
// checks for the conditions

// 43 - GOLF

    var names = ["Hole in one!", "Eagle", "Birdie", "Par", "Bogey", "Double Boguy", "Go home!"];
    function golfScore(par, strokes){
        if (strokes == 1) {
            return names[0];
        }else if (strokes <= par - 2){
            return names[1];
        }else if (strokes == par - 1){
            return names[2];
        }else if (strokes == par){
            return names[3];
        }else if(strokes == par + 1){
            return names[4];
        }else if(strokes == par + 2){
            return names[5];
        }else if(strokes >= par + 3){
            return names[6];
        }
    }
    console.log(golfScore(5,4));


// 44 - SWITCH STATEMENTS
function caseInSwitch(val){
    var answer = '';
    switch(val){
      case 1:
        answer = "alpha";
        break;
        
      case 2:
        answer = "beta";
        break;
        
      case 3:
        answer = "gamma";
        break;

      default:
        answer = "theta";
        break;
    }

    return answer;
}
console.log(caseInSwitch(2));


// 45 - SWITCH STATEMENTS MULTIPLE
function caseInSwitch2(val){
    var answer = '';
    switch(val){
      case 1:
      case 2:
      case 3:
        answer = "alpha";
        break;
      case 4:
      case 5:
      case 6:
      default:
        answer = "betta";
        break;
    }

    return answer;
}
console.log(caseInSwitch2(8));


// 46 - RETURNING BOOLEAN VALUES FROM FUNCTIONS

function isLess(a,b){
    return a < b;
}
console.log(isLess(10,15));

// 47 - RETURNING EARLY PATTERN FROM FUNCTIONS
function abTest(a,b){

    if (a < 0 || b < 0){
        return undefined;
    }
    return Math.round(Mat.pow(Math.sqrt(a)+ Math.sqrt(b), 2));
}

console.log(abTest(-2,2));


// 48 - COUNTING CARDS
var count = 0;
function cc(card){
    switch (card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break; 
    }
    var holdbet = 'Hold';
    if (count > 0){
        holdbet = "Bet";
    }

    return count + " " + holdbet;
}

cc('K'); cc(3); cc(7); cc('K'); cc('A');
console.log(cc(4));

// 49 - BUILD JAVASCRIPT OBJECTS

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "favorite spot": "bed",
    "friends": ["everything!"]
};

var myDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "favorite spot": "park",
    "friends": []
}

// 50 - ACCESSING OBJECT PROPERTIES WITH DOT NOTATION
var legsValue = myDog.legs;
var tailsValue = myDog.tails;
console.log("Accessing object properties with dot notation: var tailsValue = myDog.tails;");
console.log(legsValue + " " + tailsValue);

// 51 - ACCESSING OBJECT PROPERTIES WITH BRACKETS NOTATION (if have space on it)

var legsValue = ourDog["favorite spot"];
var tailsValue = myDog["favorite spot"];
console.log("Accessing object properties with brackets: var tailsValue = myDog['favorite spot'];");
console.log(legsValue + " " + tailsValue);

// 52 - ACCESSING OBJECT PROPERTIES WITH VARIABLES

var textObjt = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16;
var player = textObjt[playerNumber];
console.log("Accessing object properties with variables: var player = textObjt[playerNumber];");
console.log(player);

// 53 - UPDATING OBJECT PROPERTIES
var newDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "favorite spot": "park",
    "friends": []
}

newDog.name = "Happy coder";
newDog.tails
console.log("Updating Object Properties: newDog.name = 'Happy coder';");
console.log(newDog.name);


// 54 - ADD NEW PROPERTIES TO AN OBJECT
var ChrisDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "favorite spot": "park",
    "friends": []
}

ChrisDog.bark = "woof woof!";

console.log("Add new properties: ChrisDog.bark = 'woof woof!';");
console.log(ChrisDog.bark);

// 55 - DELETE PROPERTIES FROM AN OBJECT
var SoniaDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "favorite spot": "park",
    "friends": []
}

delete SoniaDog.tails;
console.log("Add new properties: delete SoniaDog.tails;2");

// 56 - USING OBJECTS FOR LOOKUPS
function phoneticLookup(val){
    var result = "";
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy"
    };
    result = lookup[val];
    return result;
}
console.log(phoneticLookup("charlie"));

//  57 - TESTING OBJECTS FOR PROPERTIES
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp){
   
    if (myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    } else {
        return "Not found";
    }
};

console.log(checkObj("gift"));

// 58 - MANIPULATING COMPLEX OBJECTS
// ARRAY WITH OBJECTS INSIDE
var myMusic = [
    {
        "artist": "Jimi Hendrix",
        "title": "Machine Gun",
        "release_year": "1969",
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": false
    },
    {
        "artist": "The Beatles",
        "title": "Let it Be",
        "release_year": "1969",
        "formats": [
            "CD",
            "8T",
            "LP",
            "Youtube video"
        ],
        "gold": true
    }
]

// 59 - ACCESING NESTED OBJECTS
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log("Accesing nested objects: var gloveBoxContentes = myStorage.car.inside['glove box']; ");
console.log(gloveBoxContents);


// 60 - ACCESING NESTED ARRAYS
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }

];

var secondTree = myPlants[1].list[2];
console.log("Accesing nested arrays: var secondTree = myPlants[1].list[2]; ");
console.log(secondTree);

// 61 - RECORD COLLECTION
var collection = {
    "2548": {
        "album": "Slipepery Weh Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let it Rock",
            "You give love a Bad name"
        ]
    },
    "2568": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "Abba Gold"
    }
}

var collectionCopy = JSON.parse(JSON.stringify(collection));
console.log("var collectionCopy = JSON.parse(JSON.stringify(collection));");

function updateRecords(id, prop, value) {
    if (value === ""){
        delete collection[id][prop];
    } else if (prop === "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }else {
        collection[id][prop] = value;
    }

    return collection;
}
console.log("Update records:")
console.log(updateRecords(5439, "artist","Abba"));
console.log(updateRecords(2568, "tracks","Nothing Compares 2U"));



//  62 - ITERATE WITH WHILE LOOPS 2:10:15

var myArray = [];
var i = 0;
while(i < 5){
    myArray.push(i);
    i++;
};
console.log("Iterate with While Loops");
console.log(myArray);


//  62 - ITERATE WITH FOR LOOPS 
var forArray = [];

for(var i = 0; i < 5; i++){
    forArray.push(i);
};
console.log("Iterate with For Loops");
console.log(forArray);


//  63 - ITERATE WITH FOR LOOPS 
var oddArray = [];

for(var i = 0; i < 10; i += 2){ //can be backwards i -= 2 i--
    oddArray.push(i);
};
console.log("Iterate with For Loops incrementing by 2");
console.log(oddArray);


//  64 - ITERATE THROUGH AN ARRAY WITH A FOR LOOP
var ourArray = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 1; i < ourArray.length; i++){
    ourTotal += ourArray[i];
};
console.log("Iterate through an array with a for loop:");
console.log(ourTotal);

//  65 - NESTING FOR LOOPS
function multiplyAll(arr){
    var product = 1;
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr[i].length; j++){
            product *= arr[i][j];
        }
    }
    return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log("Nesting For Loops:");
console.log(product);

//  66 - ITERATING WITH DO...WHILE LOOPS
var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;
} while (i < 5);

console.log(i, myArray);

// 67 - PROFILE LOOKUP

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "054342343234",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "054312323234",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0543423843234",
        "likes": ["Intriguing Cases", "Violin"]
    }
]

function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++){
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}
var data = lookUpProfile("Sherlock", "likes");
console.log("Profile Lookup Exercise");
console.log(data);


// 68 - GENERATE RANDOM FRACTIONS

function randomFraction(){

    return Math.random(); 
}
console.log("Math.random()");
console.log(randomFraction());


// 68 - GENERATE RANDOM WHOLE NUMBERS

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
function randomWholeNum(){

    return Math.floor(Math.random() * 10); 
}
console.log("Math.floor(Math.random() * 10)");
console.log(randomWholeNum());

// 68 - GENERATE RANDOM WHOLE NUMBERS WITHIN A RANGE

function ourRandomRange(ourMin, ourMax){
    return Math.floor(Math.random() * (ourMax - ourMin +1)) + ourMin;
}

console.log("Math.floor(Mathrandom() * (ourMax - ourMin +1)) + ourMin;");
console.log(ourRandomRange(1, 100))

// 69 - PARSEINT FUNCTION
function convertToInteger1(str){

    return parseInt(str);
}

console.log("parseInt('56')");
console.log(convertToInteger1("56"));

// 70 - PARSEINT FUNCTION WITH RADIX

function convertToInteger(str){

    return parseInt(str,2);
}

console.log("With redix: parseInt('56',2)");
console.log(convertToInteger("10011"));

// 71 - USE THE CONDITIONAL (TERNARY) OPERATION
//  condition ? statement -if-true: statement-if-false

// function checkEqual(a,b) {
//     if (a === b){
//         return true;
//     }
//     else {
//         return false;
//     }
// }

function checkEqual(a,b) {
    return a === b ? true : false;
}

console.log("Ternary opeartor");
console.log(checkEqual(1,2));


// 72 - MULTIPLE CONDITIONAL (TERNARY) OPERATION

function checkSign(num){
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log("Multiple Ternary opeartor");
console.log(checkSign(10));

// 73 - DIFFERENCES BETWEEN VAR AND LET
let catName = "Quincy";
var quote;

catName = "Beau";

function catTalk(){
    "use strict";
    catName = "Oliver";
    quote = catName + " says Meow!";
}
console.log("Var vs Let");
console.log(catTalk());

// 74 - SCOPES OF VAR AND LET
// var are always accessible from anywhere
// let can be defined in multiple places block or outside
function checkScope(){
    "use strict";
    let i = "function scope";
    if (true){
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}
console.log("Scope of Var and Let");
console.log(checkScope());

// 75 - CONST

function printManyTimes(str){
    "use strict";

    const SENTENCE = str + " is cool";

    for (let i=0; i<str.length; i+=2){
        console.log(SENTENCE);
    }
}

console.log("Const");
console.log(printManyTimes("Tree"));

// 76 - MUTATE AN ARRAY DECLARED WITH CONST
const s = [5, 7, 2];
function editInPlace() {
    "use strict";

    s[0] = 2;[2,5,7];
    s[0] = 5;
    s[0] = 7;
}
editInPlace();
console.log("Mutate an array declared with const");
console.log(s);

// 77 - PREVENT OBJECT MUTATION
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
    }catch( ex ) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
console.log("PreventObjectMutation:");
const PI = freezeObj();



// 78 - USE ARROW FUNCTIONS TO WRITE CONCISE ANONYMOUS FUNCTIONS

// var magic = function() {
//     return new Date();
// }

//only if there is only one value

const magic = () =>  new Date();
console.log("Arrow Functions:  'const magic = () =>  new Date();'");
console.log(magic);



// 78 - WRITE ARROW FUNCTIONS WITH PARAMETERS

// var myConcat = function(arr1, arr2) {
//     return arr1.concat(arr2);
// }

console.log("Arrow Functions with parameters: 'var myConcat = (arr1, arr2) => arr1.concat(arr2);'");

var myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1,2],[3,4,5]));



// 79 - WRITE HIGHER ORDER ARROW FUNCTIONS
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && Number > 0).map(x => x * x);
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);


// 80 - WRITE HIGHER ORDER ARROW FUNCTIONS II
const increment = (function() {
    return function increment(number, value = 1){
        return number + value;
    }
})();

console.log(increment(5,2));
console.log(increment(5));

// 81- USE THE REST OPERATOR WITH FUNCTION PARAMETERS

// const sum2 = (function(){
//     return function sum2(x, y, z){
//         const args = [x, y, z];
//         return args.reduce((a,b) => a + b, 0);
//     };
// })();

const sum2 = (function(){
    return function sum2(...args){
        return args.reduce((a,b) => a + b, 0);
    };
})();

console.log("Rest operator with function parameters: ...args");
console.log(sum2(1, 2, 3, 4));

// 82- USE THE SPREAD OPERATOR TO EVALUATE ARRAYS IN PLACE ...
// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;
// (function(){
//     arr2 = arr1;
//     arr1[0] = 'potato'
// })();

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function(){
    arr2 = [...arr1];
    arr1[0] = 'potato'
})();
console.log(arr2);


// 83- USE DESTRUCTURING ASSIGNMENT TO ASSIGN VARIABLES FROM OBJECTS

var voxel = {x: 3.6, y: 7.4, z: 6.54};
const {x : q, y:w, z: e } = voxel;


// 84 - DESTRUCTURING ASSIGNMENT WITH NESTED OBJECTS
const LOCAL_FORECAST = {
    today: {min: 72, max: 83},
    tomorrow: {min: 73.3, max:84.6}
};

function getMaxOfTmrw(forecast){
    "use strict";
    // const maxOfTomorrow = undefined;
    const { tomorrow: {max: maxOfTomorrow }} = forecast;
    return maxOfTomorrow;
}
console.log("Destructuring Assignment with nested objects");
console.log(getMaxOfTmrw(LOCAL_FORECAST));


// 85 - USE DESTRUCTURING ASSIGNMENT TO ASSIGN VARIABLES FROM ARRAYS

const [z, x] = [1,2,3,4,5,6];
console.log(z,x);

let a2 = 8, b2 = 6;
(() => {
    "use strict";
    [a2, b2] = [b2, a2]
})();
console.log(a2);
console.log(b2);

// 86 - USE DESTRUCTURING ASSIGNMENT WITH THE REST OPERATOR

const source = [1,2,3,4,5,6,7,8,9];
function removeFirstTwo(list){

    const [, , ...arr] = list;

    return arr;
}

console.log("const [, , ...arr] = list;");
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);


// 86 - USE DESTRUCTURING ASSIGNMENT TO PASS AN OBJECT AS A FUNCTION's PARAMETERS
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function() {
    // return function half(stats){
        return function half({max, min}){
            return (max + min) / 2.0;
        
    };
})();
console.log(stats);
console.log(half(stats));

// 87 - CREATE STRINGS USING TEMPLATE LITERALS
const person = {
    name: "Zodiac Hasbro",
    age: 56
};

// template literal with multi-line and string interpolation with back ticks
// ${} javascript
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);

// 88 - WRITE CONCISE OBJECT LITERAL DECLARATIONS USING SIMPLE FIELDS
// const createPerson = (name, age, gender) => {
//     return {
//         name: name,
//         age: age,
//         gender: gender
//     };
// };

const createPerson = (name, age, gender) => ({name, age, gender});
console.log(createPerson("Zodiac Hasbro", 56, "Male"));

// 89 - WRITE CONCISE DECLARATIVE FUNCTIONS

// Long way
// const bicycle = {
//     gear: 2,
//     setGear: function(newGear){
//         "use strict";
//         this.gear = newGear;
//     }
// };

const bicycle = {
    gear: 2,
    setGear(newGear){
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);

// 90 - Use class syntax to Define a constructor function

// var SpaceShuttle = function(targetPlanet){
//     this.targetPlanet = targetPlanet;
// }

class SpaceShuttle {
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet; 
    }
}
console.log("Constructor");
var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet);


// 91 - GETTERS AND SETTERS

class Book {
    constructor(author){
        this._author = author;
    }

    get writer(){
        return this._author;
    }

    set writer(updatedAuthor){
        this._author = updatedAuthor;
    }
}

function makeClass(){
    class Thermostat{
        constructor(temp){
            this._temp = 5/9 * (temp - 32);
        }

        get temperature(){
            return this._temp;
        }

        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log("Getters and Setters");
console.log(temp);


// 92 - DIFFERENCE BETWEEN IMPORT AND REQUIRE

// import {capitalizeString} from "./string_function.js";
// const cap = capitalizeString("hello!");
// console.log(cap);

console.log("Import");
// 93 - USE EXPORT TO REUSE A CODE BLOCK

const capitalizeString2 = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
    // export { capitalizeString};
    // export const foo = "bar";
    // export const bar = "foo";
}
console.log("Export");


// 94 - USE * TO IMPORT EVERYTHING FROM A FILE
// import * as capitalizeStrings from "./string_function";
console.log('import * as capitalizeStrings from "./string_function";');

// 95 - CREATE AN EXPORT FALLBACK WITH EXPORT DEFAULT
// export default function substract(x,y) {return x - y};
console.log("export default function substract(x,y) {return x - y};");

// 96 - IMPORT A DEFAULT EXPORT

// import subtract from "math_functions";
// subtract(7,4);
console.log('import subtract from "math_functions";');


// 97 - 