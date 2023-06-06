import { DateTime } from "luxon";

import { Tags } from "../Tags";

export default function SmallCard(props: { slug: string; publishedAt: number; readingTime: string; title: string; description: string; tags?: string[] }) {
    return (
        <a href={`/blog/${props.slug}`}>
            <div className="flex flex-col justify-between max-w-[45rem] pb-10">
                <h1 className="text-2xl font-semibold text-white transition-opacity hover:opacity-60">{props.title}</h1>
                <div className="flex text-gray-500">
                    <p>{DateTime.fromMillis(props.publishedAt).toRelative()}</p>
                    <p className="px-2">•</p>
                    <p className="text-yellow-100">{props.readingTime} </p>
                </div>
                <p className="text-lg text-gray-400">{props.description}</p>
                {props.tags && <Tags tags={props.tags} />}
            </div>
        </a>
    );
}
