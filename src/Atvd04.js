import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from '../aula4/Gallery'; 

function Atvd04() {
    return (
        <div>
            <h1>Atividade 04</h1>
            <Gallery />  
            <Link to="/">Voltar para a Home</Link> 
        </div>
    );
}

export default Atvd04;
