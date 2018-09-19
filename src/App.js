/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;*/

import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
        characters : [
            {
                'name' : 'Stark',
                'job'  : 'Team Leader'
            },
            {
                'name' : 'Chris',
                'job'  : 'Team Leader'
            },
            {
                'name' : 'Romanoff',
                'job'  : 'Q.A.'
            },
            {
                'name' : 'Nick Fury',
                'job'  : 'Manager'
            },
            {
                'name' : 'Hawk Eye',
                'job'  : 'Sr. Soft. Engr. (PHP)'
            },
            {
                'name' : 'Banner',
                'job'  : 'Sr. Soft. Engr. (.Net)'
            },
            {
                'name' : 'Wanda',
                'job'  : 'Soft. Engr. (PHP)'
            },
            {
                'name' : 'Falcon',
                'job'  : 'Soft. Engr. (.Net)'
            },
        ]
    };

    removeCharacter = index => {
        const { characters } = this.state;
        this.setState({
            characters : characters.filter((character, i) => {
                return i !== index;
            })
        });
    };

    handleSubmit = character => {
        this.setState({characters : [...this.state.characters, character ]})
    };

    render () {
        const characters = this.state.characters;

        return (
            <div className="container">
                <h1>Hello, React!</h1>
                <Table charactersData={ characters } removeCharacter = { this.removeCharacter } />
                <Form onSubmit = { this.handleSubmit } />
            </div>
        );  /* Here characters are being passed to Table Component via charactersData */
    }
}

export default App;
