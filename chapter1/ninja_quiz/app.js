const correctAnswers = ['B','B','B','B'];

const form = document.querySelector('.quiz-form');

const result = document.querySelector('.result');
console.log(result.classList[2]);

//const scoreExtern = document.querySelector('span.text-primary');
//console.log(score.textContent);
//console.log(showScore.style.display);


form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //check answers

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score +=25;
        }
    });

    console.log(score);

    /* scoreExtern.textContent = score+'%';
    
    showScore.style.display = 'block';
    console.log(showScore.style.display); */
    window.scrollTo(0,0);
    
    result.classList.remove('d-none');

    let output = 0;

    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output===score){
            clearInterval(timer);
        } else{
            output++;
        }
    }, 10);
});

//window object

/* setTimeout(() => {
    alert('hello');
}, 3000); */
/* let i = 0;
const timer = setInterval(() => {
   console.log('hello');
   i++;
   if(i===5){
    clearInterval(timer);
   }
}, 1000);
 */