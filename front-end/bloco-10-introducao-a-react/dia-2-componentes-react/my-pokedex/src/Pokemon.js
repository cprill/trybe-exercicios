import React from 'react';
import './App.css';
import './data.js';
import './Pokemons'
import PropTypes

class Pokemon extends React.Component {
    render() {
        return (
            <div>
                <div>
                <img src={this.props.image} alt={ this.props.name} /> 
                </div>
                <div>
                <p>{this.props.name}</p>
                <p>{this.props.type}</p>
                <p>`Average Weight: {this.props.averageWeight.value} {this.props.averageWeight.measurementUnit}`</p>
                </div>
            </div>
        )
    }
}

export default Pokemon;
