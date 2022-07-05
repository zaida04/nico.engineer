import Statistic from "./Statistic";
import Image from "next/image";

const MDXComponents = {
    h1: (props: { children: any }) => (
        <h1 className="text-5xl font-bold font-rubik leading-loose" {...props}>
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
    code: (props: { children: any }) => {
        return <code className="text-red-600">{props.children}</code>;
    },
    // eslint-disable-next-line jsx-a11y/alt-text
    img: (props: { src: any }) => <img {...props} className="pt-8" />,
};

export default MDXComponents;
