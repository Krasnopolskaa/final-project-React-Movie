const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'b9453a5d4bc4d4b930624c6d809fca9c',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;