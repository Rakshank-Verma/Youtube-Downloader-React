const fetch = require('node-fetch');

async function getDownloadLinks(videoId) {
    const url = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=${videoId}`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': 'ytstream-download-youtube-videos.p.rapidapi.com'
        }
    };

    const result = await fetch(url, options);
    const response = await result.json();
    
    return response;
    
}

export default getDownloadLinks;