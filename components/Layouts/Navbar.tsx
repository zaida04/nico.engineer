import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const hoverable = "hover:text-gray-300 transition-colors hover:underline";
export const headings = {
    "/root": "/",
    "/projects": "/#projects",
    "/awards": "/#competitions",
    "/blog": "/#blog",
    "/explain-aws": "/aws",
}

export default function Navbar(props?: { goBack?: boolean }) {
    const router = useRouter();
    const isBlogPost = props?.goBack || router.route.includes("/blog");

    const [animateOnMount, setAnimateOnMount] = useState(true);
    useEffect(() => {
        setAnimateOnMount(false);
    }, []);

    return (
        <div className="flex flex-row justify-between text-white pt-10 pb-5 px-16">
            <div>
                {isBlogPost && <Link href="/">
                    <p>← Go Back</p>
                </Link>}
            </div>

            <div className="flex flex-row gap-16">
                {!isBlogPost && Object.keys(headings).map((key, index) => {
                    const heading = headings[key as keyof typeof headings];

                    return (
                        <motion.div
                            initial={animateOnMount ? { y: 50, opacity: 0 } : false}
                            animate={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                type: "keyframes",
                                duration: 0.40,
                                delay: (index * 0.22) + 0.35,
                                stiffness: 260,
                                damping: 20,
                            }}
                            key={key}>
                            {heading.startsWith("/#") ?
                                <a href={heading}>
                                    <p className={hoverable}>{key}</p>
                                </a> : <Link href={heading}>
                                    <p className={hoverable}>{key}</p>
                                </Link>}
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
