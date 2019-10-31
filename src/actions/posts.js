export const INPUT_VALUE_CHANGE_POSTS = "INPUT_VALUE_CHANGE_POSTS";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR";
export const FETCH_POSTS_STARTS = "FETCH_POSTS_STARTS";

export const inputValueChange = (value) => ({
    type: INPUT_VALUE_CHANGE_POSTS,
    payload: {
        value,
    }
})
 

export const fetchPostsStarts = () => ({
    type: FETCH_POSTS_STARTS,
});

export const FetchPostsSuccess = posts => ({
    type: FETCH_POSTS_SUCCESS,
    payload: {
        posts
    }
});

export const FetchPostsError = () => ({
    type: FETCH_POSTS_ERROR,
});