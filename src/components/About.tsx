import { useParams } from "react-router-dom";
import { IPlanet } from "../types";

export default function About(props: { planet: IPlanet |undefined}) {
    const params = useParams();

    let content, source;
    switch (params.tab) {
        case 'structure':
            content = props.planet?.structure.content;
            source = props.planet?.structure.source;
            break;
        case 'surface':
            content = props.planet?.geology.content;
            source = props.planet?.geology.source;
            break;
        default:
            content = props.planet?.overview.content;
            source = props.planet?.overview.source;
            break;
    }

    return (
        <section className="about">
            <h2 className="about.title">{props.planet?.name}</h2>
            <p className="about.paragraph">{content}</p>

            <div className="about.source">
                Source :&nbsp;
                <a href={source} className="about.source.link">
                    Wikipedia&nbsp;
                    <img src="./assets/icon-source.svg" alt="" />
                </a>
            </div>
        </section>
    )
}