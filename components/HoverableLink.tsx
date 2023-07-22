import { hoverable } from "../utils/hoverable";

export default function HoverableLink({ color, url, children }: { color: string | null; url: string; children: React.ReactNode }) {
    return (
        <a className={`${color} ${hoverable} px-[0.15rem] py-1 font-semibold`} href={url}>
            {children}
        </a>
    );
}
