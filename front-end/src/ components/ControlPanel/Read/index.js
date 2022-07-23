import {useState} from 'react';
import {Button} from '@mui/material';
import CssTextField from '../../common/CssTextField';

const DisplayPanel = ({
  wsMessage
}) => {
  return (
    <div style={{margin: '20px'}}>
      <span>{wsMessage}</span>
    </div>
  );
};

export default DisplayPanel;