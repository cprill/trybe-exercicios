import React from 'react';
import './App.css';
import pokes from './data.js';
import './Pokemons.js';
import './Pokemon'

class Pokemons extends React.Component {
    render() {
      // const { pokes } = this.props;
      return (
        <div>
          { pokes.map((pok) => <pokemon key={ pok.id } poke={ pok } />) }
        </div>
      );
    }
  }

  export default Pokemons;