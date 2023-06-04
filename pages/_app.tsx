import "../styles/globals.css";
import "../styles/styles.css";
import "../styles/atom-dark.css"
import type { AppProps } from "next/app";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import MainLayout from "../components/Layouts/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta httpEquiv="Content-Security-Policy" content="default-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline';" />
            </Head>
            <AnimatePresence mode="wait" initial={true}>
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </AnimatePresence>
        </>
    );
}

export default MyApp;
