export function removePost(index) { // which index to remove? 
    return {
        type: 'REMOVE_POST',
        index
    }
}

export function addPost(post) {
    return {
        type: 'ADD_POST', 
        post
    }
}

export function addComment(comment, postId) {
    return {
        type: 'ADD_COMMENT', 
        comment,
        postId
    }

}