const button = document.querySelector('.card-button');
const advice = document.querySelector('.card-advice');

button.addEventListener('click', ()=>{
    fetch('https://api.adviceslip.com/advice')
        .then(res => {
            return res.json()
        })
        .then(res => {
            document.getElementById('number').innerHTML = `#${res.slip.id}`;
            advice.innerHTML = `"${res.slip.advice}"`;
        }).catch(error => {
            console.log(error);
        })
});