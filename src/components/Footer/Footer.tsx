import listIcon from "../../assets/list.svg"
import chartIcon from "../../assets/svg/chart.svg"
import cartIcon from "../../assets/svg/cart.svg"
import dollarIcon from "../../assets/dollar.svg"
import settingsIcon from "../../assets/settings.svg"
import "./Footer.scss"
import {ListIcon} from "../../assets/svg/ListIcon.tsx";
import {CardIcon} from "../../assets/svg/CardIcon.tsx";
import {DollarIcon} from "../../assets/svg/DollarIcon.tsx";
import {SettingsIcon} from "../../assets/svg/SettingsIcon.tsx";
import {ChartIcon} from "../../assets/svg/ChartIcon.tsx";
export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-button selected">
                <div className="footer-icon" id="list"><ListIcon/></div>
                <div className="footer-text">Dashboard</div>
            </div>
            <div className="footer-button">
                <div className="footer-icon"><ChartIcon/></div>
                <div className="footer-text">Megabot</div>
            </div>
            <div className="footer-button">
                <div className="footer-icon"><CardIcon/></div>
                <div className="footer-text">Bot market</div>
            </div>
            <div className="footer-button">
                <div className="footer-icon"><DollarIcon/></div>
                <div className="footer-text">Coin prices</div>
            </div>
            <div className="footer-button">
                <div className="footer-icon" id="settings"><SettingsIcon/></div>
                <div className="footer-text">Profile</div>
                <div className="footer-icon-notification-bubble">3</div>
            </div>
        </div>
    );
};