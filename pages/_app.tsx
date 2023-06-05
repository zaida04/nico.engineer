import "../styles/globals.css";
import "../styles/styles.css";
import "../styles/atom-dark.css"
import type { AppProps } from "next/app";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import MainLayout from "../components/Layouts/MainLayout";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta property="og:url" content={`https://nico.enginner${router.route}`} />
                <meta httpEquiv="Content-Security-Policy" content="default-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline';" />
                <meta name="theme-color" content="#0f1117" />
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
