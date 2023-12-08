import axios from "axios"

const BASE_URL='https://api.jikan.moe/v4'
const queryParams = { limit: '5' }

// retrieve anime info
export async function getAnime(mal_id) {
    try {
        // using Axios, 1st 'data' is Axios object, 2nd 'data' is API object
        // console.log(animeInfo.data.data)
        const animeInfo = await axios(`${BASE_URL}/anime/${mal_id}/full`)
        if (animeInfo.data) {
            const anime = animeInfo.data.data
            const animeData = {
                title_english: anime.title_english,
                title_japanese: anime.title_japanese,
                images: anime.images,
                synopsis: anime.synopsis,
                episodes: anime.episodes,
                mal_id: anime.mal_id
            };
            // console.log(animeData)
            return animeData
        }
    } catch(error) {
        console.log('Ya done Goofed', error)
    }
}

// search for anime 
export async function searchAnimeResults(searchedAnime) {
    try {
        const animeSearch = await axios.get(`${BASE_URL}/anime?q=${searchedAnime}`, {
            params: queryParams
        })
            // console.log(searchedAnime)
            console.log(animeSearch.data.data)
            return animeSearch.data.data
        } catch(error) {
        console.error('Ya done Goofed Searchin', error);
        throw error
    }
}
