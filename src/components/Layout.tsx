import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";

export default function Layout() {
    const [isMenuActive, setisMenuActive] = useState<boolean>(false);

    if (isMenuActive) {
        document.documentElement.style.setProperty('--menu-display', 'flex');
        document.documentElement.style.setProperty('--menu-icon-opacity', '0.25');
    } else {
        document.documentElement.style.setProperty('--menu-display', 'none');
        document.documentElement.style.setProperty('--menu-icon-opacity', '1');
    }


    function toggleMenu() {
        setisMenuActive((v) => !v);
    }

    return (
        <>
            <Header menuOnClick={toggleMenu} />
            <main className="layout">
                <Nav onClick={toggleMenu} />
                <Outlet />
                {/* Frame */}
                {/* About */}
                {/* Characteristics */}
            </main>
        </>
    )
}