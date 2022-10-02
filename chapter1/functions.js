//function declaration

function greet(){
    console.log('hello there');
}

//function expresion

const speak = function(name='luigi', time='night'){
  console.log(`good ${time} ${name}`); 
  greet(); 
};

const calcArea = function(radius){
    return 3.14 * radius**2;
    
};

const calcVol = function(area){

};

const area = calcArea(3);
console.log(area);
//greet();
//speak('mario','morning');
//speak();

//arrow function

const calcArea2 = (radius,something) => 4.14 * radius ** 2;


const greet2 = () => 'hello, world';

const test = greet2();
console.log(test);

const bill = (products,tax) => {
    let total = 0;
    for(let i=0;i<products.length;i++){
        total+=products[i]+products[i]*tax;
    }
    return total;
};

console.log(bill([10,15,30],0.2));


//functions

const greet3 = () => 'hello';
let resultOne = greet3();
console.log(resultOne);

//methods

name1 = 'victor';
console.log(name1.toUpperCase());

const myFunc = (callBackFunc) => {
    let value = 50;
    callBackFunc(value);
};

myFunc(value => {
    console.log(value);
});

const people = ['mario','luigi','ryu','shaun'];

const logPerson = (a,b) => {
    console.log(`${b} - ${a}`);
}

people.forEach((person,index) => {
    console.log(index, person);
});

people.forEach(logPerson);

function test2(arr,callback){
    sum =0;
    for(let number of arr){
        if(number%2==0)
            sum+=number;
        else
            callback(number);
    }
    return sum;
}


const tst = test2([1,2,3,4,5,6],  a => console.log(a));
console.log(tst);


const ul = document.querySelector('.people');

let html = ``;

people.forEach(person => {
    html += `<li style="color: purple">${person}</li>`; 
});

console.log(html);

ul.innerHTML = html;