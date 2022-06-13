const MDXComponents = {
    h1: (props: { children: any }) => (
        <h1 className="text-4xl font-bold font-rubik leading-loose" {...props}>
            {props.children}
        </h1>
    ),
};

export default MDXComponents;
