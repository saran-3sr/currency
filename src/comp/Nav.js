import react from "react";
import { Link } from "react-router-dom";

const Nav=()=>{
    return(
        <div className="nav-bar">
            <h1>3SP</h1>
            <ul>
                <Link to="/">
                <li>Home</li>
                </Link>
                <Link to="convertor">
                <li>Convertor</li>
                </Link>
                
            </ul>
        </div>
    )
}
export default Nav