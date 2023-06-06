export const Tags = (props: { tags: string[] }) => {
    return (
        <div className="flex gap-2 pt-1">
            {props.tags.map((tag) => (
                <div key={tag} className="py-1 px-2 bg-slate-800 rounded-xl">
                    <p className="text-white text-sm">{tag}</p>
                </div>
            ))}
        </div>
    );
};
