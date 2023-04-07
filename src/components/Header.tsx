import { Link } from "react-router-dom";
import { host } from "../App";
import Nav from "./Nav";


export default function Header(props: { menuOnClick: () => void }) {


    return (
        <header className="header">
            <div className="header.content">
                <h1 className="header.content.title">
                    <Link to="./" className="header.content.title.link">
                        THE PLANETS
                    </Link>
                </h1>
                <button
                    className="header.content.menu-btn"
                    title="menu"
                    onClick={props.menuOnClick}>
                    <img
                        src={host + "assets/icon-hamburger.svg"}
                        alt="" />
                </button>
                <Nav/>
            </div>
        </header>
    )
}