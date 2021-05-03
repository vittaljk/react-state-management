import React, { useReducer } from 'react';
import PostContext from './context';
import initialState from './initialstate';
import postReducer from './reducer';

const PostProvider = ({ children }) => {
    const [state, dispatch] = useReducer(postReducer, initialState);

    function addPost(post) {
        dispatch({
            type: "ADD_POST",
            payload: post
        });
    }

    function editPost(post) {
        dispatch({
            type: "EDIT_POST",
            payload: post
        });
    }

    function removePost(id) {
        dispatch({
            type: "REMOVE_POST",
            payload: id
        });
    }

    return (
        <PostContext.Provider
            value={{
                posts: state.posts,
                addPost,
                editPost,
                removePost
            }}
        >
            {children}
        </PostContext.Provider>
    );
};

export default PostProvider;