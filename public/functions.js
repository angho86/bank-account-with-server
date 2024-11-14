export function time(){
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    const hour = date.getHours();
    const minutes = date.getMinutes();

    const time = `${month}m. - ${day}d. - ${hour}h - ${minutes}m`;

    return time;
}

