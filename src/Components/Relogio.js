import React, { useEffect, useState } from "react";
import  './Relogio.css';

function Relogio() {

    const [horaVar, setHoraVar] = useState('');

    useEffect(() => {

        const interval = setInterval(() => {
            let hora = new Date();
            setHoraVar(hora.getHours().toString().padStart(2, '0') + ":"  
                    + hora.getMinutes().toString().padStart(2, '0') + ":" 
                    + hora.getSeconds().toString().padStart(2, '0'));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="Relogio">
            <p id="hora">{horaVar}</p>
        </div>
    );
}

export default Relogio;
