export default function SmallCard(props: { slug: string; publishedAt: string; readingTime: string; title: string; description: string }) {
    return (
        <a href={`/blog/${props.slug}`}>
            <div className="max-w-[45rem] pb-10 transition hover:scale-110">
                <div className="flex text-gray-500">
                    <p>{props.publishedAt}</p>
                    <p className="px-2">•</p>
                    <p>{props.readingTime} </p>
                </div>
                <h1 className="text-3xl font-semibold text-white">{props.title}</h1>
                <p className="text-xl text-gray-400">{props.description}</p>
            </div>
        </a>
    );
}
