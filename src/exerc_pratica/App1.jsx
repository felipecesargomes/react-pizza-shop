import { useState } from 'react';

function App1() {
  const [aluno, setAluno] = useState({
    nome: '',
    email: '',
    idade: ''
  });

  const [user,setUser] = useState({
    nome: '',
    email: '',
    idade: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(aluno);
    console.log("Dados do aluno", aluno);
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" value={aluno.nome} onChange={(e) => setAluno({ ...aluno, nome: e.target.value })} />
        <input type="text" placeholder="Email" value={aluno.email} onChange={(e) => setAluno({ ...aluno, email: e.target.value })} />
        <input type="number" placeholder="Idade" value={aluno.idade} onChange={(e) => setAluno({ ...aluno, idade: e.target.value })} />
        <button type='submit'>Enviar</button>
      </form >
      <div>
        <p>Bem-vindo, {user.nome}</p>
        <p>Email: {user.email}</p>
        <p>Idade: {user.idade}</p>
      </div>
    </div>
  );
}

export default App1;


