import React, { useEffect, useState } from 'react';

function Relogio() {
    const [horarioAtual, setHorarioAtual] = useState("");

    useEffect(() => {
        const atualizarRelogio = () => {
            const data = new Date();
            const horas = String(data.getHours()).padStart(2, '0');
            const minutos = String(data.getMinutes()).padStart(2, '0');
            const segundos = String(data.getSeconds()).padStart(2, '0');
            setHorarioAtual(`${horas}:${minutos}:${segundos}`);
        };

        atualizarRelogio(); 
        const intervalo = setInterval(atualizarRelogio, 1000); 

        return () => clearInterval(intervalo); 
    }, []);

    return (
      <>
        <h1>Meu Relógio</h1>
        <h2 id="relogio">{horarioAtual}</h2>
        </>
    );
}

export default Relogio;
