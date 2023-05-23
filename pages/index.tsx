import type { GetStaticProps, NextPage } from "next";
import { getAnimeCount } from "../lib/anilist";
import { getTimeCoding } from "../lib/wakatime";
import Statistic from "../components/Statistic";
import Github from "../components/Icons/Github";
import Discord from "../components/Icons/Discord";
import ProjectCard, { ProjectCardProps } from "../components/Projects/ProjectCard";
import SmallCard from "../components/Post/SmallCard";
import { ArticleData, getAllArticles } from "../lib/articles";
import Head from "next/head";
import HoverableLink from "../components/HoverableLink";
import { githubFetch, IFetchRepo } from "../lib/github";
import Email from "../components/Icons/Email";
import AwardTable, { AwardTableData } from "../components/Tables/AwardTable";

const FEATURED_PROJECTS: ProjectCardProps[] = [
    {
        title: "Guilded.js",
        description: "Tools for creating bots with the guilded.gg bot API. Usable in either JavaScript or TypeScript projects.",
        repoName: "guilded.js",
        ownerName: "guildedjs",
        tags: ["library", "api", "ws", "react"],
        url: "https://guilded.js.org/",
    },
    {
        title: "Yoki",
        description: "Previously on Discord, Yoki is the first moderation bot on Guilded. Focused on reliability and customizability.",
        statistic: "1300+ servers",
        repoLink: "https://github.com/yoki-labs",
        tags: ["bot", "microservice", "automod", "react"],
        url: "https://yoki.gg/",
    },
    {
        title: "Tenant",
        repoName: "tenant",
        ownerName: "zaida04",
        description: "Lease out subdomains with ease by leveraging cloudflare & github actions 🚀. Powering is-a.engineer.",
        url: "https://is-a.engineer",
        tags: ["dns", "cloudflare", "ci/cd", "react"],
    },
    {
        title: "rent-a-ni.co",
        repoName: "rent-a-ni.co",
        tags: ["api", "link-shortener", "fastify"],
        ownerName: "zaida04",
    },
];

const COMPETITIONS: AwardTableData[] = [
    {
        college: "Princeton",
        competition: "HackPrinceton 2023",
        placement: "1st",
        category: "Education",
        project: "EduLive",
    },
    {
        college: "Buffalo State",
        competition: "CS4HS 2017",
        placement: "3rd",
        category: "Game Dev",
        project: "Rocket Blaster",
    },
    {
        college: "Buffalo State",
        competition: "CS4HS 2016",
        placement: "2rd",
        category: "Web Design",
        project: "GameShare",
    },
];

export const getStaticProps: GetStaticProps = async (ctx) => {
    const animeCount = (await getAnimeCount("nico03727").catch(() => 0)) ?? 0;
    const timeCoding = (await getTimeCoding().catch(() => "")) ?? "";
    const articles = (await getAllArticles().catch(() => [])) ?? [];

    const stars = (
        await Promise.allSettled(
            FEATURED_PROJECTS.filter((x) => x.repoName).map(async (project) => {
                const req = await githubFetch<IFetchRepo>(`/repos/${project.ownerName}/${project.repoName}`);
                return req;
            })
        )
    )
        .filter((x) => x.status === "fulfilled")
        .map((x) => (x as PromiseFulfilledResult<IFetchRepo>).value);

    return {
        props: {
            animeCount,
            timeCoding,
            articles,
            stars,
        },
        revalidate: 1000,
    };
};

type Props = {
    animeCount: number;
    timeCoding: string;
    stars: IFetchRepo[];
    articles: ArticleData[];
};

const Home: NextPage<Props> = ({ animeCount, timeCoding, articles, stars }) => {
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
            <div className="flex flex-col md:items-center md:justify-center px-4 md:px-0 pt-4 md:pt-14">
                <div className="w-full md:w-2/3">
                    <div className="md:flex">
                        <div className="text-xl leading-loose text-gray-400 max-w-[55rem] space-y-6">
                            <h1 className="md:text-6xl text-2xl font-black text-white pb-4">Hello, I&apos;m Zaid.</h1>
                            <p>
                                I&apos;m a passionate full-stack developer who loves building applications used by millions around the world using{" "}
                                {[
                                    { color: "text-green-600", url: "https://nodejs.org/en/", text: "Node.js" },
                                    { color: "text-yellow-300", url: "https://www.javascript.com/", text: "JavaScript" },
                                    { color: "text-blue-700", url: "https://www.typescriptlang.org/", text: "TypeScript" },
                                ].map((data, i) => (
                                    <>
                                        {i !== 0 ? ", " : ""}
                                        <HoverableLink key={data.text} {...data}>
                                            {data.text}
                                        </HoverableLink>
                                    </>
                                ))}
                                , and{" "}
                                <HoverableLink color={null} url="https://www.python.org/">
                                    {" "}
                                    <span className="text-[#306998]">Pyt</span>
                                    <span className="text-[#FFE873]">hon</span>
                                </HoverableLink>
                                .
                            </p>
                            <p>
                                I&apos;m currently really interested in learning lower-level languages such as{" "}
                                <HoverableLink color="text-red-600" url="https://www.rust-lang.org/">
                                    Rust
                                </HoverableLink>{" "}
                                and scalable languages like{" "}
                                <HoverableLink color="text-purple-700" url="https://elixir-lang.org/">
                                    Elixir
                                </HoverableLink>
                                .
                            </p>
                            <p>
                                I&apos;m the founder of{" "}
                                <HoverableLink color="text-[#F5C400]" url="https://yoki.gg">
                                    Yoki
                                </HoverableLink>
                                . On the side, I am a Community Manager for{" "}
                                <HoverableLink color="text-[#ED2224]" url="https://discord.gg/acc">
                                    Adobe Creative Career
                                </HoverableLink>
                                . Previously a Software Engineer at{" "}
                                <HoverableLink color="text-[#14ac3d]" url="https://fiveable.me">
                                    Fiveable
                                </HoverableLink>.
                            </p>
                            <p>
                                I&apos;ve watched <Statistic>{animeCount}</Statistic> animes and spent <Statistic>{timeCoding}</Statistic> coding this year.
                            </p>
                            <div className="flex space-x-4">
                                <a href="https://github.com/zaida04" className="text-3xl hover:opacity-50 transition-opacity">
                                    <Github fill="#FFFFFF" />
                                </a>
                                <a href="https://discord.com/users/500765481788112916/" className="text-3xl text-black hover:opacity-50 transition-opacity">
                                    <Discord />
                                </a>
                                <a href="mailto:contact@nico.engineer" className="hover:opacity-50 transition-opacity">
                                    <Email />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col my-8">
                        <SectionHeader>Featured Projects</SectionHeader>
                        <div className="grid gap-12 lg:grid-cols-2">
                            {FEATURED_PROJECTS.map((project) => (
                                <ProjectCard key={project.title} repoData={stars.find((x) => x.name === project.repoName)} {...project} />
                            ))}
                        </div>
                    </div>

                    <div className="pb-20 flex flex-col overflow-x-auto w-full">
                        <SectionHeader>Competitions</SectionHeader>
                        <div className="md:mx-auto w-full">
                            <AwardTable rowNames={["placement", "college", "competition", "category", "project"]} rowValues={COMPETITIONS} />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <SectionHeader>Articles</SectionHeader>
                        {articles
                            .sort((a, b) => b.publishedAt - a.publishedAt)
                            .map((article) => (
                                <SmallCard key={article.title} {...article} />
                            ))}
                    </div>
                    {/* <div className="md:col-start-5 md:col-end-7 pt-20 md:pt-0 text-white">
                    <h1 className="text-6xl md:text-5xl font-semibold pb-4">Contact Me</h1>
                    <a href="mailto:contact@nico.engineer">
                        <p className="text-lg transition hover:scale-110 hover:text-yellow-200">Email: contact@nico.engineer</p>
                    </a>
                    <a href="https://discord.com/users/500765481788112916/">
                        <p className="text-lg transition hover:scale-110 hover:text-[#5865F2]">Discord: n1co#3727</p>
                    </a>
                </div> */}
                </div>
            </div>
        </>
    );
};

export default Home;

function SectionHeader(props: { children: React.ReactNode }) {
    return <h1 className="text-3xl mt-8 mb-6 md:mt-12 md:mb-10 md:text-4xl font-semibold text-white">{props.children}</h1>;
}

