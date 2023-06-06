export const githubFetch = <T>(path: string) =>
    fetch("https://api.github.com" + path, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: process.env.GITHUB_KEY ? `token ${process.env.GITHUB_KEY}` : "",
        },
    }).then((x) => x.json() as Promise<T>);

export interface IFetchRepo {
    id: string;
    name: string;
    full_name: string;
    private: boolean;
    description: string;
    stargazers_count: number;
    topics: string[];
    language: string;
}
