import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export const hoverable = "hover:text-gray-300 transition-colors hover:underline";
export const headings = {
    "/projects": "#projects",
    "/awards": "#competitions",
    "/blog": "#blog",
    // "/explain-aws": "/aws",
}

export default function Navbar(props?: { goBack?: boolean }) {
    const router = useRouter();
    const isBlogPost = props?.goBack || router.route.includes("/blog");

    return (
        <div className="flex flex-row justify-between text-white pt-10 pb-5 px-16">
            <div>
                {isBlogPost && <Link href="/">
                    <p>← Go Back</p>
                </Link>}
            </div>

            <div className="flex flex-row gap-16">
                {!isBlogPost && Object.keys(headings).map((key, index) => {
                    return (
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                type: "keyframes",
                                duration: 0.5,
                                delay: (index * 0.25) + 0.5,
                                stiffness: 260,
                                damping: 20,
                            }}
                            key={key}>
                            <a href={headings[key as keyof typeof headings]}>
                                <p className={hoverable}>{key}</p>
                            </a>
                        </motion.div>
                    );
                })}
            </div>

            <div>
                {<a className={`text-white ${hoverable}`} href="https://github.com/zaida04/nico.engineer">View On GitHub</a>}
            </div>
        </div>
    );
}
