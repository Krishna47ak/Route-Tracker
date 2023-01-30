import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker-api";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'sign':
            return { errorMessage: '', token: action.payload }
        case 'signout':
            return { errorMessage: '', token: null }
        case 'clear_error_message':
            return {...state, errorMessage: '' }
        default:
            return state
    }
}

const autoSignin = (dispatch) => async (navigateBottom, navigateAuth) =>{
    const token = await AsyncStorage.getItem('token')
    if (token) {
        dispatch({type : 'sign', action: token})
        navigateBottom()
    }else{
        navigateAuth()
    }
}

const signup = (dispatch) => async ({ email, password }, navigate) => {
    try {
        const response = await trackerApi.post('/signup', { email, password })
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: 'sign', payload: response.data.token })
        navigate()
    } catch (err) {
        console.log(err.response.data);
        dispatch({ type: 'add_error', payload: 'Something went wrong' })
    }
}

const signin = (dispatch) => async ({ email, password }, navigate) => {
    try {
        const response = await trackerApi.post('/signin', { email, password })
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: 'sign', payload: response.data.token })
        navigate()
    } catch (err) {
        console.log(err.response.data)
        dispatch({ type: 'add_error', payload: 'Something went wrong' })
    }
}

const signout = (dispatch) => async (navigate) => {
    console.log('out');
    await AsyncStorage.removeItem('token')
    dispatch({type : 'signout'})
    navigate()
}

const clearErrorMessage = (dispatch) => () => {
    dispatch({type : 'clear_error_message'})
}

export const { Provider, Context } = createDataContext(authReducer, {autoSignin, signup, signin, signout, clearErrorMessage }, { token: null, errorMessage: '' })