import { fetchPostsStarts, FetchPostsSuccess, FetchPostsError } from '../actions/posts';

const fetchPosts = text => dispatch => {

    dispatch(fetchPostsStarts());

    let url = "https://jsonplaceholder.typicode.com/posts";
    if (text !== undefined) {
        url += `?q=${text}`;
    }

    fetch(url)
        .then(res => res.json())
        .then(result => dispatch(FetchPostsSuccess(result)))
        .catch(() => dispatch(FetchPostsError()));
}

export default fetchPosts;