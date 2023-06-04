import "../styles/globals.css";
import "../styles/styles.css";
import "../styles/atom-dark.css"
import type { AppProps } from "next/app";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' 'unsafe-inline';" />
            </Head>
            <AnimatePresence mode="wait" initial={true}>
                <Component {...pageProps} />
            </AnimatePresence>
        </>
    );
}

export default MyApp;
