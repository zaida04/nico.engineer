import Statistic from "../Statistic";
import XMailTable from "../Tables/XMailTable";
import CodeBlock from "./CodeBlock";
import RegularBlock from "./RegularBlock";

const MDXComponents = {
    h1: (props: { children: any }) => (
        <h1 className="text-5xl font-bold font-rubik pb-8 md:pb-4 text-center md:text-left" {...props}>
            {props.children}
        </h1>
    ),
    h2: (props: { children: any }) => (
        <h1 className="text-3xl md:text-4xl font-bold font-rubik pb-8 md:pb-4 text-center md:text-left" {...props}>
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
        return <p className="pt-4 pb-8 indent-4 text-left w-full">{props.children}</p>;
    },
    code: (props: { children: any }) => {
        return <code className="bg-slate-700 px-2 mr-1 rounded-md text-red-600">{props.children}</code>;
    },
    pre: (props: { children: any }) => {
        return (
            <div className="overflow-x-scroll md:overflow-x-auto bg-slate-800">
                <pre className="text-lg p-4 mb-4 whitespace-pre-wrap">{props.children}</pre>
            </div>
        );
    },
    blockquote: (props: { children: any }) => {
        return <blockquote className="indent-0 bg-slate-800 px-4 pt-4 mb-4">{props.children}</blockquote>;
    },
    li: (props: { children: any }) => {
        return <li className="list-desc ml-3 py-2">{props.children}</li>;
    },
    ol: (props: { children: any }) => {
        return <ol className="md:indent-8 px-4 list-decimal">{props.children}</ol>;
    },
    ul: (props: { children: any }) => {
        return <ul className="list-desc">{props.children}</ul>;
    },
    // eslint-disable-next-line jsx-a11y/alt-text
    img: (props: { src: any }) => <img {...props} className="pt-8" />,
    XMailTable,
    CodeBlock,
    RegularBlock,
};

export default MDXComponents;