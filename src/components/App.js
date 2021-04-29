import React from 'react';
import PostList from './PostList';

const App = () => {
    return(
        <div>
            <h1 className="ui center aligned header" style={{margin: "10px"}}>Blog</h1>
            <hr></hr>
            <h3 className="ui center aligned header" style={{margin: "10px", fontStyle: "italic"}}>Made using React, Redux, React-Redux, Redux-Thunk</h3>
            <div className="ui container"><PostList /></div>
        </div>
    );
};

export default App;