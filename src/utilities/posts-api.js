import sendRequest from './send-request';

const BASE_URL = '/api/posts';

// retrieve all posts
export function getAllPosts() {
    return sendRequest(BASE_URL)
}

export function createPost(postData) {
        const apiResponse = sendRequest(`${BASE_URL}/new`, 'POST', postData)
        console.log('Post success:', apiResponse)
        return apiResponse
}