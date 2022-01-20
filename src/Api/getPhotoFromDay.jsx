export async function getPhotoFromDay(date) {
    const API_url = 'https://api.nasa.gov/planetary/apod?api_key=wsNFqDfwa7PcCi6rrlERLlyeTtxVSB2iUC71bWXL&'+date;
    const data_res = await fetch(API_url);
    return data_res.json();
}