const express = require("express");

const app = express();

app.listen(3000,()=>{
    console.log("Server Starterd at PORT: 3000")
})


async function getMedia(url){
    try {
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWY0MDYxYzI4NGUzOTJmOGM1YTYwZTNjZGI5M2UxYiIsIm5iZiI6MTc1ODIxNjA0Ny4wODUsInN1YiI6IjY4Y2MzZjZmMjg4YjhkZDFhYjE0OTM1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0BDKB-SUexlkxtsMmr2okU8i788Y_7DTVILsDhIB034'
        }
        };
    
        const response = await fetch(url, options);
        return response.json();
    } catch (error) {
        return error;
    }
}

async function getMoviesNowPlaying(req,res) {
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
    const response = await getMedia(url);
    res.status(200).json({
        message:"Now Playing Movies",
        status:"success",
        nowPlaying:response
    })
}

app.get("/api/movies/nowplaying",getMoviesNowPlaying)