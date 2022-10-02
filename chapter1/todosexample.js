/* const button = document.querySelector('button');

button.addEventListener('click',() => {
    console.log('you clicked me');
}); */

//const ul = document.querySelector('ul');

//ul.remove();

/* const button = document.querySelector('button');

button.addEventListener('click',() => {
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    //ul.append(li);
    ul.prepend(li);
}); */

/* const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', e => {
        //console.log(e.target);
        //e.target.style.textDecoration = 'line-through';
        console.log('event in LI');
        e.stopPropagation();
        e.target.remove();
    });
}); */

/* ul.addEventListener('click', e => {
    //console.log('event in UL');
    console.log(e.target);
    if(e.target.tagName==='LI'){
        e.target.remove();
    }
}); */

/* const copy = document.querySelector('.copy-me');

copy.addEventListener('copy',() => {
    console.log('oh no');
});

const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
   //console.log(e);
   //console.log(e.offsetX, e.offsetY);
   box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`;
});

document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
}); */


