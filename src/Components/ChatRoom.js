import * as React from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import Button from "@mui/material/Button";

const ChatRoom = ({_id, name, onClick}) => {
  return (
    <Button fullWidth variant="outlined" component="span" style={{marginBottom:"1px", alignItems:"flex-start"}} onClick={onClick}><ChatIcon/>&nbsp;&nbsp;&nbsp;&nbsp;{name}</Button>
  );
}

export default ChatRoom;
