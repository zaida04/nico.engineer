import { useRouter } from "next/router";

import Footer from "./Footer";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";
import { useIsMobile } from "../../lib/hooks";

export default function MainLayout(props: { children: React.ReactNode }) {
    const router = useRouter();
    const isMobile = useIsMobile();

    return (
        <>
            {isMobile ? <MobileNavbar /> : <Navbar goBack={router.pathname.includes("blog")} />}

            <main>
                <div className="flex flex-col md:items-center md:justify-center px-4 md:px-0 pt-4 md:pt-14">
                    <div className="w-full md:w-2/3">{props.children}</div>
                </div>
            </main>

            <div className="text-white flex pt-8 justify-center pb-4 w-full">
                <div className="w-3/4">
                    <Footer />
                </div>
            </div>
        </>
    );
}
