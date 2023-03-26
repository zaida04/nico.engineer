import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ArticleData, getAllSlugs, getArticleFromSlug } from "../../lib/articles";
import MDXComponents from "../../components/MDXComponents";
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
                <meta name="description" content={metadata.frontmatter.description} />
                <meta property="og:title" content={metadata.frontmatter.title} />
                <meta property="og:site_name" content="nico.engineer" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://nico.engineer/blog/${metadata.frontmatter.slug}`} />
                <meta property="og:image" content="https://nico.engineer/my_face.png" />
                <meta property="og:description" content={metadata.frontmatter.description} />
                <meta name="theme-color" content="#0f1117" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css" />
            </Head>
            <div className="pt-20">
                <div className="pb-20">
                    <h1 className="mx-auto text-[3rem] px-4 text-white text-center font-bold max-w-[15em] pb-4">{metadata.frontmatter.title}</h1>
                    <h3 className="mx-auto text-2xl px-2 text-gray-500 text-center max-w-[30em]">{metadata.frontmatter.description}</h3>
                </div>
                <div className="mx-auto w-full text-2xl max-w-[60rem] text-white py-8 px-4">
                    <div>
                        <MDXRemote {...source} components={MDXComponents} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogPage;
