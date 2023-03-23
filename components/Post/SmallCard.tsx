import { DateTime } from "luxon";

export default function SmallCard(props: { slug: string; publishedAt: number; readingTime: string; title: string; description: string; tags?: string[] }) {
    return (
        <a href={`/blog/${props.slug}`}>
            <div className="flex flex-col justify-between max-w-[45rem] pb-10">
                <div className="flex text-gray-500">
                    <p>{DateTime.fromMillis(props.publishedAt).toRelative()}</p>
                    <p className="px-2">•</p>
                    <p>{props.readingTime} </p>
                </div>
                <h1 className="text-3xl font-semibold text-white transition-opacity hover:opacity-60">{props.title}</h1>
                <p className="text-xl text-gray-400">{props.description}</p>
                {props.tags &&
                    <div className="flex gap-2 pt-1">
                        {props.tags.map(tag =>
                            <div key={tag} className="py-1 px-2 bg-slate-900 rounded-xl">
                                <p className="text-white">{tag}</p>
                            </div>
                        )}
                    </div>
                }
            </div>
        </a >
    );
}
