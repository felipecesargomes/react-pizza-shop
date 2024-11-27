import logo from './logo.svg';
import './App.css';
import Nome from './components/Nome';
import { useState } from 'react';

function App() {
  // inicialize useState com uma string "Programador"
  const [aluno, setAluno] = useState("Programador Iniciante");

  //Função para alterar o estado
  function alterarAluno(props) {
    setAluno(props);
  }
  return (
    <div className="App">
      <h1>Bem Vindo</h1>
      <Nome aluno={aluno}></Nome><br/>
      <input type="text" placeholder='Digite seu nome' id="inputNome"></input>
      <button onClick={() => alterarAluno(document.getElementById("inputNome").value)}>Salvar Nomes</button>
    </div>
  );
}

export default App;


