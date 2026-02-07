export type DateTime = {
    day: number, 
    month: number,
    year: number,
    hour: number,
    minute: number
}

export function formatToString(dateTime: DateTime){
    let stdHour = dateTime.hour % 12;
    if(stdHour == 0) stdHour = 12;
    const ampm = dateTime.hour < 12 ? 'AM' : 'PM';
    
    const pad = (n: number) => n.toString().padStart(2, '0');
    
    return `${stdHour}:${dateTime.minute} ${ampm} ${pad(dateTime.day)}/${pad(dateTime.month)}/${pad(dateTime.year)}`;
}