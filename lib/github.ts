export const githubFetch = <T>(path: string) =>
  fetch("https://api.github.com" + path, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then((x) => x.json())

export interface IFetchRepo {
  id: string;
  name: string;
  full_name: string;
  private: boolean;
  description: string;
  stargazers_count: number;
  language: string;
}