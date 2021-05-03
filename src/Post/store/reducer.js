function postReducer(state, action) {
    switch (action.type) {
        case "ADD_POST":
            return {
                ...state,
                posts: [...state.posts, action.payload],
            };

        case "EDIT_POST":
            const updatedPost = action.payload;

            const updatedPosts = state.posts.map((post) => {
                if (post.id === updatedPost.id) {
                    return updatedPost;
                }
                return post;
            });

            return {
                ...state,
                posts: updatedPosts,
            };

        case "REMOVE_POST":
            return {
                ...state,
                posts: state.posts.filter(
                    (post) => post.id !== action.payload
                ),
            };

        default:
            return state;
    }
};

export default postReducer;