let today = new Date();
today.setDate(today.getDate());
let sevenDaysBefore = new Date();
sevenDaysBefore.setDate(sevenDaysBefore.getDate()-6);

function formatDate(date){
    return date.getFullYear()+ "-" + (date.getMonth() + 1)+ "-" +date.getDate();
}

today = (formatDate(today))
sevenDaysBefore = (formatDate(sevenDaysBefore))


export async function getWeekPhotos() {
    const API_url = 'https://api.nasa.gov/planetary/apod?api_key=wsNFqDfwa7PcCi6rrlERLlyeTtxVSB2iUC71bWXL&start_date='+ sevenDaysBefore +'&end_date='+ today;
    const data_res = await fetch(API_url);
    return data_res.json();
}