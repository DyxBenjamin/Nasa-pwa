export async function getPhotoToday() {
    const API_url = 'https://api.nasa.gov/planetary/apod?api_key=wsNFqDfwa7PcCi6rrlERLlyeTtxVSB2iUC71bWXL';
    const data_res = await fetch(API_url);
    return data_res.json();
}