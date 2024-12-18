import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
    return (
        <div className="home-container">
            <h1>Projeto React</h1>
            <div className="links-container">
                <Link to="/atividade1" className="link-button">
                    Atividade 1 - Letreiro
                </Link>
                <Link to="/atividade2" className="link-button">
                    Atividade 2 - Relógio
                </Link>
                <Link to="/atividade3" className="link-button">
                    Atividade 3 - Contador de Pessoas
                </Link>
                <Link to="/atividade4" className="link-button">
                    Atividade 4 - Componente
                </Link>
                <Link to="/atividade5" className="link-button">
                    Atividade 5 - Interatividade
                </Link>
            </div>
        </div>
    );
}
