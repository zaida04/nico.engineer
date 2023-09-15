export const getTimeCoding = () =>
    fetch(`https://wakatime.com/api/v1/users/current/summaries?start=2023-01-01&api_key=${process.env.WAKATIME_API_KEY}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((x) => x.json())
        .then((data) => data?.data?.[0]?.grand_total?.digital);
