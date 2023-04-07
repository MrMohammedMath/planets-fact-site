import { host } from "./App";
import { IPlanet } from "./types";

export const getData = async (): Promise<IPlanet[]> => {
    const res = await fetch('/data.json');
    const planets = await res.json();

    return planets;
}