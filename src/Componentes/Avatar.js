import { getImageUrl } from "./utils";
import './Avatar.css';

export default function Avatar({ person }) {
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
        />
    );
}
