export default function Footer() {
    return (
        <div className="py-2">
            © Nico 2022, inspired by{" "}
            <a href="https://xetera.dev/" className="text-pink-600 hover:underline">
                Xetera&apos;s site
            </a>
            , reimagined with{" "}
            <a href="https://nextjs.org/" className="text-pink-600 hover:underline">
                Next.js
            </a>{" "}
            and{" "}
            <a href="https://tailwindcss.com/" className="text-pink-600 hover:underline">
                Tailwind
            </a>
        </div>
    );
}
