import Gallery from './Components/Gallery.js';
import TodoList from './Components/TodoList.js';
import PackingList from './Components/PackingList.js';
import { Link } from "react-router-dom";
import './Atv03.css';
import TeaGathering from './Components/TeaGathering.js';

export default function Atv03() {
    return (
        <>
            <h1>Atividade 03</h1>
            <Gallery />

            <TodoList />

            <PackingList />

            <TeaGathering />

            <Link to="/">&#129144; retornar à página inicial</Link>
        </>
    );
}
