import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function Layout(props: { children: any }) {
    const router = useRouter();

    return (
        <>
            <Navbar goBack={router.pathname.includes("blog")} />
            <main>{props.children}</main>
            <div className="text-white flex flex-col pt-8 items-center justify-center pb-4 w-full">
                <div className="w-3/4">
                    <Footer />
                </div>
            </div>
        </>
    );
}
