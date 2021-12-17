import { Link } from 'react-router-dom';

export default function Header(){
    return (
        <div className="header">
            <Link to="/" style={{ textDecoration: 'none' }}  >
                <h1>CINEFLEX</h1>
            </Link>
        </div>
    );
}