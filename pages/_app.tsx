import "../styles/globals.css";
import "../styles/styles.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "./layout";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
