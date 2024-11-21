import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div>
            <h1>Página Inicial</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/Atv01">&#129146; Atividade 1</Link>
                    </li>
                    <li>
                        <Link to="/Atv02">&#129146; Atividade 2</Link>
                    </li>
                    <li>
                        <Link to="/Atv03">&#129146; Atividade 3</Link>
                    </li>
                    <li>
                        <Link to="/Atv04">&#129146; Atividade 4</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Home;