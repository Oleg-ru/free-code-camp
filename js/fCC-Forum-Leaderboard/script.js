function timeAgo(dateStartIn) {
    
    const dateEnd = Date.now();
    const dateStart = new Date(dateStartIn).getTime()
    const timeArr = ['minute', 'hour', 'day']

    function msTo(ms, to) {
        if (to === "minute")
            return ms / (60 * 1000);
        if (to === "hour")
            return ms / (60 * 60 * 1000);
        if (to === "day")
            return ms / (24 * 60 * 60 * 1000);
        return -1;
    }

    for (let i = 0; i < timeArr.length; i++) {
        const time = Math.floor(msTo(dateEnd - dateStart, timeArr[i]));
        let charTime = '';
        console.log(time)

        if (time < 60) {
            charTime = 'm'
        }
        else if(time < 24) {
            charTime = 'h'
        }
        else {
            charTime = 'd'
        }
        return `${time}${charTime} ago`;
    }

    //console.log('hour', Math.floor(msTo(dateEnd - dateStart, 'hour')))
}

console.log(timeAgo('2025-10-24T16:00:00'));