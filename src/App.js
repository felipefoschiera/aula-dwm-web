import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import PessoasList from './PessoasList.js'


class App extends Component {

  constructor() {
    super();
    this.state = {
      lista: [
        { nome: 'fulano', email: 'fulano@teste', idade: 30 },
        { nome: 'beltrano', email: 'beltrano@teste', idade: 20 }
      ]
    }


  }

  onClickAtualizar() {
    
  }

  

  render() {
    return (
      <div className="App">
        <h4>Listagem de pessoas</h4>

       
        <PessoasList />
      
      </div>
    )
  }
}

export default App;
