import { NavLink } from "react-router-dom";

function NavBar() {
    return ( 
        <div>
            <h1>Super Cool App</h1>
            <ul className="nav_ul">
                <li><NavLink className='nav_link' to="/home">Home</NavLink></li>
                <li><NavLink className='nav_link' to="/contacts">Contacts</NavLink></li>
                <li><NavLink className='nav_link' to="/projects">Projects</NavLink></li>
            </ul>
        </div>
     );
}

export default NavBar;