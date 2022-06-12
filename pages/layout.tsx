import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function Layout(props: { children: any }) {
    return (
        <>
            <Navbar />
            <main>{props.children}</main>
            <div className="text-white flex pt-8 pl-10 pb-4">
                <Footer />
            </div>
        </>
    );
}
