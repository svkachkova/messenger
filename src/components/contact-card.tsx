import { Link } from 'react-router-dom';
import userPicture from './user-picture.svg';

type Props = {
    login: string;
};

function ContactCard(props: Props) {
    const { login } = props;
    return (
        <Link to={`/dialog/${login}`}>
            <li>
                <img src={userPicture} alt={`User ${login}.`} />
                <span>{login}</span>
            </li>
        </Link>
    );
}

export { ContactCard };
