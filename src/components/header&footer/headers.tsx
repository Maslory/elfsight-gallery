import { Switch, Route, withRouter, useHistory } from "react-router-dom";
import React, { useEffect, FunctionComponent, useState } from 'react';
import ArrayList from '../elements/ArrayList'
import { compose } from "redux";
import { connect } from "react-redux";


function Headers(props:any) {
 const [text, setText] = useState({name: 'Users', path: '/users/'})
 const history = useHistory()
 const {topText, bottomText ,className} = props;
 const path = history.location.pathname
 


 useEffect(() => {
  
  if( path === '/'){
   setText({name: 'Users', path: '/users/'})
  }
  else if(path.match('/album/')){
   setText({name: 'name', path: ''})
  }
 },[])

  return (
   <div className={className} >
    {props.children({
      albumName: props.albumName,
      path: path
    })}

   </div>
  );
}


function mapDispatchToProps(dispatch: any) {
  return {
  };
}

function mapStateToProps(state: any) {
  return {
      albumName: state.albumName,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(compose(withRouter(Headers)));