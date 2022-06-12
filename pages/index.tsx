import type { GetStaticProps, NextPage } from "next";
import JobTitle from "../components/JobTitle";
import Image from "next/image";
import { getAnimeCount } from "../lib/anilist";
import { getTimeCoding } from "../lib/wakatime";
import Statistic from "../components/Statistic";
import Github from "../components/Icons/Github";
import Discord from "../components/Icons/Discord";

export const getStaticProps: GetStaticProps = async (ctx) => {
    const animeCount = await getAnimeCount("nico03727").catch(() => 0);
    const timeCoding = await getTimeCoding().catch(() => "");

    return {
        props: {
            animeCount,
            timeCoding,
        },
        revalidate: 1000,
    };
};

type Props = {
    animeCount: number;
    timeCoding: string;
};

const Home: NextPage<Props> = ({ animeCount, timeCoding }) => {
    return (
        <div className="h-full w-full md:flex items-center">
            <div className="md:flex md:pl-40 md:pt-32 px-10 py-20">
                <div className="text-xl leading-loose text-gray-400 max-w-[45rem] space-y-6">
                    <h1 className="md:text-7xl text-3xl font-black text-white pb-4">Hello, I&apos;m Nico.</h1>
                    <p>
                        I&apos;m a passionate full-stack developer who loves building applications used by millions around the world using{" "}
                        <a className="text-green-600 hover:underline font-semibold" href="https://nodejs.org/en/">
                            Node.js
                        </a>
                        ,{" "}
                        <a className="text-yellow-300  hover:underline font-semibold" href="https://www.javascript.com/">
                            JavaScript
                        </a>
                        ,{" "}
                        <a className="text-blue-700  hover:underline font-semibold" href="https://www.typescriptlang.org/">
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
                        <JobTitle url="https://discord.gg/ccx">Lead Content Moderator at Adobe</JobTitle>.
                    </p>
                    <p>
                        I&apos;ve watched <Statistic>{animeCount}</Statistic> animes and spent <Statistic>{timeCoding}</Statistic> coding this year.
                    </p>
                    <div className="flex space-x-4">
                        <a href="https://github.com/zaida04" className="text-4xl">
                            <Github />
                        </a>
                        <a href="https://discord.com/users/500765481788112916/" className="text-4xl text-black">
                            <Discord />
                        </a>
                    </div>
                </div>
            </div>
            <Image src="/my_face.png" width="450" height="450" alt="My face" />
        </div>
    );
};

export default Home;
