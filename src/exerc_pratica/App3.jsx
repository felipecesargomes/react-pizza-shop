import React from 'react';
import { useState, useEffect } from 'react';
import './App3.css';

function App3() {
    //Criar estado de nutri array vazio
    const [nutri, setNutri] = useState([]);

    useEffect(() => {
        fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
            .then(response => response.json())
            .then(data => {
                setNutri(data); // Atualiza o estado
                console.log(data);
            });
    }, []);


    return (
        <div className="container">
            <header>
                <h1 className="titulo">React Nutri</h1>
            </header>

            {/* Renderiza os dados utilizando o map */}
            {nutri.map((item) => (
                <div className="post" key={item.id}>
                    <h2 className="titulo">{item.titulo}</h2>
                    <img
                        src={item.capa} // Use item.capa (de acordo com o JSON retornado pela API)
                        alt={item.titulo} // Use o título como texto alternativo
                        className="capa"
                    />

                    <p className="subtitulo">{item.subtitulo}</p>
                    <a href="#" className="botao">
                        Acessar
                    </a>
                </div>
            ))}
        </div>
    );
}

export default App3;
