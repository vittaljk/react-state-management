function userReducer(state, action) {
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                users: [...state.users, action.payload],
            };

        case "EDIT_USER": {
            const updatedUser = action.payload;

            const updatedUsers = state.users.map((user) => {
                if (user.id === updatedUser.id) {
                    return updatedUser;
                }
                return user;
            });

            return {
                ...state,
                users: updatedUsers,
            };
        }

        case "REMOVE_USER":
            return {
                ...state,
                users: state.users.filter(
                    (user) => user.id !== action.payload
                ),
            };

        default:
            return state;
    }
}

export default userReducer;