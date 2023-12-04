import sendRequest from './send-request';

const BASE_URL = '/api/posts';

// retrieve all posts
export function getAllPosts() {
    return sendRequest(BASE_URL)
}

// add post to feed? 
export function addPostToFeed(postId) {
    return sendRequest(`${BASE_URL}/feed/posts/${postId}`, 'POST')
}