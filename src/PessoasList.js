import React from 'react';

import API from './api';


export default class PessoasList extends React.Component {
  state = {
    pessoas: []
  }

  constructor() {
    super();
    this.atualizarLista = this.atualizarLista.bind(this);
  }

  componentDidMount() {

    API.get(`users`)
      .then(res => {
        const pessoas = res.data;
        this.setState({ pessoas });
      })

  }

   atualizarLista() {
    API.get(`users`)
      .then(res => {
        const pessoas = res.data;
        this.setState({ pessoas });
      })

  }
  


  render() {
    return (
      <div>

      <button onClick={this.atualizarLista}
          type="button">
          Atualizar lista
        </button>

        { <table className="table">
          {
            this.state.pessoas.map(function (obj) {
              return (
                <tr>
                  <td>{obj.nome}</td>
                  <td>{obj.email}</td>
                  <td>{obj.celular}</td>
                  <td>{obj.senha}</td>
                </tr>
              );
            })
          }
        </table> }
      </div>
    )
  }
}