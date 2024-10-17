import React from "react";
import { Link } from "react-router-dom";
import ContadorHM from "./ContadorHM"; 

const Atv02 = () => {
    return (
        <div>
            <h1>Atividade 02</h1>
            <ContadorHM />  
            <Link to="/">Voltar para a Home</Link>
        </div>
    );
}

export default Atv02;
