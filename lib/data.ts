import { AwardTableData } from "../components/Landing/AwardTable";
import { ProjectCardProps } from "../components/Landing/ProjectCard";

export const FEATURED_PROJECTS: ProjectCardProps[] = [
    {
        title: "Guilded.js",
        description: "Tools for creating bots with the guilded.gg bot API. Usable in either JavaScript or TypeScript projects.",
        statistic: "13,000+ downloads",
        repoName: "guilded.js",
        ownerName: "guildedjs",
        tags: ["library", "api", "ws", "react"],
        url: "https://guilded.js.org/",
        langs: ["typescript", "nodejs", "deno"],
    },
    {
        title: "Yoki",
        description: "Previously on Discord, Yoki is the first moderation bot on Guilded. Focused on reliability and customizability.",
        statistic: "1800+ servers • 100k+ members",
        repoLink: "https://github.com/yoki-labs",
        tags: ["bot", "microservice", "automod", "react"],
        url: "https://yoki.gg/",
        langs: ["typescript", "nodejs", "react", "postgres"],
    },
    {
        title: "Evalx.sh",
        description: "Code. Post. Done. You give us your code, we take care of running it. You focus on what matters, building great applications.",
        statistic: "In Development!",
        repoLink: "https://github.com/zaida04/evalx-sh",
        tags: ["api", "react", "postgres", "docker"],
        url: "https://evalx.sh",
        langs: ["typescript", "nodejs", "react", "postgres"],
    },
    {
        title: "Razuberri",
        repoName: "razuberri",
        ownerName: "zaida04",
        description: "Raspberry PI server cluster dashboard and monitor",
        url: "https://razuberri.nico.engineer",
        tags: ["raspberry pi", "typescript", "nodejs", "monitor"],
        langs: ["typescript", "nodejs", "react"],
    },
];

export const COMPETITIONS: AwardTableData[] = [
    {
        organization: "Princeton",
        competition: "HackPrinceton 2023",
        placement: "1st",
        category: "Education",
        project: "EduLive",
    },
    {
        organization: "Wix",
        competition: "Wix Create-A-SaaS 2023",
        placement: "MVP & HM",
        category: "SaaS",
        project: "Evalx",
    },
    {
        organization: "Buffalo State",
        competition: "CS4HS 2017",
        placement: "3rd",
        category: "Game Dev",
        project: "Rocket Blaster",
    },
    {
        organization: "Buffalo State",
        competition: "CS4HS 2016",
        placement: "2rd",
        category: "Web Design",
        project: "GameShare",
    },
];
