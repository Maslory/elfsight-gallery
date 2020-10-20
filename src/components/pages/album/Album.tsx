import { Switch, Route, withRouter, useHistory, useParams } from "react-router-dom";
import React, { useEffect, FunctionComponent, useState } from 'react';
import ArrayList from '../../elements/ArrayList'
import Popup from '../../elements/Popup/Popup'
import ReactDOM from "react-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import {setAlbumName} from '../../../redux/actions'

function Album(props:any) {
 const [albumData, setAlbumData] = useState([])
 const history = useHistory;
 let { user_id } = useParams();
 const [visible, setVisible] = useState(false)
 const [selectPicture, setSelectPicture] = useState(0)


 const getAlbumName = async () => {
  const request = await fetch('https://jsonplaceholder.typicode.com/albums?id=' + user_id,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
  if (request.ok) {
    const data = await request.json();
    props.setAlbumName(data[0].title)
  }
  else {
  }
}

  const getAlbum = async (id:number) => {
    const request = await fetch('https://jsonplaceholder.typicode.com/photos/?albumId=' + id,
    {
     headers: {
     'Content-Type': 'application/json',
     'Accept': 'application/json'
    }
   })
   if(request.ok){
    const data = await request.json();
    setAlbumData(data)
   }
   else{
   }
    }

  useEffect(() => {
   getAlbum(user_id)
   if(props.albumName === ''){
    getAlbumName()
   }
  }, [])

  return (
    <div>
    <Popup albumName={props.albumName} visible={visible} setVisible={setVisible} array={albumData} selectPicture={selectPicture} />
     <ArrayList array={albumData} history={history} >
     {
            // @ts-ignore
            ({ el }) => {
             return <div className='picture_item' >
              <img onClick={() => {setVisible(true); setSelectPicture(el.thumbnailUrl) }} className='picture' src={el.thumbnailUrl} alt="Картинка из альбома"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(compose(withRouter(Album)));