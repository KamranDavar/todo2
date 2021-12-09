import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './redux/reducers/task'
// import filtersReducer from './features/filters/filtersSlice'

const store = configureStore({
    reducer: {
        task: taskReducer,
        devTools: true,
    }
})

export default store