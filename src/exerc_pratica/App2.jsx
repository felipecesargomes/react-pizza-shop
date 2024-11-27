//Crie um componente básico com h1 Hello World
import React from 'react';
import { useState, useEffect } from 'react';

const App2 = () => {
    //estados para armarazenar as tarefas
    const [tarefas, setTarefas] = useState([]);
    const [atualizaTarefa, setAtualizaTarefa] = useState('');

    //Carregar tarefas do localStorage quando o @tarefas for alterado
    useEffect(() => {
        const tarefas = localStorage.getItem('@tarefas');
        if(tarefas){
            setTarefas(JSON.parse(tarefas));
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(atualizaTarefa.trim() === ''){
            alert('Digite uma tarefa');
            return;
        }
        let tarefas = localStorage.getItem('@tarefas');
        tarefas = tarefas ? JSON.parse(tarefas) : [];
        const novaLista =[...tarefas, atualizaTarefa];
        
        setTarefas(novaLista);
        //salvar tarefas no localStorage
        localStorage.setItem('@tarefas', JSON.stringify(novaLista));
        setAtualizaTarefa('');
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