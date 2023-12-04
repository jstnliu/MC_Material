import axios from "axios"

let BASE_URL='https://api.jikan.moe/v4'

export default async function getCharacter(id) {
    const characterInfo = await axios(`${BASE_URL}/characters/${id}/full`)
    // using Axios, 1st 'data' is Axios object, 2nd 'data' is API object
    // console.log(characterInfo.data.data)
    console.log(characterInfo.data.data.name)
    console.log(characterInfo.data.data.images.jpg.image_url)
    console.log(characterInfo.data.data.anime[0].anime.title)
    console.log(characterInfo.data.data.about)
    // forEach to parse nickname strings
    console.log(characterInfo.data.data.nicknames)
    return characterInfo.data.data
}