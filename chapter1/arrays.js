const scores = [10,50,0,40,5,60,20,70];

//filter method

/* 
const filtered = scores.filter(score=>{
    return score > 20;
});

console.log(filtered); */

const users = [
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true}
];

const premium = users.filter(user => user.premium);

console.log(premium);

//map method

const salePrices = scores.map(price =>price / 2);

console.log(salePrices);

const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price:40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
];

const saleProduct = products.map(product=>{
    if(product.price > 30)
        return {name: product.name, price: product.price/2}
    else
        return product;
});

console.log(saleProduct);

// reduce method

const result = scores.reduce((acc,curr)=>{
    if(curr > 50)
        acc++;

        return acc;
}, 0);

console.log(result);

const scores2 = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60}
];

const mario = scores2.reduce((acc,curr)=>{
    if(curr.player === 'mario')
        acc += curr.score;
    return acc;
}, 0);

console.log(mario);


//find method

const firstScore = scores.find((score)=>{
    return score > 50
});

console.log(firstScore);


//sort method


const names = ['mario','shaun','chun-li','yoshi','luigi'];

const newNames = names.sort();

console.log(newNames);

scores.sort();
console.log(scores);

scores2.sort((a,b)=>{
    if(a.score>b.score){
        return -1;
    } else if(b.score>a.score)
    return 1;
    else{
        return 0;
    }
});

console.log(scores2);


scores2.sort((a,b) =>  b.score - a.score);

console.log(scores2);


/* const filtered2 = products.filter(product => product.price>20);

const promos = filtered2.map(product =>{
    return `the ${product.name} is ${product.price / 2} pounds`;
}); */

const promos = products
.filter(product => product.price>20)
.map(product => `the ${product.name} is ${product.price / 2} pounds`);

console.log(promos);