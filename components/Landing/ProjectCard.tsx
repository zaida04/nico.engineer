import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Github from "../Icons/Github";
import Link from "../Icons/Link";
import { Tags } from "../Tags";
import { IFetchRepo } from "../../lib/github";

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
    langs: string[];
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <div className="flex flex-col justify-between rounded-xl border-[1px] border-stone-600 shadow-lg shadow-black text-white max-w-[22rem] md:max-w-sm px-8 pt-8 pb-2">
            <div>
                <h1 className="text-3xl font-semibold pb-1">
                    <a href={props.url} className="hover:opacity-60 transition-opacity">
                        {props.title}
                    </a>
                </h1>
                {(props.repoData || props.statistic) && (
                    <div className="flex pb-1 text-amber-500">
                        {props.repoData && <FontAwesomeIcon icon={faStar} className="w-6 pr-1" />}
                        {props.repoData?.stargazers_count && <p>{props.repoData?.stargazers_count}</p>}
                        {props.repoData?.stargazers_count && props.statistic ? (
                            <>
                                <p className="px-2">•</p>
                                <p>{props.statistic}</p>
                            </>
                        ) : (
                            <p>{props.statistic}</p>
                        )}
                    </div>
                )}
                <p className="text-md my-2">{props.description ?? props.repoData?.description}</p>
            </div>

            <div>
                {props.tags && (
                    <div className="flex flex-wrap">
                        <Tags tags={props.tags} />
                    </div>
                )}

                <div className="flex space-x-2 pt-2 pb-4">
                    {(props.repoLink || props.repoName) && (
                        <a href={props.repoLink ?? `https://github.com/${props.ownerName}/${props.repoName}`}>
                            <Github fill="#FFFFFF" className="text-2xl hover:opacity-50 transition-opacity" />
                        </a>
                    )}
                    {props.url && (
                        <a href={props.url}>
                            <Link fill="#FFFFFF" className="text-2xl hover:opacity-50 transition-opacity" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
