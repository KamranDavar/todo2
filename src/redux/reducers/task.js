import {actionTypes} from '../actionTypes';

const initialState = {
    getSingle: {data: {}, error: null, loading: false},
    getList: {data: [], error: null, loading: false},
    post: {data: null, error: null, loading: false},
    patch: {data: null, error: null, loading: false},
};

export default function Task(state = initialState, action) {
    switch (action.type) {
        case actionTypes.task.getSingle.request:
            return {
                ...state,
                getSingle: {...state.getSingle, loading: true},
            };
        case actionTypes.task.getSingle.success:
            return {
                ...state,
                getSingle: {data: action.payload, error: null, loading: false},
            };
        case actionTypes.task.getSingle.failure:
            return {
                ...state,
                getSingle: {...state.getSingle, error: action.payload, loading: false},
            };

        case actionTypes.task.getAll.request:
            return {
                ...state,
                getList: {...state.getList, loading: true},
            };
        case actionTypes.task.getAll.success:
            return {
                ...state,
                getList: {data: action.payload, error: null, loading: false},
            };
        case actionTypes.task.getAll.failure:
            return {
                ...state,
                getList: {...state.getList, error: action.payload, loading: false},
            };

        case actionTypes.task.create.request:
            return {
                ...state,
                post: {...state.post, loading: true},
            };
        case actionTypes.task.create.success:
            return {
                ...state,
                post: {data: action.payload, error: null, loading: false},
            };
        case actionTypes.task.create.failure:
            return {
                ...state,
                post: {...state.post, error: action.payload, loading: false},
            };

        case actionTypes.task.update.request:
            return {
                ...state,
                patch: {...state.patch, loading: true},
            };
        case actionTypes.task.update.success:
            return {
                ...state,
                patch: {data: action.payload, error: null, loading: false},
            };
        case actionTypes.task.update.failure:
            return {
                ...state,
                patch: {...state.patch, error: action.payload, loading: false},
            };

        default:
            return state;
    }
}
