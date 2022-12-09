import {Link} from "react-router-dom";
import "./nav.css"

export function Nav(){
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about-us">About</Link>
                </li>
            </ul>
        </nav>
    )
}
