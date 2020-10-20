import { Switch, Route, withRouter, useHistory } from "react-router-dom";
import React, { useEffect, FunctionComponent, useState } from 'react';
import ArrayList from '../../elements/ArrayList'
import album_picture from '../../../style/img/standart_album.png'
import { compose } from 'redux'
import { connect } from 'react-redux'
import {setAlbumName} from '../../../redux/actions'

function MainPage(props: any) {
  const history = useHistory()
  const [albums, setAlbums] = useState([])
  
  const getDataAlbums = async () => {
    const request = await fetch('https://jsonplaceholder.typicode.com/albums',
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
    if (request.ok) {
      const data = await request.json();
      setAlbums(data)
    }
    else {
    }
  }

  useEffect(() => {
    getDataAlbums()
  }, [])

  return (
    <div style={{ position: 'relative' }} >
      <ArrayList array={albums} history={history} >
        {
          // @ts-ignore
          ({ el }) => {
            return <div className="albums_item"  >
              <div onClick={() => {history.push(`/album/${el.id}/`); props.setAlbumName(el.title)}} className='picture_item' >
                <img className='picture' src={album_picture} alt="Картинка альбома" />
              </div>
              <a onClick={() => {history.push(`/album/${el.id}/`); props.setAlbumName(el.title)}} >
                {el.title}
              </a>
            </div>
          }
        }
      </ArrayList>
    </div>
  );
}


function mapDispatchToProps(dispatch: any) {
  return {
      setAlbumName: (albumName: any) => dispatch(setAlbumName(albumName)),
  };
}

function mapStateToProps(state: any) {
  return {
      albumName: state.albumName,
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(compose(withRouter(MainPage)));