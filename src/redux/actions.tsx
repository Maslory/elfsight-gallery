import C from './constants'


export const setAlbumName = (albumName: any) =>
    (
        {
            type: C.SET_ALBUM_NAME,
            albumName: albumName
        }
    )

export const setAlbums = (albums: any) => 
(
    {
        type: C.SET_ALBUMS,
        albums: albums
    }
)