import { Outlet, Link } from "react-router-dom";
import './Navigation.scss';

function Navigation() {

    return (
        <div className={'navigation'}>
            <Link to='/about'>About</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contacts</Link>

            <Outlet />
        </div>
    )
}

export default Navigation;
