# Blog - React, Redux, React-Redux, Redux-Thunk
👉[Demo](https://react-youtube-videos.herokuapp.com/)👈

## What is this project? 🤔
* A project using the json placeholder API (http://jsonplaceholder.typicode.com) to create a blog list, I used redux-thunk that allowed me to use my action creators to get the data from json placeholder to populate the state (redux store).

## What I learnt? 🚀
1. json placeholder API - connecting the json placeholder API through axios (sending CREATE/GET requests).
2. Rendering a list of data from the redux store/state - I used the mapStateToProps function which dispatches the data to react as props. Thus allowing react to map over the state by using props.
3. Redux-Thunk - I used this middleware to make async requests (using axios) inside the redux actions to get data from the json placeholder API.
4. Safe state updates in Reducers - avoid using bad syntax such as `state.push('cars')` and adopt using good syntax such as `[...state, 'hi']`.
5. Solving overfetching data requests using lodash - I used the following lodash functions: `_.chain`, `_.uniq`, `_.map` & `_.memoize` to solve the issue of sending multiple duplicated requests to the API.

## Technologies used: 🖥
1. React
2. Redux
3. React-Redux
4. Redux-Thunk
5. json placeholder API
6. Axios
7. lodash
8. Semantic UI - for CSS
