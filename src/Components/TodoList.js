import Avatar from './Avatar.js';
import './TodoList.css';

const person = {
    name: 'Gregorio Y. Zara',
    imageId: '7vQD0fPs',
};

/* uso geral
const today = new Date();

function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'long' }
    ).format(date);
}
*/

export default function TodoList() {
    return (
        <section className='todo-container'>
            <h2>{person.name}'s Todos</h2>
            <Avatar
                person={{ person }}
                size={3}
            />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </section>
    );
}
