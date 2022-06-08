import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Chat = ({_id, userName, message, createdAt}) => {
  return (
    <Typography component="div" sx={{width: '100%'}}>
      <Typography component="div" sx={{display: "flex", flexDirection: "row", width: '100%'}}>
        <Box sx={{fontWeight: 500, m: 1}}>{userName}</Box>
        <Box sx={{
          fontWeight: 'medium',
          padding: '8px',
          backgroundColor: '#4fc3f7',
          color: "#ffffff",
          borderRadius: '5px',
          m: 1
        }}>{message}</Box>
      </Typography>
      <Box sx={{
        fontSize: "small",
        fontWeight: 'light',
        textAlign: 'right',
        m: 1
      }}>{new Date(createdAt).toLocaleString()}</Box>
      {/*<Box sx={{ fontWeight: 500, m: 1 }}>500</Box>*/}
      {/*<Box sx={{ fontWeight: 'bold', m: 1 }}>Bold</Box>*/}
    </Typography>
  );
}

export default Chat;
