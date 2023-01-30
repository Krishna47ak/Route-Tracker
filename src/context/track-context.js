import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker-api";

const trackreducer = ( state, action ) => {
    switch (action.type) {
        case 'fetch_tracks':
            return action.payload
        default:
            break;
    }
}

const fetchTracks = dispatch => async () => {
    const response = await trackerApi.get('/tracks')
    dispatch({ type: 'fetch_tracks', payload: response.data})
}
const createTracks = dispatch => async (name, locations) => {
    await trackerApi.post('/tracks', { name, locations })
}

export const { Provider, Context } = createDataContext( trackreducer, { fetchTracks, createTracks }, [])