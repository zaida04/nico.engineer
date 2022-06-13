import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ArticleData, getAllSlugs, getArticleFromSlug } from "../../lib/articles";
import MDXComponents from "../../components/MDXComponents";
import Image from "next/image";
import Head from "next/head";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeHighlight from "rehype-highlight";

export const getStaticProps: GetStaticProps = async (ctx) => {
    const article = await getArticleFromSlug(ctx.params?.slug as string);
    delete article.frontmatter.excerpt;

    const mdxSource = await serialize(article.content, {
        mdxOptions: {
            rehypePlugins: [
                rehypeSlug,
                [
                    rehypeAutolinkHeadings,
                    {
                        properties: { className: ["anchor"] },
                    },
                    { behaviour: "wrap" },
                ],
                rehypeHighlight,
                rehypeCodeTitles,
            ],
        },
    });
    return {
        props: {
            source: mdxSource,
            metadata: article,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const allSlugs = await getAllSlugs();
    return {
        paths: allSlugs.map((slug) => ({ params: { slug } })),
        fallback: false,
    };
};

type Props = {
    source: any;
    metadata: {
        content: string;
        frontmatter: ArticleData;
    };
};

const BlogPage: NextPage<Props> = ({ metadata, source }) => {
    return (
        <>
            <Head>
                <title>{metadata.frontmatter.title} | Nico&apos;s Blog</title>
            </Head>
            <div className="pt-20">
                <div className="pb-20">
                    <h1 className="mx-auto text-6xl text-white text-center font-bold max-w-[15em] pb-4">{metadata.frontmatter.title}</h1>
                    <h3 className="mx-auto text-2xl text-gray-500 text-center max-w-[30em]">{metadata.frontmatter.description}</h3>
                </div>
                <div className="mx-auto w-full max-w-4xl text-white text-2xl py-8 px-4 flex">
                    <div className="indent-8">
                        <MDXRemote {...source} components={MDXComponents} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogPage;
