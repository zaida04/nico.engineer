export const getTimeCoding = async () => {
    const req = await fetch(`https://wakatime.com/api/v1/users/current/stats/last_year?api_key=${process.env.WAKATIME_API_KEY}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await req.json();
    const total = data?.data?.human_readable_total;
    return total;
}