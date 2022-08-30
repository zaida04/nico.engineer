export default function HoverableLink({ color, url, children }: { color: string | null; url: string; children: any }) {
    return (
        <a className={`${color} hover:underline font-semibold`} href={url}>
            {children}
        </a>
    );
}
