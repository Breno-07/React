import { Link } from "react-router-dom";
import ToolBar from "./Components/ToolBar";
import SculptureGallery from "./Components/SculptureGallery";
import Counter from "./Components/Counter";
import Form from "./Components/Form";
import MovingDot from "./Components/MovingDot";
import Form2 from "./Components/Form2";
import Form3 from "./Components/Form3";
import ListAula5 from "./Components/ListAula5";
import List2Aula5 from "./Components/List2Aula5";
import ShapeEditor from "./Components/ShapeEditor";
import CounterList from "./Components/CounterList";
import List3Aula5 from "./Components/List3Aula5";
import List4Aula5 from "./Components/List4Aula5";
import BucketList from "./Components/BucketList";
import { createRoot } from "react-dom/client";
import './Atv04.css';

const root = createRoot(document.getElementById('root'));
root.render(<SculptureGallery />);

export default function Atv04() {
    return (
        <>
            <h1>Atividade 04</h1>

            <ToolBar />

            <SculptureGallery />

            <Counter />

            <Form />

            <MovingDot />

            <Form2 />

            <Form3 />

            <ListAula5 />

            <List2Aula5 />

            <ShapeEditor />

            <CounterList />

            <List3Aula5 />

            <List4Aula5 />

            <BucketList />

            <Link to="/">&#129144; retornar à página inicial</Link>
        </>
    );
}
