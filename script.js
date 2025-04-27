const jokeEl = document.getElementById('joke');
const getDarkJokeBtn = document.getElementById('darkJoke');
const getJokeBtn = document.getElementById('getJoke');
const getProgrammingJokeBtn = document.getElementById('programmingJoke');

document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log(e.target.id)
        if(e.target.id === 'darkJoke')
        {
            getJoke("Dark")
        }
        else if(e.target.id === 'programmingJoke')
        {
            getJoke("Programming")
        }
        else
        {
            getJoke("Any")
        }
    })
});
  

async function getJoke(category = "Any") {
  try {
    const response = await fetch(`https://v2.jokeapi.dev/joke/${category}`);
    const data = await response.json();
    
    if(data.type === 'single'){
        jokeEl.innerHTML = data.joke
    }else {
        jokeEl.innerHTML = `${data.setup}\n ${data.delivery}`
    }

  } catch (error) {
    jokeEl.innerText = 'Failed to load a joke ';
    
  }
}

