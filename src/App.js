import React from 'react';
import './App.css';
import SearchBar from './components/search-bar/search-bar';
import axios from 'axios';
import PokemonList from './components/pokemon-list/pokemon-list';

const URL_API = "https://pokeapi.co/api/v2/pokemon-species/#query"

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pokemons: []
    }

    this.sendQuery = this.sendQuery.bind(this);
  }

  sendQuery(value) {
    const url = URL_API.replace("#query", value);

    axios.get(url)
      .then(({data}) => {
        
        const pokeAdd = {
          name: data.names.find(n => n.language.name === 'fr').name || data.name,
          genus: data.genera.find(g => g.language.name === 'fr').genus,
          pokedex: data.id,
          captureRate: data.capture_rate *100 / 255
        }

        // console.log(pokeAdd);
        if(this.state.pokemons.find(p => p.pokedex === pokeAdd.pokedex) === undefined) {
          this.setState(s => ({
            pokemons: [...s.pokemons, pokeAdd]
          }))
        }
      })
      .catch(() => {
        console.log("Error!")
      })
  }

  render() {

    return (
      <div className="App">
        <SearchBar onSearch={this.sendQuery}  />
        <PokemonList pokemons={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
