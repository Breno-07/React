import Avatar from './Avatar.js';
import './Profile.css';

function Card({ children }) {
    return (
        <div className='card'>
            {children}
        </div>
    );
}

export default function Profile({ person }) {
    return (
        <>
            <Card>
                <Avatar
                    person={person}
                />
                <p>{person.name}</p>
            </Card>
        </>
    );
}
