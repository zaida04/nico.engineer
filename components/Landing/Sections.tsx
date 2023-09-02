export function SectionHeader(props: { children: React.ReactNode }) {
    return <h1 className="text-4xl mt-8 mb-6 md:mt-12 md:mb-10 md:text-6xl font-semibold text-white">{props.children}</h1>;
}
