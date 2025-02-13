import lightImage from "../../assets/misc/light.png"
import "./Navbar.scss"
import {MenuIcon} from "../../assets/svg/MenuIcon.tsx";
import {ReloadIcon} from "../../assets/svg/ReloadIcon.tsx";
export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-button"><MenuIcon/></div>
            <div className="navbar-title">Dashboard</div>
            <div className="navbar-button"><ReloadIcon/></div>
            <div className="navbar-gradient"><img src={lightImage} alt=""/></div>
        </div>
    );
};