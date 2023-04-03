import { useParams } from "react-router-dom";
import { host } from "../App";
import { IPlanet } from "../types";

export default function Frame(props: { planet: IPlanet | undefined }) {
    const params = useParams();

    let img;
    switch (params.tab) {
        case 'structure':
            img = props.planet?.images.internal;
            break;
        case 'surface':
            img = props.planet?.images.planet;
            break;
        default:
            img = props.planet?.images.planet;
            break;
    }

    document.documentElement.style.setProperty('--planet-img-width', props.planet?.width as string);

    return (
        <div className="frame">
            <img
                src={host + img?.replace('./', '')}
                alt=""
                className="frame.img" />
            <img
                src={host + props.planet?.images.geology.replace('./', '')}
                alt=""
                className={`frame.surface ${params.tab === 'surface' ? '--enabled' : ''}`}

            />
        </div>
    )
}