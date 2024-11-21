import Relogio from './Components/Relogio';
import Letreiro from './Components/Letreiro';
import { Link } from "react-router-dom";
import './Atv.css';

export default function Atv01() {
    return (
        <>
            <h1>Atividade 01</h1>
            <Relogio />
            <br />
            <Letreiro />
            <br />
            <Link to="/">&#129144; retornar à página inicial</Link>
        </>
    );
}
