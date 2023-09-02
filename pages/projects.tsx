import { GetStaticProps, NextPage } from "next";

import ExternalLinks from "../components/Landing/ExternalLinks";
import ProjectCard from "../components/Landing/ProjectCard";
import { SectionHeader } from "../components/Landing/Sections";
import PageTransition from "../components/Layouts/PageTransition";
import { FEATURED_PROJECTS } from "../lib/data";
import { githubFetch, IFetchRepo } from "../lib/github";

export const getStaticProps: GetStaticProps = async () => {
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
            stars,
        },
        revalidate: 1000,
    };
};

const ProjectsPage: NextPage<{ stars: IFetchRepo[] }> = ({ stars }) => {
    return (
        <PageTransition>
        <div className="flex flex-col" id="projects">
            <SectionHeader>Featured Projects</SectionHeader>
            <div className="grid gap-12 lg:grid-cols-2">
                {FEATURED_PROJECTS.map((project) => (
                    <ProjectCard key={project.title} repoData={stars.find((x) => x.name === project.repoName)} {...project} />
                ))}
            </div>

            <p className="text-white text-2xl my-8">See the full list of my projects on my <ExternalLinks variant="github" /></p>
        </div>
        </PageTransition>
    );
};

export default ProjectsPage;
