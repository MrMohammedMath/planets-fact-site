import { host } from "./App";
import { IPlanet } from "./types";

export const getData = async (): Promise<IPlanet[]> => {
    let planets;

    if (localStorage['planets'] === undefined) {
        const res = await fetch(host + 'data.json');
        planets = await res.json();
        localStorage.setItem('planets', JSON.stringify(planets));
    } else {
        planets = JSON.parse(localStorage['planets']);
    }

    return planets;
}