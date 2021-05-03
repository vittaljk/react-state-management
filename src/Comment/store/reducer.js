function commentReducer(state, action) {
    switch (action.type) {
        case "ADD_COMMENT":
            return {
                ...state,
                comments: [...state.comments, action.payload],
            };

        case "EDIT_COMMENT":
            const updatedComment = action.payload;

            const updatedComments = state.comments.map((comment) => {
                if (comment.id === updatedComment.id) {
                    return updatedComment;
                }
                return comment;
            });

            return {
                ...state,
                comments: updatedComments,
            };

        case "REMOVE_COMMENT":
            return {
                ...state,
                comments: state.comments.filter(
                    (comment) => comment.id !== action.payload
                ),
            };

        default:
            return state;
    }
};

export default commentReducer;