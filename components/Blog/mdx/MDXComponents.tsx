import CodeBlock from "./CodeBlock";
import RegularBlock from "./RegularBlock";
import XMailTable from "../Tables/XMailTable";
import Statistic from "../../Statistic";

const MDXComponents = {
    h1: (props: { children: React.ReactNode }) => (
        <h1 className="text-3xl font-bold font-rubik py-4 text-center md:text-left" {...props}>
            {props.children}
        </h1>
    ),
    h2: (props: { children: React.ReactNode }) => (
        <h1 className="text-xl md:text-2xl font-bold font-rubik py-4 mt-10 mb-4 md:py-2 text-center md:text-left" {...props}>
            {props.children}
        </h1>
    ),
    a: (props: { children: React.ReactNode; href: string }) => {
        return (
            <a href={props.href}>
                <Statistic hover={true}>{props.children}</Statistic>
            </a>
        );
    },
    p: (props: { children: React.ReactNode }) => {
        return <p className="pt-4 pb-6 indent-4 text-left w-full">{props.children}</p>;
    },
    code: (props: { children: React.ReactNode }) => {
        return <code className="bg-slate-700 px-2 mr-1 rounded-md text-red-600">{props.children}</code>;
    },
    pre: (props: { children: React.ReactNode }) => {
        return (
            <div className="overflow-x-scroll md:overflow-x-auto bg-slate-800">
                <pre className="text-md p-4 mb-4 whitespace-pre-wrap">{props.children}</pre>
            </div>
        );
    },
    blockquote: (props: { children: React.ReactNode }) => {
        return <blockquote className="indent-0 bg-slate-800 px-4 pt-4 mb-4">{props.children}</blockquote>;
    },
    li: (props: { children: React.ReactNode }) => {
        return <li className="list-desc py-2">{props.children}</li>;
    },
    ol: (props: { children: React.ReactNode }) => {
        return <ol className="md:indent-8 ml-4 px-2 md:px-4 list-decimal">{props.children}</ol>;
    },
    ul: (props: { children: React.ReactNode }) => {
        return <ul className="list-desc">{props.children}</ul>;
    },
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    img: (props: { src: string }) => <img {...props} className="pt-8" />,
    XMailTable,
    CodeBlock,
    RegularBlock,
};

export default MDXComponents;
