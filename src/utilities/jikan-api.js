import axios from "axios"
import axiosRequest from "./axios-request"

let BASE_URL='https://api.jikan.moe/v4'

// retrieve anime info
export async function getAnime(id) {
    try {
        // using Axios, 1st 'data' is Axios object, 2nd 'data' is API object
        // console.log(animeInfo.data.data)
        const animeInfo = await axios(`${BASE_URL}/anime/${id}/full`)
        if (animeInfo.data) {
            const anime = animeInfo.data
            const animeData = {
                title_english: anime.title_english,
                title_japanese: anime.title_japanese,
                // images: anime.images.jpg.image_url,
                synopsis: anime.synopsis,
                episodes: anime.episodes,
                mal_id: anime.mal_id
            };
            console.log(animeData)
            return animeData
        }
    } catch(error) {
        console.log('Ya done Goofed', error)
    }
    // console.log(animeInfo.data.data.title_english)
    // console.log(animeInfo.data.data.title_japanese)
    // console.log(animeInfo.data.data.images.jpg.image_url)
    // console.log(animeInfo.data.data.episodes)
    // console.log(animeInfo.data.data.aired.string)
    // console.log(animeInfo.data.data.aired.synopsis)
    // return animeInfo.data.data
}

// search for anime 
export async function searchAnimeResults(search) {
    try {
        const animeSearch = await axios(`${BASE_URL}/anime?q=${search}`)
        if (animeSearch.data) {
            const anime = animeSearch.data
            const animeResultData = {
                title_english: anime.title_english,
                title_japanese: anime.title_japanese,
                images: anime.images.jpg.image_url,
                synopsis: anime.synopsis,
                episodes: anime.episodes,
                mal_id: anime.mal_id
            };
            console.log(animeResultData)
            return animeResultData
        }
    } catch(error) {
        console.error('Ya done Goofed Searchin', error);
        throw error
    }
}
