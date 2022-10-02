//alert('hello, world');
//console.log(1);
//console.log(2);

let age = 25;
let year = 2022;

console.log(age,year);

age = 14;

console.log(age);

const points = 100;
//points = 50; // error cannot be changed
console.log(points);

var score = 75;

console.log(score);

// Strings

console.log('hello world');

let email = 'vleunti@gmail.com'
console.log(email);

//string concatenation

let firstname = "Victor ";
let lastName = "Leunti";
let fullName = firstname+lastName;
console.log(fullName);

//getting characters

console.log(fullName[2]);

//string length

console.log(fullName.length);


//string methods

console.log(fullName.toUpperCase());

let result = fullName.toLocaleLowerCase();
console.log(result);

let index = email.indexOf('@');

console.log(index);

//common string methods

result = email.lastIndexOf('i');

result = email.slice(0,10);

result = email.substring(0,10);

result = email.replace('i','h');

console.log(result);

// numbers


let radius = 10;
const pi = 3.14;

console.log(radius, pi);

//math operations

console.log(10/2);
  result = radius %3;

result = pi*radius**2;
  
  console.log(result);

  //oder of operation

  result = 5 * (10-3)**2;

  console.log(result);

  //let likes = 10;

  //likes = likes+1;
  //likes++;
  //likes-=1;
  //likes+=1;

  //console.log(likes);

  // NaN

  console.log(5/'hello');

  //result = 'the blog has ' + likes + ' likes';



  console.log(result);

  const title = 'Best reads of 2022';
  const author = 'Mario';
  const likes = 30;

  // concatenation way

result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
console.log(result);

//template string way

result = `The blog called ${title} by ${author} has ${likes} likes`;


console.log(result);

//creating html templates

let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
`;

console.log(html);

let ninjas = ['shau','ryu','chun-li'];

ninjas[1] = 'ken';
console.log(ninjas[1]);

let ages = [20,25,30,35];
console.log(ages[2]);

let random = ['shaum','crystal',30,20];

console.log(ninjas.length);

// array methods

result = ninjas.join('-');

result = ninjas.indexOf('ken');

result = ninjas.concat(['hz','victor']);

result = ninjas.push('first');

result = ninjas.pop();

console.log(result);

age = null;

console.log(age, age +3, `the age is ${age}`);


console.log(true,false,"true","false");

result = email.includes('@');

let names = ['mario','luigi','toad'];

result=names.includes('luigi');

age = 25;


console.log(result);

console.log(age==25);

let name = 'shaun';
console.log(name=='shaun');

//type conversion

score = '100';

score = Number(score);

console.log(score+1);

console.log(typeof score);

result = String(20);

result = Boolean(100);

result = Boolean('0');

console.log(typeof result);

// for loops

for(let i = 0; i < 5 ;i++){
    console.log('in loop: ' + i);
}

console.log('loop finished');

const names2 = ['shaun','mario','luigi'];

for(let i=0;i<names2.length;i++){
    //console.log(names2[i]);
    let html = `<div>${names2[i]}</div>`;
    console.log(html);
}

// while loop
let i = 0;
while(i<5){
    console.log('in loop: ' ,i);
    i++;
}
let j = 0;
while(j < names2.length){
    console.log(names2[j]+'hz');
    j++;
}

console.log('after while');



let k = 0;

do {
    console.log(names2[k]);
    k++;
} while (k < names2.length);

// if statement

age = 30;

if(age > 20){
    console.log('you are over 20 years old');
}

if(ninjas.length>2){
    console.log('over two');
}

const password = 'pass';

if(password.length >= 8){
    console.log('long enough');
} else{
    console.log('is weak');
}

const grade = 'D';

switch(grade){
    case 'A': console.log('A'); break;
    case 'B': console.log('B'); break;
    case 'C': console.log('C'); break;
    case 'D': console.log('D'); break;
    default: console.log('default');
}


age = 30;

