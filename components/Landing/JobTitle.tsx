import Statistic from "../Statistic";

export default function JobTitle(props: { children: React.ReactNode; url: string }) {
    return (
        <a href={props.url}>
            <Statistic hover={true}>{props.children}</Statistic>
        </a>
    );
}
