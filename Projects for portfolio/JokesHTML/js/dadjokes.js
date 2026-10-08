const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('li');
    const jokeTextNode = document.createTextNode(jokeText);

    newLI.appendChild(jokeTextNode);
    newLI.style.backgroundColor = getRandomPastelColor(); // Set random pastel color

    jokes.appendChild(newLI);
};

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } };
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch (e) {
        console.error("Error:", e);
        return "no jokes available! :(";
    }
};

const getRandomPastelColor = () => {
    const r = Math.floor((Math.random() * 127) + 127); // Generate number between 127 and 255
    const g = Math.floor((Math.random() * 127) + 127);
    const b = Math.floor((Math.random() * 127) + 127);
    return `rgb(${r}, ${g}, ${b})`;
};

button.addEventListener("click", addNewJoke);



