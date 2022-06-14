import Statistic from "./Statistic";

const MDXComponents = {
    h1: (props: { children: any }) => (
        <h1 className="text-4xl font-bold font-rubik leading-loose" {...props}>
            {props.children}
        </h1>
    ),
    a: (props: { children: any; href: string }) => {
        return (
            <a href={props.href}>
                <Statistic hover={true}>{props.children}</Statistic>
            </a>
        );
    },
    p: (props: { children: any }) => {
        return <p className="pb-4 indent-8">{props.children}</p>;
    },
};

export default MDXComponents;
