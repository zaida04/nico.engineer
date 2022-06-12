export default function SmallCard(props: { timePublished: string; readTime: string; title: string; shortDescription: string }) {
    return (
        <div className="max-w-[45rem] pb-10 transition hover:scale-110">
            <div className="flex text-gray-500">
                <p>{props.timePublished}</p>
                <p className="px-2">•</p>
                <p>{props.readTime} </p>
            </div>
            <h1 className="text-3xl font-semibold text-white">{props.title}</h1>
            <p className="text-xl text-gray-400">{props.shortDescription}</p>
        </div>
    );
}
