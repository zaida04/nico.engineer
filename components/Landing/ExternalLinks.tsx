import HoverableLink from "../HoverableLink";

const links = {
    node: { color: "text-green-600", url: "https://nodejs.org/en/", text: "Node.js" },
    javascript: { color: "text-yellow-300", url: "https://www.javascript.com/", text: "JavaScript" },
    typescript: { color: "text-blue-700", url: "https://www.typescriptlang.org/", text: "TypeScript" },
    python: {
        color: null,
        url: "https://www.python.org/",
        text: (
            <>
                <span className="text-[#306998]">Pyt</span>
                <span className="text-[#FFE873]">hon</span>
            </>
        ),
    },
    rust: { color: "text-red-600", url: "https://www.rust-lang.org/", text: "Rust" },
    elixir: { color: "text-purple-700", url: "https://elixir-lang.org/", text: "Elixir" },
    pg: { color: "text-[#0064a5]", url: "https://www.postgresql.org/", text: "PostgreSQL" },
    mongo: { color: "text-[#4db33d]", url: "https://www.mongodb.com/", text: "MongoDB" },
    yoki: { color: "text-[#F5C400]", url: "https://yoki.gg", text: "Yoki" },
    adobe: { color: "text-[#ED2224]", url: "https://discord.gg/acc", text: "Adobe Creative Career" },
    fiveable: { color: "text-[#14ac3d]", url: "https://fiveable.me", text: "Fiveable" },
};

export default function ExternalLinks(props: { variant: keyof typeof links }) {
    const selectedVariant = links[props.variant];
    return (
        <HoverableLink color={selectedVariant.color} url={selectedVariant.url}>
            {selectedVariant.text}
        </HoverableLink>
    );
}
