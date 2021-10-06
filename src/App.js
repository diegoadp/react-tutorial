import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
        characters: [],
    }

    removeCharacter = (index) => {
        const { characters } = this.state; // Study - Destructuring assignment

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            }),
        });
    }

    handleSubmit = (character) => {
        this.setState({ characters: [...this.state.characters, character] }); // Study - Spread syntax (...)
    }

    render() {
        const { characters } = this.state; // Study - Destructuring assignment

        return (
            <div className="container">
                <h1>React Tutorial</h1>
                <p>Add a character with a name and a job to the table.</p>
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
                <h3>Add New</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;