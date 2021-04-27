import axios from 'axios'

export const GET_HISTORY = 'GET_HISTORY'

export const getHistory = history => {
    return {
        type: GET_HISTORY,
        history
    }
}

export const fetchHistory = (id) => {
    return async (dispatch) => {
        const {data} = axios.get(`/api/order_history/${id}`)
        dispatch(getHistory(data))
    }
}