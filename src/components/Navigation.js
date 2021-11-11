import react from "react";
import {Link} from "react-router-dom";
import "./Navigation.css"

function Navigation() {
    return(
        <div className="nav">
            <div className="nav__location">
            <Link to="/">나래관  ✓</Link>
            </div>
            <div className="nav__myChoice">
            <Link to="/rooms/addRoom">나의 선택</Link>
            </div>
            <div className="nav__differentChoice">
            <Link to="/rooms">다른 선택</Link>
            </div>
            <div className="nav__setting"><Link to="/rooms">세팅</Link></div>
        </div>
    );
}

export default Navigation;