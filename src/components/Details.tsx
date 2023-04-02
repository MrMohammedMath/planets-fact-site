import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IPlanet } from "../types";
import Characteristics from "./Characteristics";
import { getData } from "../api";
import Frame from "./Frame";
import About from "./About";

export default function Details() {
    const params = useParams();
    const [planets, setPlanets] = useState<IPlanet[] | undefined>(undefined);

    const planet = planets?.find((p: IPlanet) => {
        return p.name.toLowerCase() === params.planet;
    })

    useEffect(() => {
        (async () => {
            setPlanets(await getData());
        })();
    }, []);



    return (
        <>
            <Frame planet={planet} />
            <About planet={planet} />
            <Characteristics planet={planet}
            />
        </>
    )
}