import React, { useReducer } from 'react';
import CommentContext from './context';
import initialState from './initialstate';
import commentReducer from './reducer';

const CommentProvider = ({ children }) => {
    const [state, dispatch] = useReducer(commentReducer, initialState);

    function addComment(comment) {
        dispatch({
            type: "ADD_COMMENT",
            payload: comment
        });
    }

    function editComment(comment) {
        dispatch({
            type: "EDIT_COMMENT",
            payload: comment
        });
    }

    function removeComment(id) {
        dispatch({
            type: "REMOVE_COMMENT",
            payload: id
        });
    }

    return (
        <CommentContext.Provider
            value={{
                comments: state.comments,
                addComment,
                editComment,
                removeComment
            }}
        >
            {children}
        </CommentContext.Provider>
    );
};

export default CommentProvider;