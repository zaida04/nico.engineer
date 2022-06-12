import Footer from "../components/Footer";

export default function Layout(props: { children: any }) {
    return (
        <>
            <main>{props.children}</main>
            <div className="text-white flex pt-8 pl-10 pb-4">
                <Footer />
            </div>
        </>
    );
}
