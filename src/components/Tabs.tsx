import { NavLink, Outlet, useParams } from "react-router-dom";

export default function Tabs(props: { className?: string }) {
    const params = useParams();

    document.documentElement.style.setProperty('--planet-color', `var(--${params.planet}-color)`);

    return (
        <>
            <nav className={"tabs " + props.className}>
                <NavLink
                    to="."
                    end
                    className={({ isActive }) => isActive ? "tabs.link --active" : "tabs.link"}>
                    OVERVIEW
                </NavLink>
                <NavLink
                    to="structure"
                    className={({ isActive }) => isActive ? "tabs.link --active" : "tabs.link"}>
                    <span className="tabs.link.extend">Internal&nbsp;</span>
                    Structure
                </NavLink>
                <NavLink
                    to="surface"
                    className={({ isActive }) => isActive ? "tabs.link --active" : "tabs.link"}>
                    Surface
                    <span className="tabs.link.extend">&nbsp;Geology</span>
                </NavLink>
            </nav>

            <Outlet />
        </>
    )
}