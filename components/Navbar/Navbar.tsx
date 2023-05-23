import Link from "next/link";
import Image from "next/image";
import NavbarItem from "./NavbarItem";

export default function Navbar(props?: { goBack?: boolean }) {
    return (
        <nav className="px-2 py-2.5 bg-guilded-black sm:px-4 w-full">
            <div className="container mx-auto flex items-center justify-between">
                <div className="whitespace-nowrap pl-2 md:pl-20 text-lg my-auto select-none">
                    {props?.goBack && <Link href="/">
                        <ul className="pt-4 items-center flex flex-col md:mt-0 md:flex-row md:space-x-4 md:pr-16">
                            <NavbarItem text="← Go Back" dest="https://github.com/zaida04/nico.engineer" />
                        </ul>
                    </Link>}
                    {/*<Link href="/">
                        <Image src="/my_face.png" width="75" height="75" className="hover:cursor-pointer" alt="my face" />
                         <ul className="mt-4 items-center flex flex-col md:mt-0 md:flex-row md:space-x-4 md:pr-16">
                            <NavbarItem text="Home" dest="https://github.com/zaida04/nico.engineer" />
                        </ul>
                    </Link> */}
                </div>
                <div className="mt-4 w-full md:block md:w-auto hidden" id="mobile-menu">
                    <ul className="items-center flex flex-col md:mt-0 md:flex-row md:space-x-4 md:pr-16">
                        <NavbarItem text="View On GitHub" dest="https://github.com/zaida04/nico.engineer" />
                    </ul>
                </div>
            </div>
        </nav>
    );
}
