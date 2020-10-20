import C from "./constants";
import initialState from "./initialState";

export const albumName = (state = initialState.albumName, action: { type: string; albumName: string; }) => {
    switch (action.type) {
        case C.SET_ALBUM_NAME:
            return (action.albumName)
        default:
            return state
    }
}

export const albums = (state = initialState.albums, action: { type: string; albums: string; }) => {
    switch (action.type) {
        case C.SET_ALBUMS:
            return (action.albums)
        default:
            return state
    }
}