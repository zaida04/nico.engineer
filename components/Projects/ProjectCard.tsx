import Github from "../Icons/Github";
import Link from "../Icons/Link";

export interface ProjectCardProps {
    color: string;
    descriptionColor?: string;
    title: string;
    description: string;
    repoLink?: string;
    url?: string;
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <div className={`rounded-xl ${props.color} w-[25em] px-8 pt-8 pb-2 transition ease-in-out hover:scale-110 `}>
            <h1 className="text-4xl font-semibold pb-2">{props.title}</h1>
            <p className={`text-md ${props.descriptionColor ?? "text-black"}`}>{props.description}</p>

            <div className="flex space-x-4 pt-2 pb-4">
                {props.repoLink && (
                    <a href={props.repoLink}>
                        <Github className="text-3xl hover:scale-110" />
                    </a>
                )}
                {props.url && (
                    <a href={props.url}>
                        <Link className="text-3xl pt-1 hover:scale-110" />
                    </a>
                )}
            </div>
        </div>
    );
}
