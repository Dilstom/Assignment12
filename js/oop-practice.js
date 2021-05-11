// STEP 1
// class Cat {
//     constructor(){}
// }

// const Dog = class {
//     constructor(){}
// }

// STEP 2
// let cat1 = new Cat();
// let dog1 = new Dog();

// STEP 3
// class Animal {
//     constructor() {}
//     display() {
//         console.log('The Animal has been created');
//     }
// }

// STEP 4
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     display() {
//         console.log(`The ${this.name} has been created`);
//     }
// }
// // let animal1 = new Animal('Animal');
// // animal1.display();

// STEP 5
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }
// }

// let animal1 = new Animal('cat', 'Bengal', 'orange', '8"', '14"');
//   console.log(animal1);

// STEP 6
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }
// }

// let animal1 = new Animal('cat', 'Bengal', 'orange', '8"', '14"');
// for(let i in animal1) {
//     console.log(i + ': ' + animal1[i]);
// }

// STEP 7
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }
//     speak() {
//         if(this.type === 'dog') {
//             return `The ${this.color} dog is barking!`
//         }else if(this.type === 'cat') {
//             return `The ${this.color} cat is meowing!`
//         }
//     }
// }

// let cat1 = new Animal('cat', 'Bengal', 'spotted', '8"', '14"');
// let dog1 = new Animal('dog', 'mongrel', 'red', '12"', '17"');
// console.log(cat1.speak());
// console.log(dog1.speak());

// STEP 8
// CREATING PRIVATE METHODS USING SYMBOL()
// let _type = Symbol();
// let _breed = Symbol();
// let _color = Symbol();
// let _height = Symbol();
// let _length = Symbol();

// class Animal {
//   constructor(type, breed, color, height, length) {
//     this[_type] = type;
//     this[_breed] = breed;
//     this[_color] = color;
//     this[_height] = height;
//     this[_length] = length;
//   }

//   #checkType() {
//     // PRIVATE METHOD
//     if (this[_type] === "dog") {
//       return "dog";
//     } else if (this[_type] === "cat") {
//       return "cat";
//     } else {
//       return "neither cat or dog";
//     }
//   }
//   speak() {
//     return `The ${this.#checkType()} has made a noise!`;
//   }
// }

// let cat1 = new Animal('cat', 'Bengal', 'spotted', '8"', '14"');
// let dog1 = new Animal('dog', 'mongrel', 'red', '12"', '17"');
// console.log(cat1.speak());
// console.log(dog1.speak());

// STEP 9

// String.prototype.findWords = function(str, word) {
//     let i =0, count = 0;
//     let newArr = str.trim().split(' ').sort();
//     for(i; i < newArr.length; i++){
//         if(newArr[i].toLowerCase() === word) {
//             count +=1;
//         }
//     }

//     alert(`There are ${count} "${word}" in the following paragraph: \n"${str}"`)
// }

// let text = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
// let newString = new String();
// newString.findWords(text, 'of');

// dr@g0n123