import Link from "next/link";
import Image from "next/image";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
    return (
        <nav className="px-2 py-2.5 bg-guilded-black sm:px-4 w-full">
            <div className="container mx-auto flex items-center justify-between">
                <div className="whitespace-nowrap pl-2 md:pl-20 my-auto text-4xl md:text-3xl select-none">
                    <Link href="/">
                        <Image src="/my_face.png" width="75" height="75" className="hover:cursor-pointer" alt="my face" />
                    </Link>
                </div>
                <div className="w-full md:block md:w-auto" id="mobile-menu">
                    <ul className="mt-4 items-center flex flex-col md:mt-0 md:flex-row md:space-x-4 md:pr-16">
                        <NavbarItem text="View On GitHub" dest="https://github.com/zaida04/nico.engineer" />
                    </ul>
                </div>
            </div>
        </nav>
    );
}
