import sendRequest from './send-request';

const BASE_URL = '/api/posts';

// retrieve all posts
export function getAllPosts() {
    return sendRequest(BASE_URL)
}

export async function createPost(postData) {
    try {
        const apiResponse = await sendRequest('/api/posts/new', 'POST', postData)
        console.log('Post success:', apiResponse)
        return apiResponse
    } catch(error) {
        console.error('Error with API creating post:', error)
        throw error
    }
}