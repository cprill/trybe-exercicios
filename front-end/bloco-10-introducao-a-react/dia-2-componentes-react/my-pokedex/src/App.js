import './App.css';
import Pokemon from './Pokemon';
import Pokemons from './Pokemons';

function App() {
  return (
    <div className="App">
     <h1>Pokedex</h1>
      <Pokemon p  okemon={ Pokemons } />
    </div>
  );
}

export default App;
