export const actionTypes = {
    task: {
        getAll: {
            request: 'GET_TASKS_REQUEST',
            success: 'GET_TASKS_SUCCESS',
            failure: 'GET_TASKS_FAILURE'
        },
        getSingle: {
            request: 'GET_TASK_REQUEST',
            success: 'GET_TASK_SUCCESS',
            failure: 'GET_TASK_FAILURE'
        },
        create: {
            request: 'POST_TASK_REQUEST',
            success: 'POST_TASK_SUCCESS',
            failure: 'POST_TASK_FAILURE'
        },
        update: {
            request: 'PATCH_TASK_REQUEST',
            success: 'PATCH_TASK_SUCCESS',
            failure: 'PATCH_TASK_FAILURE'
        },
    }
}