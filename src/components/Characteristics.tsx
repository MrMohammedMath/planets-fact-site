import { IPlanet } from "../types";

export default function Characteristics(props: { planet: IPlanet | undefined}) {
    return (
        <section className="characteristics">
            <div className="characteristics.item">
                ROTATION TIME
                <span className="characteristics.item.value">
                    {props.planet?.rotation}
                </span>
            </div>

            <div className="characteristics.item">
                REVOLUTION TIME
                <span className="characteristics.item.value">
                    {props.planet?.revolution}
                </span>
            </div>

            <div className="characteristics.item">
                radius
                <span className="characteristics.item.value">
                    {props.planet?.radius}
                </span>
            </div>

            <div className="characteristics.item">
                AVERAGE TEMP.
                <span className="characteristics.item.value">
                    {props.planet?.temperature}
                </span>
            </div>
        </section>
    )
}