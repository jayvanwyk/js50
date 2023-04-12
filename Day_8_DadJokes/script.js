const joke = document.querySelector('#joke');
const button = document.querySelector('#jokeBtn');

async function getNextJoke(){
    const url = 'https://icanhazdadjoke.com/';

    const config = {
        headers:{
            Accept: 'application/json'
        }
    }
    button.disabled = true;
    const result = await fetch(url, config);
    const data = await result.json();
    joke.innerHTML = data.joke;
    button.disabled = false;
}

button.addEventListener('click', getNextJoke);

getNextJoke();