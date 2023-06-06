import { readFileSync } from "fs";
import { readdir,readFile } from "fs/promises";
import matter from "gray-matter";
import { join } from "path";
import readingTime from "reading-time";
const articlesPath = join(process.cwd(), "blog");

export type ArticleMetaData = { title: string; publishedAt: number; description: string; tags: string[] };
export interface ArticleData extends ArticleMetaData {
    slug: string;
    readingTime: string;
}

export async function getAllSlugs() {
    const dirs = await readdir(articlesPath, { withFileTypes: true });
    const slugs = dirs.filter((dirent) => dirent.isDirectory()).map((dirent) => dirent.name);
    return slugs;
}

export async function getAllArticles() {
    const dirs = await readdir(articlesPath, { withFileTypes: true });
    const dirNames = dirs.filter((dirent) => dirent.isDirectory()).map((dirent) => dirent.name);

    const articles = dirNames.reduce((allArticles: ArticleData[], currentDirectory) => {
        const articleFile = readFileSync(join(articlesPath, currentDirectory, "index.mdx"), "utf-8");
        const data = matter(articleFile).data as ArticleMetaData;

        return [
            {
                slug: currentDirectory,
                readingTime: readingTime(articleFile, { wordsPerMinute: 150 }).text,
                ...data,
            },
            ...allArticles,
        ];
    }, []);

    return articles;
}

export async function getArticleFromSlug(slug: string) {
    const articleDir = join(articlesPath, slug, `index.mdx`);
    const source = await readFile(articleDir, "utf-8");
    const { content, data } = matter(source);
    return {
        content,
        frontmatter: {
            slug,
            excerpt: data.excerpt,
            title: data.title,
            publishedAt: data.publishedAt,
            readingTime: readingTime(source).text,
            ...data,
        },
    };
}
