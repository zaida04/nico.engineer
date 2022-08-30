export default function Statistic(props: { children: any; hover?: boolean }) {
    return <code className={`text-pink-600 font-bold ${props.hover && "hover:underline"}`}>{props.children}</code>;
}
