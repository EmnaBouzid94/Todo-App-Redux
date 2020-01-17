import InputReducer from './Reducers/inputReducer'
import TaskReducer from './Reducers/taskReducer'


import {createStore, combineReducers} from 'redux'

const store=createStore(combineReducers({
    input:InputReducer,
    list:TaskReducer
}))

export default store;