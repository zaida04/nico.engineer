export default function Statistic(props: { children: any; hover?: boolean }) {
    return <code className={`text-pink-600 font-bold italic ${props.hover && "hover:underline"}`}>{props.children}</code>;
}
