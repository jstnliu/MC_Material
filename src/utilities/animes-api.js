import sendRequest from './send-request';

const BASE_URL = '/api/animes';

//retireve all animes within posts
export function getAllAnimes() {
    return sendRequest(BASE_URL)
}

// create new anime within a newly created post
export function createAnime(animeData) {
    const response = sendRequest(`${BASE_URL}/new`, 'POST', animeData)
    console.log('Anime success:', response)
    return response
}

// retrive anime info with a specific post
export function viewAnime(mal_id) {
    const response = sendRequest(`${BASE_URL}/${mal_id}`)
    console.log('Anime success grab:', response)
    return response
}

// find anime within a post for deletion
export function deleteAnime(mal_id) {
    const response = sendRequest(`${BASE_URL}/${mal_id}`, 'DELETE')
    console.log('Anime deletion fx from front end', response)
    return response
}
