import Contador from './Components/Contador';
import { Link } from "react-router-dom";
import './Atv.css';

export default function Atv01() {
    return (
        <>
            <h1>Atividade 02</h1>
            <Contador />
            <br />
            <Link to="/">&#129144; retornar à página inicial</Link>
        </>
    );
}