const button = document.querySelector('.card-button');
const advice = document.querySelector('.card-advice');

button.addEventListener('click', async ()=>{
    
    try{
        let request = await fetch('https://api.adviceslip.com/advice');
        if(request.ok){
            let data = await request.json();
            document.getElementById('number').innerHTML = `#${data.slip.id}`;
            advice.innerHTML = `"${data.slip.advice}"`;
        }
    }catch(error){
        console.log(error);
    }
});