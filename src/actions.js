import axios from 'axios'

export const loadDataRequest = () => {
    return {
        type: 'LOAD_DATA_REQUEST'
    }
}
export const loadDataSuccess = (data) => {
    return {
        type: 'LOAD_DATA_SUCCESS',
        data: data.data
    }
}
export const loadDataError = (data) => {
    return {
        type: 'LOAD_DATA_ERROR',
        data: data.data
    }
}
export const loadData = () => {
    return dispatch => {
        dispatch(loadDataRequest())
        axios
            .get('http://httpbin.org/ip')
            .then((data)=> dispatch(loadDataSuccess(data)))
            .catch(()=> dispatch(loadDataError()))
    }
}

export const loadUARequest = () => {
    return {
        type: 'LOAD_UA_REQUEST'
    }
}
export const loadUASuccess = (data) => {
    return {
        type: 'LOAD_UA_SUCCESS',
        data: data.data
    }
}
export const loadUAError = (data) => {
    return {
        type: 'LOAD_UA_ERROR',
        data: data.data
    }
}
export const loadUA = (axios) => {
    return dispatch => {
        dispatch(loadUARequest())
        axios
            .get('http://httpbin.org/user-agent')
            .then((data)=> dispatch(loadUASuccess(data)))
            .catch(()=> dispatch(loadUAError()))
    }
}

export default {
    loadUA: loadUA.bind(null, axios)
}