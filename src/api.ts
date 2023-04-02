import { host } from "./App";
import { IPlanet } from "./types";

export const getData = async (): Promise<IPlanet[]> => {
    const res = await fetch(host + 'data.json');
    const json = await res.json();

    return json;
}