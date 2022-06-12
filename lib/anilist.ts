export const getAnimeCount = (id: string) =>
    fetch("https://graphql.anilist.co/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `
                query UserQuery {
                    user: User(name: "${id}") {
                        statistics {
                            anime {
                                count
                            }
                        }
                    }
                }
            `,
        }),
    })
        .then((x) => x.json())
        .then((data) => data?.data?.user?.statistics?.anime?.count);
