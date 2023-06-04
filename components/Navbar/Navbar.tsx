import Link from "next/link";

export const hoverable = "hover:text-gray-300 transition-colors hover:underline";
export const headings = {
    "/root": "/",
    "/projects": "/projects",
    "/competitions": "/competitions",
    "/explain-aws": "/aws",
}

export default function Navbar(props?: { goBack?: boolean }) {
    return (
        <div className="flex flex-row justify-between text-white pt-10 pb-5 px-16">
            <div>
                {props?.goBack && <Link href="/">
                    <p>← Go Back</p>
                </Link>}
            </div>

            <div className="flex flex-row gap-16">
                {Object.keys(headings).map((key) => {
                    return (
                        <div key={key}>
                            <Link href={headings[key as keyof typeof headings]}>
                                <p className={hoverable}>{key}</p>
                            </Link>
                        </div>
                    );
                })}
            </div>

            <div>
                <a className={`text-white ${hoverable}`} href="https://github.com/zaida04/nico.engineer">View On GitHub</a>
            </div>
        </div>
    );
}
