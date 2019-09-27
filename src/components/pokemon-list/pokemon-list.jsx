import React from 'react';
import styles from './pokemon.module.css';

const PokemonList = function(props) {
    const pokemonList = props.pokemons.map(
        p => <PokemonDetail key={p.pokedex} pokemon={p} />
    )

    return (
        <ul className={styles.pokemonList}>{pokemonList}</ul>
    )
}

export const PokemonDetail = function (props) {
    const {pokemon} = props;

    const imageId = pokemon.pokedex.toString().padStart(3,'0');

    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imageId}.png`;

    return (
        <li className={styles.pokemonItem}>
            {pokemon ? (
                <>
                    <div className={styles.pokemonInfo}>
                        <h3>{pokemon.name}</h3>
                        <h4>{pokemon.genus}</h4>
                        <p>Pokedex nationnal : {pokemon.pokedex}</p>
                        <p>Taux de capture : {pokemon.captureRate.toFixed(2)} %</p>
                    </div>
                    <img className={styles.pokemonImage} src={image} />
                </>
            ): (
                <h3>Error!</h3>
            )}
           
        </li>
    );
}
PokemonDetail.defaultProps = {
    pokemon: null
}

export default PokemonList;