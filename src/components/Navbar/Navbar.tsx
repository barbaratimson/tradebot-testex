import menuIcon from "../../assets/menu.svg"
import reloadIcon from "../../assets/reload.svg"
import "./Navbar.scss"
import {MenuIcon} from "../../assets/svg/MenuIcon.tsx";
import {ReloadIcon} from "../../assets/svg/ReloadIcon.tsx";
export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-button"><MenuIcon/></div>
            <div className="navbar-title">Dashboard</div>
            <div className="navbar-button"><ReloadIcon/></div>
        </div>
    );
};