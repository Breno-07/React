import React, { useState } from "react";
import './Contador.css';

function Contador() {
    
    const [contadorHomens, setContadorHomens] = useState(0);
    const [contadorMulheres, setContadorMulheres] = useState(0);
    const [contadorTotal, setTotal] = useState(0);

    function adicionaHomem() {
        setContadorHomens(prev => {
            const novoHomens = prev + 1;
            setTotal(novoHomens + contadorMulheres);
            return novoHomens;
        });
    }

    function removeHomem() {
        setContadorHomens(prev => {
            const novoHomens = prev > 0 ? prev - 1 : 0;
            setTotal(novoHomens + contadorMulheres);
            return novoHomens;
        });
    }

    function adicionaMulher() {
        setContadorMulheres(prev => {
            const novoMulheres = prev + 1;
            setTotal(contadorHomens + novoMulheres);
            return novoMulheres;
        });
    }

    function removeMulher() {
        setContadorMulheres(prev => {
            const novoMulheres = prev > 0 ? prev - 1 : 0;
            setTotal(contadorHomens + novoMulheres);
            return novoMulheres;
        });
    }

    return (
        <div className="Contador-container">
            <h3>Total</h3>
            <p className="Exibe-contagem">{contadorTotal}</p>

            <div className="Pessoas-container">
                <div className="Pessoa">
                    <img src="../images/avatar-1.png" alt="H" />

                    <div className="Botoes-container">
                        <button className="Botao-adiciona" onClick={adicionaHomem}>+</button>
                        <button className="Botao-remove" onClick={removeHomem}>-</button>    
                    </div>

                    <h3>Homens</h3>
                    <p className="Exibe-contagem">{contadorHomens}</p>
                </div>
                <div className="Pessoa">
                    <img src="../images/avatar-2.png" alt="M" />

                    <div className="Botoes-container">
                        <button className="Botao-adiciona" onClick={adicionaMulher}>+</button>
                        <button className="Botao-remove" onClick={removeMulher}>-</button>    
                    </div>

                    <h3>Mulheres</h3>
                    <p className="Exibe-contagem">{contadorMulheres}</p>
                </div>    
            </div>         
        </div>
    );
}

export default Contador;
