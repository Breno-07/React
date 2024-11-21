import Profile from './Profile';
import {people} from './data.js';
import './Gallery.css';

export default function Gallery() {
    return (
        <section className="gallery">
            <Profile
                person={people[0]}
            />
            <Profile
                person={people[1]}
            />
            <Profile
                person={people[2]}
            />
            <Profile
                person={people[3]}
            />
            <Profile
                person={people[4]}
            />
        </section>
    );
}
