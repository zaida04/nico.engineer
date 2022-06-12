import Footer from "../components/Footer";

export default function Layout(props: { children: any }) {
    return (
        <>
            <main>{props.children}</main>
            <div className="text-white py-2">
                <Footer />
            </div>
        </>
    );
}
