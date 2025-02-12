import {Footer} from "../Footer/Footer.tsx";
import {Navbar} from "../Navbar/Navbar.tsx";
import {Pages} from "../Pages/Pages.tsx";
import "./Main.scss"

export const Main = () => {
    return (
        <div className="main-wrapper">
            <Navbar/>
            <Pages/>
            <Footer/>
        </div>
    );
};