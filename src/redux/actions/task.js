import {actionTypes} from '../actionTypes';
import TaskService from '../../services/task.service';
import {notification} from 'antd';

export function getTasksLoading() {
    return {
        type: actionTypes.task.getAll.request,
    };
}

export function getTasksSuccess(data) {
    return {
        type: actionTypes.task.getAll.success,
        payload: data,
    };
}

export function getTasksFail(error) {
    return {
        type: actionTypes.task.getAll.failure,
        payload: error,
    };
}

export const getTasks = () => async (dispatch) => {
    dispatch(getTasksLoading());
    try {
        const response = await TaskService.getAll()
        dispatch(getTasksSuccess(response.data));
    } catch (error) {
        dispatch(getTasksFail(error));
    }
};

export function getTaskLoading() {
    return {
        type: actionTypes.task.getSingle.request,
    };
}

export function getTaskSuccess(data) {
    return {
        type: actionTypes.task.getSingle.success,
        payload: data,
    };
}

export function getTaskFail(error) {
    return {
        type: actionTypes.task.getSingle.failure,
        payload: error,
    };
}

export const getTask = (id) => async (dispatch) => {
    dispatch(getTaskLoading());
    try {
        const response = await TaskService.get(id)
        dispatch(getTaskSuccess(response.data));
    } catch (error) {
        console.log(error);
        dispatch(getTaskFail(error));

    }
};

export function createTaskLoading() {
    return {
        type: actionTypes.task.create.request,
    };
}

export function createTaskSuccess(data) {
    return {
        type: actionTypes.task.create.success,
        payload: data,
    };
}

export function createTaskFail(error) {
    return {
        type: actionTypes.task.create.failure,
        payload: error,
    };
}

export const createTask = (data = {}) => async (dispatch) => {
    dispatch(createTaskLoading());
    try {
        const response = await TaskService.create(data);
        dispatch(createTaskSuccess(response.data));
        dispatch(getTasks())//refresh list after submit form
        notification.success({
            message: 'Task Created',
        });
    } catch (error) {
        console.log(error);
        dispatch(createTaskFail(error));
    }
};

export function editTaskLoading() {
    return {
        type: actionTypes.task.update.request,
    };
}

export function editTaskSuccess(data) {
    return {
        type: actionTypes.task.update.success,
        payload: data,
    };
}

export function editTaskFail(error) {
    return {
        type: actionTypes.task.update.failure,
        payload: error,
    };
}

export const editTask = (data, id) => async (dispatch) => {
    dispatch(editTaskLoading());
    try {
        const response = await TaskService.update(id, data)
        dispatch(editTaskSuccess(response.data));
        dispatch(getTasks())//refresh list after submit form
        notification.success({
            message: 'Task Edited',
        });
    } catch (error) {
        console.log(error);
        dispatch(editTaskFail(error));
    }
};
