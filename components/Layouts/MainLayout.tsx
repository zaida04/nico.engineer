import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";
import { useRouter } from "next/router";
import { useIsMobile } from "../../lib/hooks";
import { motion } from "framer-motion";
import MobileNavbar from "../Navbar/MobileNavbar";

const ogDescription =
  "I'm a passionate full-stack developer who loves building applications used by millions around the world using Node.js, JavaScript, TypeScript, and Python. I'm currently really interested in learning lower-level languages such as Rust and Elixir.";

export default function MainLayout(props: { children: React.ReactNode }) {
  const router = useRouter();
  const isMobile = useIsMobile();

  return <>
    <Head>
      <title>Nico&apos;s site</title>
      <meta name="description" content={ogDescription} />
      <meta property="og:title" content="Nico's site" />
      <meta property="og:site_name" content="nico.engineer" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://nico.engineer/" />
      <meta property="og:image" content="https://nico.engineer/my_face.png" />
      <meta property="og:description" content={ogDescription} />
      <meta name="theme-color" content="#0f1117" />
    </Head>
    {isMobile ? <MobileNavbar /> : <Navbar goBack={router.pathname.includes("blog")} />}

    <motion.div
      initial={{ y: 150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 300, opacity: 0 }}
      transition={{
        type: "keyframes",
        duration: 0.5,
        stiffness: 260,
        damping: 20,
      }}>
      <main>{props.children}</main>
    </motion.div>

    <div className="text-white flex pt-8 justify-center pb-4 w-full">
      <div className="w-3/4">
        <Footer />
      </div>
    </div>
  </>
}