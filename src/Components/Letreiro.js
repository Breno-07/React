import React, { useEffect, useState } from "react";
import './Letreiro.css';

function Letreiro() {
    
    const mensagem = 'Conheça a Fatec ';
    const [mensagemVar, setMensagemVar] = useState(mensagem);

    useEffect(() => {

        const interval = setInterval(() => {

            setMensagemVar(prev => prev.substring(1) + prev[0]);
            
        }, 200);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="Letreiro">
            <p id="letreiro">{mensagemVar}</p>
        </div>
    );
}

export default Letreiro;
