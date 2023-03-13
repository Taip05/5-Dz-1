import {Link, NavLink} from "react-router-dom";


export default function NavBar() {
    return (
        <ul style={{display: 'flex', listStyleType: 'none'}}>
            <li style={{marginRight: '15px'}}>
                <NavLink
                    to="/"
                    className={({isActive}) => isActive && 'active'}
                    state={"hello world"}
                >Main page</NavLink>
            </li>
            <li style={{marginRight: '15px'}}>
                <NavLink
                    to="/about"
                    className={({isActive}) => isActive && 'active'}
                >About page</NavLink>
            </li>
            <li style={{marginRight: '15px'}}>
                <NavLink
                    to="/portfolio"
                    className={({isActive}) => isActive && 'active'}
                >Portfolio page</NavLink>
            </li>
            <li style={{marginRight: '15px'}}>
                <NavLink
                    to="/some"
                    className={({isActive}) => isActive && 'active'}
                >Some page</NavLink>
            </li>
        </ul>
        
    )}