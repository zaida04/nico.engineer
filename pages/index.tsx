import type { GetStaticProps, NextPage } from "next";
import JobTitle from "../components/JobTitle";
import Image from "next/image";
import { getAnimeCount } from "../lib/anilist";
import { getTimeCoding } from "../lib/wakatime";
import Statistic from "../components/Statistic";
import Github from "../components/Icons/Github";
import Discord from "../components/Icons/Discord";
import ProjectCard, { ProjectCardProps } from "../components/Projects/ProjectCard";
import SmallCard from "../components/Post/SmallCard";
import { ArticleData, getAllArticles } from "../lib/articles";
import Head from "next/head";

const FEATURED_PROJECTS: ProjectCardProps[] = [
    {
        color: "bg-yellow-400",
        title: "Guilded.js",
        description: "Tools for creating bots with the guilded.gg bot API. Usable in either JavaScript or TypeScript projects",
        repoLink: "https://github.com/guildedjs/guilded.js",
        url: "https://guilded.js.org/",
    },
    {
        color: "bg-red-500 text-white",
        descriptionColor: "text-white",
        title: "Yoki",
        description: "Previously on Discord, Yoki is the first moderation bot on Guilded. Focused on reliability and customizability.",
        url: "https://yoki.gg/",
    },
    {
        color: "bg-blue-600",
        title: "Dark Matter Docs",
        description: "Community documentation for SkySkan's Dark Matter software. Compilation of knowledge from various community members",
        repoLink: "https://github.com/zaida04/digitalsky-dark-matter-documentation",
        url: "https://zaida04.gitbook.io/darkmatter/",
    },
];

export const getStaticProps: GetStaticProps = async (ctx) => {
    const animeCount = await getAnimeCount("nico03727").catch(() => 0);
    const timeCoding = await getTimeCoding().catch(() => "");
    const articles = (await getAllArticles()).sort();
    return {
        props: {
            animeCount,
            timeCoding,
            articles,
        },
        revalidate: 1000,
    };
};

type Props = {
    animeCount: number;
    timeCoding: string;
    articles: ArticleData[];
};

const Home: NextPage<Props> = ({ animeCount, timeCoding, articles }) => {
    const ogDescription =
        "I'm a passionate full-stack developer who loves building applications used by millions around the world using Node.js, JavaScript, TypeScript, and Python. I'm currently really interested in learning lower-level languages such as Rust and Elixir.";

    return (
        <>
            <Head>
                <title>Nico&apos;s site</title>
                <meta name="description" content={ogDescription} />
                <meta property="og:title" content="Nico's site" />
                <meta property="og:site_name" content="nico.engineer" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://nico.engineer/" />
                <meta property="og:image" content="https://nico.engineer/my_face.png" />
                <meta property="og:description" content={ogDescription} />
                <meta name="theme-color" content="#0f1117" />
            </Head>
            <div className="h-full w-full md:flex items-center">
                <div className="md:flex md:pl-40 md:pt-14 px-10 py-20">
                    <div className="text-xl leading-loose text-gray-400 max-w-[45rem] space-y-6">
                        <h1 className="md:text-7xl text-3xl font-black text-white pb-4">Hello, I&apos;m Nico.</h1>
                        <p>
                            I&apos;m a passionate full-stack developer who loves building applications used by millions around the world using{" "}
                            <a className="text-green-600 hover:underline font-semibold" href="https://nodejs.org/en/">
                                Node.js
                            </a>
                            ,{" "}
                            <a className="text-yellow-300 hover:underline font-semibold" href="https://www.javascript.com/">
                                JavaScript
                            </a>
                            ,{" "}
                            <a className="text-blue-700 hover:underline font-semibold" href="https://www.typescriptlang.org/">
                                TypeScript
                            </a>
                            , and{" "}
                            <a className="hover:underline font-semibold" href="https://www.python.org/">
                                <span className="text-[#306998]">Pyt</span>
                                <span className="text-[#FFE873]">hon</span>
                            </a>
                        </p>
                        <p>
                            I&apos;m currently really interested in learning lower-level languages such as{" "}
                            <a className="text-red-600 hover:underline font-semibold" href="https://www.rust-lang.org/">
                                Rust
                            </a>{" "}
                            and scalable languages like{" "}
                            <a className="text-purple-700 hover:underline font-semibold" href="https://elixir-lang.org/">
                                Elixir
                            </a>
                        </p>
                        <p>
                            I&apos;m the <JobTitle url="https://github.com/yoki-labs">founder of Yoki Labs</JobTitle>, and currently working as a{" "}
                            <JobTitle url="https://discord.gg/acc">Lead Content Moderator at Adobe</JobTitle>.
                        </p>
                        <p>
                            I&apos;ve watched <Statistic>{animeCount}</Statistic> animes and spent <Statistic>{timeCoding}</Statistic> coding this year.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://github.com/zaida04" className="text-4xl">
                                <Github fill="#FFFFFF" />
                            </a>
                            <a href="https://discord.com/users/500765481788112916/" className="text-4xl text-black">
                                <Discord />
                            </a>
                        </div>
                    </div>
                </div>
                <Image src="/my_face.png" width="450" height="450" alt="My face" />
            </div>
            <div className="w-full flex py-20">
                <h1 className="mx-auto text-4xl md:text-5xl font-semibold text-white">Featured Projects</h1>
            </div>
            <div className="flex pb-20">
                <div className="px-8 md:mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-3 md:auto-cols-min auto-rows-min">
                    {FEATURED_PROJECTS.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
            <div className="pl-14 md:pl-40 pb-40 md:grid md:grid-cols-7">
                <div className="col-span-full py-20">
                    <h1 className="text-4xl md:text-5xl font-semibold text-white">Articles</h1>
                </div>
                <div className="md:col-span-3">
                    {articles.map((article) => (
                        <SmallCard key={article.title} {...article} />
                    ))}
                </div>
                <div className="md:col-start-5 md:col-end-7 pt-20 md:pt-0 text-white">
                    <h1 className="text-6xl font-semibold pb-4">Contact Me</h1>
                    <a href="mailto:contact@nico.engineer">
                        <p className="text-xl transition hover:scale-110 hover:text-yellow-200">Email: contact@nico.engineer</p>
                    </a>
                    <a href="https://discord.com/users/500765481788112916/">
                        <p className="text-xl transition hover:scale-110 hover:text-[#5865F2]">Discord: n1co#3727</p>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Home;
