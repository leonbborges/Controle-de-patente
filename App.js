import React, { Component } from 'react';
import './App.css';

class App extends Component {
    
    constructor( props ){
        super( props )
        this.state = { show : false };
        
        //this.Pesquisador= this.Pesquisador.bind(this)
        this.gestor= this.Pesquisador.bind(this)
    }
    
    Pesquisador= () => {
        const { show } = this.state;
        this.setState( { show : !show } )
    }
    gestor= () => {
        const { show } = this.state;
        this.setState( { show : !show } )
    }
    
    render() {
        return (
          <div className="App">
            <div className="App-header">
                <br />
                <button onClick={this.Pesquisador}>Pesquisador</button>
                <br /><br />
                { this.state.show && <Box /> }
                <br />
                <button onClick={this.gestor}>gestor</button>
                <br /><br />
                { this.state.show && <Boxtow /> }
                
            </div>
          </div>
        );
    }
}

class Box extends Component{
    render(){
        return(
            <div>
            <div className="header">Cadastro </div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="Nome">Nome completo</label>
              <input type="text" name="Nome_completo" placeholder="Nome completo" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="Senha">Senha</label>
              <input type="password"  name="Senha" placeholder="Senha" minlength="8" required></input> 
            </div>
             <div className="form-group">
              <label htmlFor="Confirma Senha">Confirma Senha</label>
              <input type="password" name="Confirma Senha" placeholder="Confirma Senha" minLength="8" />
            </div>
            <div className="form-group">
              <label htmlFor="cpf">cpf</label>
              <input type="text" name="cpf" placeholder="cpf" />
            </div>
                <div className="form-group">
              <label htmlFor="Cep">Cep</label>
              <input type="text" name="Cep" placeholder="Cep" />
            </div>
              <div className="form-group">
              <label htmlFor="Telefone">Telefefone</label>
              <input type="text" name="Tefefone" placeholder="Telefone" />
            </div>
               <div className="form-group">
              <label htmlFor="Titulaçao">Titulação</label>
              <input type="text" name="Titulaçao" placeholder="Titulaçao" />
            </div>
               <div className="form-group">
              <label htmlFor="Endereço">Endereço</label>
              <input type="text" name="Endereço" placeholder="Endereço" />
            </div>
               <div className="form-group">
              <label htmlFor="ICT">ICT</label>
              <input type="text" name="ICT" placeholder="ICT" />
            </div>
               <div className="form-group">
              <label htmlFor="CNPJ_da_ICT">CNPJ da ICT</label>
              <input type="text" name="CNPJ_da_ICT " placeholder="CNPJ_da_ICT" />
                  <div className="form-group">
              <label htmlFor="Campus">Campus</label>
              <input type="text" name="Campus" placeholder="Campus" />
            </div>
                 <div className="form-group">
              <label htmlFor="Departamento">Departamneto</label>
              <input type="text" name="Departamento" placeholder="Departamento" />
            </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
            
            </div>
        )
    }
}

class Boxtow extends Component{
    render(){
        return(
            <div></div>
        )
    }
}
export default App;
