/* const para = document.querySelector('p.error');

console.log(para); */

/* const paras = document.querySelectorAll('p');

paras.forEach(para => {
    console.log(para);
});

const errors = document.querySelectorAll('.error');

console.log(errors);
 */


// get an element by ID

/* const title = document.getElementById('page-title');
console.log(title);

//get elements by their class name

const error =  document.getElementsByClassName('error');
console.log(error);
console.log(error[0]); */

//get element by theur tag name

/* const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]); */

//const para = document.querySelector('p');

//console.log(para.innerText);

//para.innerText = 'text modified';

/* const paras = document.querySelectorAll('p');

paras.forEach(para =>{
    console.log(para.innerText);
    para.innerText += ' new text';
}); */


//const content = document.querySelector('.content');
//console.log(content.innerHTML);

//content.innerHTML = '<h2>this is a new h</h2>';

/* const people = ['mario','luigi','yoshi'];

people.forEach(person =>{
    content.innerHTML += `<p>${person}</p>`;
}); */

/* const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href','https://www.hz.com');
link.innerText = 'blablabvla';

const msg = document.querySelector('p');
console.log(msg.getAttribute('class'));

msg.setAttribute('class','success');

msg.setAttribute('style', 'color:green'); */

//const title = document.querySelector('h1');
//title.setAttribute('style', 'margin: 50px;');

/* console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';

title.style.color = 'crimson';

title.style.fontSize = '60px';

title.style.margin = ''; */

/* const content = document.querySelector('p');
console.log(content.classList);

content.classList.add('error');
content.classList.remove('error');
content.classList.add('success'); */


/* const error = document.querySelectorAll('p');

error.forEach(error => {
    if(error.textContent.includes('error')){
        error.classList.add('error');
    }else
    if(error.textContent.includes('success')){
        error.classList.add('success');
    }else
    error.style.color = 'gray';
});

const title = document.querySelector('.title');
title.classList.toggle('test');
title.classList.toggle('test'); */


//const article = document.querySelector('article');

/* 
console.log(article.children);

console.log(Array.from(article.children)); */

/* Array.from(article.children).forEach(child=>{
    child.classList.add('article-element');

}); */

/* const title = document.querySelector('h2');

console.log(title.parentElement.parentElement);

console.log(title.nextElementSibling);
console.log(title.previousElementSibling);


console.log(title.nextElementSibling.parentElement.children); */

