//Crie um componente básico com h1 Hello World
import React from 'react';
import { useState } from 'react';

const App2 = () => {
    //estados para armarazenar as tarefas
    const [tarefas, setTarefas] = useState([]);
    const [atualizaTarefa, setAtualizaTarefa] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setTarefas([...tarefas, atualizaTarefa]);
        //setAtualizaTarefa('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Lista Tarefas</h1>
            <input type="text" placeholder="Digite sua tarefa" value={atualizaTarefa} onChange={(e) => setAtualizaTarefa(e.target.value)} />
            <button type="submit">Adicionar</button>
            </form>
            <br/>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>{tarefa}</li>
                ))}
            </ul>
            
        </div>
    );
};

export default App2;