import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import Discord from "../components/Icons/Discord";
import Email from "../components/Icons/Email";
import Github from "../components/Icons/Github";
import AwardTable from "../components/Landing/AwardTable";
import SmallCard from "../components/Landing/BlogPost";
import ExternalLinks from "../components/Landing/ExternalLinks";
import ProjectCard from "../components/Landing/ProjectCard";
import PageTransition from "../components/Layouts/PageTransition";
import Statistic from "../components/Statistic";
import { getAnimeCount } from "../lib/anilist";
import { ArticleData, getAllArticles } from "../lib/articles";
import { COMPETITIONS, FEATURED_PROJECTS } from "../lib/data";
import { githubFetch, IFetchRepo } from "../lib/github";
import { getTimeCoding } from "../lib/wakatime";

export const getStaticProps: GetStaticProps = async () => {
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

const ogDescription =
    "I'm a passionate full-stack developer who loves building applications used by millions around the world using Node.js, JavaScript, TypeScript, and Python.";

const Home: NextPage<Props> = ({ animeCount, timeCoding, articles, stars }) => {
    return (
        <>
            <Head>
                <title>Nico&apos;s site</title>
                <meta name="description" content={ogDescription} />
                <meta property="og:title" content="Nico's site" />
                <meta property="og:site_name" content="nico.engineer" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/my_face.png" />
                <meta property="og:description" content={ogDescription} />
            </Head>
            <PageTransition>
                <div className="md:flex">
                    <div className="text-lg leading-loose text-gray-400 space-y-6">
                        <h1 className="md:text-6xl text-4xl font-black text-white md:pb-4">Hello, I&apos;m Zaid.</h1>
                        <p>
                            I build full-stack stuff™ using{" "}
                            <ExternalLinks variant="node" />, <ExternalLinks variant="javascript" />, <ExternalLinks variant="typescript" />, and{" "}
                            <ExternalLinks variant="python" />. I&apos;m familiar with databases like <ExternalLinks variant="pg" /> and{" "}
                            <ExternalLinks variant="mongo" />.
                        </p>
                        <p>
                            I&apos;m currently really interested in learning lower-level languages such as <ExternalLinks variant="rust" /> and{" "}
                            <ExternalLinks variant="elixir" />.
                        </p>
                        <p>
                            I&apos;m the founder of <ExternalLinks variant="yoki" />. On the side, I am a Community Manager for{" "}
                            <ExternalLinks variant="adobe" />.<br />
                            Previously a Software Engineer at <ExternalLinks variant="fiveable" />
                        </p>
                        <p>
                            I&apos;ve watched <Statistic>{animeCount}</Statistic> animes and spent <Statistic>{timeCoding}</Statistic> coding this year.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://github.com/zaida04" className="text-3xl hover:opacity-50 transition-opacity" aria-label="github">
                                <Github fill="#FFFFFF" />
                            </a>
                            <a
                                href="https://discord.com/users/500765481788112916/"
                                className="text-3xl text-black hover:opacity-50 transition-opacity"
                                aria-label="discord"
                            >
                                <Discord />
                            </a>
                            <a href="mailto:contact@nico.engineer" className="hover:opacity-50 transition-opacity" aria-label="email">
                                <Email />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col my-8" id="projects">
                    <SectionHeader>Featured Projects</SectionHeader>
                    <div className="grid gap-12 lg:grid-cols-2">
                        {FEATURED_PROJECTS.map((project) => (
                            <ProjectCard key={project.title} repoData={stars.find((x) => x.name === project.repoName)} {...project} />
                        ))}
                    </div>
                </div>

                <div className="pb-20 flex flex-col overflow-x-auto w-full" id="competitions">
                    <SectionHeader>Awards</SectionHeader>
                    <div className="md:mx-auto w-full">
                        <AwardTable rowNames={["placement", "competition", "project", "organization", "category"]} rowValues={COMPETITIONS} />
                    </div>
                </div>

                <div className="flex flex-col" id="blog">
                    <SectionHeader>Blog</SectionHeader>
                    {articles
                        .sort((a, b) => b.publishedAt - a.publishedAt)
                        .map((article) => (
                            <SmallCard key={article.title} {...article} />
                        ))}
                </div>
            </PageTransition>
        </>
    );
};

export default Home;

function SectionHeader(props: { children: React.ReactNode }) {
    return <h1 className="text-3xl mt-8 mb-6 md:mt-12 md:mb-10 md:text-4xl font-semibold text-white">{props.children}</h1>;
}
