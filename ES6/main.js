const beatles = ['Paul', 'George', 'John', 'Ringo'];

function printNames(names){
    function actuallyPrintingNames(){
        for (let index = 0; index < names.length; index++){
            let name = names[index];

            console.log(name + 'was found at index' + index);
        }
    }
    actuallyPrintingNames();
}

printNames(beatles);

const name = "Bob";
const hellp = `Helo ${name}`;
//Const needs an immediate assignment; one cannot do "const name" without "= 'Bob';" let, however, does not. Const is not hoisted, but var is.

function buildCardFor(person) {
    return `
      <div class="card">
        <h3 class="float-right">
          <small class="text-uppercase">Joined ${new Date(person.createdAt)}</small>
        </h3>
        <h2 class="h3">
          ${person.firstName} ${person.lastName}
          <small> ${person.username} </small>
        </h2>
        <h4> ${person.email} </h4>
      </div>
    `;
  }  

  //backticks allow you to import an entire paragraph without changing its structure at line breaks, or to import templates, without having to worry about the re-formatting and \/n\ bs.

  const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};

const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

const { email, firstName } = person;
const [firstAnimal, secondAnimal, thirdAnimal] = animals;
console.log(email);
// => bob@marley.com
console.log(firstAnimal);
// => horse

const { email: bobsEmail, firstName, lastName }


// Can we destructure into a distinct variable?

const { hashedPassword } = person;    
    
// That first example will work, but it's unecessary. The second example won't throw an error, but it won't have the information you expect either. When destructuring from objects the property names must be matched exactly, so in this example, because hashedPassword does not exist on our person object, it will be undefined.

// Not to worry. The JS maintainers already considered this scenario and have a way to specify exactly what you want to destructure, whilst also supplying a new variable name. 

const password = '12345';
const { password: hashedPassword } = person;
    
// Specifying the property name, password, will access the value of that property on our object. The colon : after the property name followed by your new variable redirects the value of password to be held in hashedPassword, thereby eliminating the aforementioned identifier conflict. 

const person2 = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
      {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
      },
      {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
      }
    ],
    createdAt: 1543945177623
  };


//If we want the individual addresses as variables we could certainly destructure addresses, then destructure each address.
const { addresses: [whiteHouse, sherlock] } = person2;


//What if we want to skip the first address and only want the city of the second, but using an alternate variable name?
const { addresses: [ , { city: london }] } = person2;
console.log(london);
// => London

// Leaving an 'empty' first position (just a comma) allows skipping that index and destructuring from the second address. This can be done to any depth, just be sure your content actually exists. 
// const { addresses: [ , , , , { city: london }] } = person;
//This produces an error; we skipped so many addresses that he final position doesn't hae an address object. Attempting to destructure from undefined or null throws TypeError: Cannot destructure property 'city' of 'undefined' or 'null'.

const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}
// apple
// banana
// cherry

const fruits2 = ["apple", "banana", "cherry"];
for (const fruit of fruits2.entries()) {
  console.log(fruit);
}
// [ 0, 'apple' ]
// [ 1, 'banana' ]
// [ 2, 'cherry' ]
 //Entries provides the index as well as the entry.


 // " ... " is the spread operator. It allows us to capture the rest of a data set, or to spread content of an existing structure. It's often used with parameters and destructuring.
//  function min() {
//     var numbers = Array.prototype.slice.call(arguments);
//     return Math.min.apply(null, numbers);
//   }
//   min(10, 92, 17, 31, 22);
// becomes
function min(...numbers) {
    return Math.min.apply(null, numbers);
  }
  min(10, 92, 17, 31, 22);

  function min(...numbers) {
    return Math.min(...numbers);
  }
  min(10, 92, 17, 31, 22);

  const collect = [10, 92, 17, 31, 22];
  // collect more numbers
  function min(...numbers) {
    return Math.min(...numbers);
  }
  min(...collect);
  
  
  const reanimals = ['horse', 'dog', 'fish', 'cat', 'bird'];
const [firstAnimal, secondAnimal] = reanimals;

// If we want the remaining animals, using a rest pattern at the end of the assignment.

const [firstAnimal, secondAnimal, ...otherAnimals] = reanimals;
otherAnimals
// => ['fish', 'cat', 'bird']
const { firstName, lastName, ...attributes } = person; // Assigns all other properties in catchall;
// This allows us to do the following: 

const personCopy = { ...person2 }; // Created a copy of our person object, above

const personCopy = { ...person2 };
personCopy === person2
// => false; personCopy is a new object with the same values, and is thereby not the same exact object as person2
personCopy.addresses === person.addresses
// => true; personCopy is a new object with the same values :)



//Default parameters
// function inRange(number, min, max) {
//     min = min || 0;
//     max = max || 1;
//     return Math.min(min, max) <= number && number < Math.min(min, max);
//   }
//   With default parameters our code becomes just a little easier.
  
  function inRange(number, min = 0, max = 1) {
    return Math.min(min, max) <= number && number < Math.min(min, max);
  }

  const credentials = {
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
  };
  function login({ email = 'some@email.com', password = 'superPass', username = 'noname' }) {
   //logic for checking login credentials
  }
  login(credentials);

// You can achieve your desired result in one of two ways.

login({});
// Pass an empty object, or supply your destructuring object with an empty default object.

function login({ email = 'some@email.com', password = 'superPass', username = 'noname' } = {}) {
 //logic for checking login credentials
}
login();


var name = 'Forrest';
var height = '5ft 8in';
var email = 'forrest@gump.com';
var forrest = {
  name: name,
  email: email,
  height: height,
};

//This can be shortened to:

const name = 'Forrest';
const height = '5ft 8in';
const email = 'forrest@gump.com';
const forrest = {
  name,
  email,
  height,
};

function sayHello(name) {
    console.log("Hello ", ${name}, "!");
  }
  const forrest = {
    name,
    email,
    height,
    sayHello,
  };

  const forrest = {
    name,
    email,
    height,
    sayHello(name) {
      console.log(Hello ${name});
    },
  };

// Enclosing your dynamic variable within square brackets in your object definition will result in its value being the property name of the corresponding value.
const skill = 'run';
const skillDescription = 'I like running';
const name = 'forrest';
const height = '5ft 8in';
const email = 'forrest@gump.com';
const forrest = {
  name: name,
  email: email,
  height: height,
  [skill]: skillDescription,
};

//==================================================================================================================================================================================================================
//Class syntax
//Card prototype:


// function ES5Deck() {
//     this.initialize();
//   }
//   Deck.prototype.initialize = function() {
//     var suits = ['Diamond', 'Heart', 'Spade', 'Club'];
//     var faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
//     var deck = [];
//     for (var sindex = 0; sindex < suits.length; sindex++) {
//       for (var findex = 0; index < faces.length; findex++) {
//         deck.push(this.createCard(suits[sindex], faces[findex]));
//       }
//     }
//     this.deck = deck;
//   };
//   Deck.prototype.createCard = function(suit, face) {
//     return new Card(suit, face);
//   };
//   function Card(suit, face) {
//     this.suit = suit;
//     this.face = face;
//   }
//   Object.defineProperties(Card.prototype, {
//     image: {
//       get: function () {
//         return this.suit.toLowerCase() + '-' + this.face.toLowerCase() + '.jpg';
//       }
//     },
//     value: {
//       get: function () {
//         switch (this.face.toLowerCase()) {
//           case 'ace':
//             return 14;
//           case 'king':
//             return 13;
//           case 'queen':
//             return 12;
//           case 'jack':
//             return 11;
//           default:
//             return parseInt(this.face, 10);
//         }
//       }
//     }
//   });
// //==============
// class Deck {
//     constructor(){
//         this.initialize();
//     }
// }
// class Card {
//     constructor(suit, face) {
//         this.suit = suit;
//         this.face = face;
//     }
//     get image() {
//         return `${this.suit.toLowerCase()}-${this.face.toLowerCase()}.jpg`;
//     }
//     get value() {
//         switch (this.face.toLowerCase()) {
//         case 'ace':
//             return 14;
//         case 'king':
//             return 13;
//         case 'queen':
//             return 12;
//         case 'jack':
//             return 11;
//         default:
//             return parseInt(this.face, 10);
//         }
//     }
// }


//   class Card {
//     constructor(suit, face, value = face) {
//       this.suit = suit;
//       this.face = face;
//       this.value = value;
//     }
//   }
//   class CardAce extends Card {
//     constructor(suit, face) {
//       super(suit, face, 14);
//     }
//   }
//   class CardKing extends Card {
//     constructor(suit, face) {
//       super(suit, face, 13);
//     }
//   }
//   class CardQueen extends Card {
//     constructor(suit, face) {
//       super(suit, face, 12);
//     }
//   }
//   class CardJack extends Card {
//     constructor(suit, face) {
//       super(suit, face, 11);
//     }
//   }

// class Card {
//     constructor(suit, face, value = face) {
//         this.suit = suit;
//         this.face = face;
//         this.value = value;
//     }
//     static for(suit, face) {
//         switch (face.toLowerCase()) {
//         case 'ace':
//             return new CardAce(suit, face);
//         case 'king':
//             return new CardKing(suit, face);
//         case 'queen':
//             return new CardQueen(suit, face);
//         case 'jack':
//             return new CardJack(suit, face);
//         default:
//             return new Card(suit, face, parseInt(face, 10));
//         }
//     }
// }

const multiplyThrice = x => y => z => x * y * z;
multiplyThrice(2)(4)(6);
// => 48

