import { Outlet, Link } from "react-router-dom";
import './Nav.scss';

function Nav() {

    return (
        <div className={'nav'}>
            <Link to='/about'>About</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contacts</Link>

            <Outlet />
        </div>
    )
}

export default Nav;
