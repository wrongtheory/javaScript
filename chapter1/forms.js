const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;
//const username = document.querySelector('#username');
form.addEventListener('submit', e => {
    e.preventDefault();
    //console.log(username.value);
    const username = form.username.value;
    

    if(usernamePattern.test(username)){
        feedback.textContent='valid'
    } else {
        feedback.textContent='invalid';
    }
});

form.username.addEventListener('keyup', e => {
    //console.log(e.target.value, form.username.value);
    if(usernamePattern.test(e.target.value)){
        console.log('passt');
        form.username.setAttribute('class','success');
    } else {
        console.log('failed');
        form.username.setAttribute('class','error');
    }
});

//const username = 'shaunp';

//const pattern = /^[a-z]{6,}$/;
/* 
let result = pattern.test(username);
//console.log(result);

if(result){
    console.log('regex past')
} else {
    console.log('regex failed');
} */

/* let result = username.search(pattern);
console.log(result); */