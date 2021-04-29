import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

/** calling an action creator inside an action creator 
 * here we are going to use fetchPosts() to get all the posts
 * then we will use a for each to loop through the posts are return each user id
 * we will use lodash _.uniq to check for unique user ids
 * and _.chain for a little refactor
*/
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
// dispatching the fetchPost() action creator to get the posts.
    await dispatch(fetchPosts());

    // we are going to use _.chain to refactor the bellow.
    // const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // userIds.forEach(id => dispatch(fetchUser(id)));

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
         // now we pass in the value() to execute the chain
        .value()
};

//fetching posts using redux thunk and sending a get request to the api
export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data })
};

//fetching a user using redux thunk and sending a get request to the api
// we will be passing in the user id to the action creator
export const fetchUser = (id) => async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    
    dispatch({ type: 'FETCH_USER', payload: response.data });
};

/* this was a _.memoize solution to stop multiple requests 
however we are going to use the fetchPostsAndUsers function instead*/
// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: 'FETCH_USER', payload: response.data });
// });


