function getElement(selection){
  const element = document.querySelector(selection);
  if (element) {
    
    return element;
  }
  throw new Error(`No such element ${selection} exists`);
}

const btn = getElement('.btn');
const result = getElement('.result');
const url = 'https://icanhazdadjoke.com/';
btn.addEventListener('click',() => {
  fetchDadJoke();
});

const fetchDadJoke = async () => {
  result.textContent = 'Loading...';
  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'learning app',
      }
    });
    if (!response.ok) {
      throw new Error('error')
    }
    const data = await response.json();
    console.log(data);
    result.textContent = data.joke;
  } catch (error) {
    console.log(error.message);
    result.textContent = 'There was an error....'
  };
};
fetchDadJoke();
