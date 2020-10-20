import React, { useState, useEffect } from 'react';
import './style/App.sass';
import { Switch, Route, withRouter, useHistory } from "react-router-dom";
import MainPage from './components/pages/main/MainPage'
import Album from './components/pages/album/Album'
import Headers from './components/header&footer/headers'
import logo from '../src/style/img/logo.svg'

function App(props: any) {
  const history = useHistory()

  return (
    <div className="main_page">
      <Headers className={'left_block'} >
        {(() => {
          return <>
            <div style={{ cursor: 'pointer' }} onClick={() => history.push('/')} >
              <img style={{width: '8vw', minWidth: 100}} src={logo} alt="логотип компании" />

            </div>
            <div style={{ cursor: 'pointer' }} onClick={() => history.push('/')} >Albums</div>
          </>
        })}
      </Headers>

      <div className="content" >
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/album/:user_id/' component={Album} />
        </Switch>
      </div>
      <Headers className={'right_block'} >
        {((
          //@ts-ignore
          { albumName, path }) => {
          return <>
            <div>About</div>
            <div> {
              path === '/' ? '' : albumName}</div>
          </>
        })}
      </Headers>
    </div>
  );
}

export default withRouter(App);
