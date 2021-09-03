import { Link } from 'react-router-dom';

type Props = {
    children: string;
    link: string;
};

function RouteButton(props: Props) {
    return (
        <Link to={props.link}>
            <button>
                {props.children}
            </button>
        </Link>
    );
}

export { RouteButton };
