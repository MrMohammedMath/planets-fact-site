import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { IPlanet } from "../types";
import { getData } from "../api";


export default function Nav(props: { onClick: () => void }) {
    const [planets, setPlanets] = useState<string[] | undefined>(undefined);

    useEffect(() => {
        (async () => {
            setPlanets((await getData()).map((v: IPlanet) => v.name.toLowerCase()));
        })();
    }, []);


    return (
        <nav className="nav">
            {
                planets?.map((v, i) => {
                    return (
                        <NavLink to={v} key={i} className="nav.link" onClick={props.onClick}>
                            <div className="nav.link.circle" style={{ backgroundColor: `var(--nav-${v}-color)` }}></div>
                            {v}
                            <span className="nav.link.right-arrow">&gt;</span>

                        </NavLink>
                    )
                })
            }
        </nav>
    )
}