import { Switch, Route, withRouter, useHistory } from "react-router-dom";
import React, { useEffect, FunctionComponent, useState } from 'react';
import {handleResponseWithErrors} from '../../util/common'


function ArrayList(props:any) {
  const {array, history} = props;

  return (
    <div className='content_block' >
     {array.map((el:any) => {
      return <>
      {props.children({
        el: el
       })}
      </>
     })}
    </div>
  );
}

export default withRouter(ArrayList);