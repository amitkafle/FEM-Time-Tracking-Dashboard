async function daily() {
    const response = await fetch("./data.json");
    const data = await response.json();

    const dailyData = data.map(item => {
        return {
            title: item.title,
            current: item.timeframes.daily.current,
            previous: item.timeframes.daily.previous,
            previousTime: "Yesterday"
        }
    })

    return dailyData;
}

async function weekly() {
    const response = await fetch("./data.json");
    const data = await response.json();

    const weeklyData = data.map(item => {
        return {
            title: item.title,
            current: item.timeframes.weekly.current,
            previous: item.timeframes.weekly.previous,
            previousTime: "Last Week"
        }
    })

    return weeklyData;
}


async function monthly() {
    const response = await fetch("./data.json");
    const data = await response.json();

    const monthlyData = data.map(item => {
        return {
            title: item.title,
            current: item.timeframes.monthly.current,
            previous: item.timeframes.monthly.previous,
            previousTime: "Last Month"
        }
    })

    return monthlyData;
}
