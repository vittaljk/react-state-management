import * as ActionTypes from './types';

function employeeReducer(state, action) {
    switch (action.type) {
        case ActionTypes.GET_EMPLOYEES: {
            return {
                ...state,
                loading: true
            }
        }

        case ActionTypes.GET_EMPLOYEES_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: action.payload
            }
        }

        case ActionTypes.GET_EMPLOYEES_ERROR: {
            return {
                ...state,
                loading: false,
                loaded: true,
                error: action.payload
            }
        }

        default:
            return state;
    }
};

export default employeeReducer;