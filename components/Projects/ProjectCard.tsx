import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IFetchRepo } from "../../lib/github";
import Github from "../Icons/Github";
import Link from "../Icons/Link";
import { Tags } from "../Tags";

export interface ProjectCardProps {
    title: string;
    description?: string;
    repoLink?: string;
    repoName?: string;
    ownerName?: string;
    tags?: string[];
    statistic?: string;
    repoData?: IFetchRepo;
    url?: string;
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <div className={`flex flex-col justify-between rounded-xl border-[1px] border-slate-800 text-white max-w-sm px-8 pt-8 pb-2`}>
            <h1 className="text-3xl font-semibold pb-1">{props.title}</h1>
            {
                (props.repoData || props.statistic) &&
                <div className="inline-flex pb-1">
                    {props.repoData && <FontAwesomeIcon icon={faStar} className="w-6 pr-1" />}
                    <p>{props.repoData?.stargazers_count ?? props.statistic}</p>
                </div>
            }

            <p className="text-md">{props.description ?? props.repoData?.description}</p>

            {props.tags && <div>
                <Tags tags={props.tags} />
            </div>}

            <div className="flex space-x-4 pt-2 pb-4">
                {(props.repoLink || props.repoName) && (
                    <a href={props.repoLink ?? `https://github.com/${props.ownerName}/${props.repoName}`}>
                        <Github fill="#FFFFFF" className="text-2xl hover:opacity-50 transition-opacity" />
                    </a>
                )}
                {props.url && (
                    <a href={props.url}>
                        <Link fill="#FFFFFF" className="text-2xl pt-1 hover:opacity-50 transition-opacity" />
                    </a>
                )}
            </div>
        </div>
    );
}
