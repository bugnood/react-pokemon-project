import logo from './logo.svg';
import './App.css';

function App() {

  async function logMovies() {
    var random = Math.floor(Math.random() * 1001);
    random = random === 0 ? 1 : random;
    console.log(random);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}/`);
    const movies = await response.json();
    const image = movies['sprites']['front_default'];
    var name = movies['name'];
    var imageTag = document.getElementById('pokemon-img');
    imageTag.setAttribute('src', image);
    var nameTag = document.getElementById('name');
    nameTag.innerHTML = name;
    console.log(image);
  }

  logMovies();

  return (
    <div className="App">
      <div className='box'>
        <button onClick={logMovies}>Get Pokemon</button>
        <img id='pokemon-img' src='' />
        <p id='name'></p>
      </div>
    </div>
  );
}

export default App;
