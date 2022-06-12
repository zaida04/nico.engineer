export const getTimeCoding = () =>
    fetch(`https://wakatime.com/api/v1/users/current/all_time_since_today?api_key=${process.env.WAKATIME_API_KEY}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((x) => x.json())
        .then((data) => data?.data?.text);
