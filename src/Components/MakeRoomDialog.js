import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useRecoilState} from "recoil";
import {RoomNameState, ShowMakeRoomState} from "../Store/atom";
import {createRoom} from "../Api/api";

export default function MakeRoomDialog() {
  const [showMakeRoom, setShowMakeRoom] = useRecoilState(ShowMakeRoomState);
  const [roomName, setRoomName] = useRecoilState(RoomNameState);

  const completeMakeRoom = (e) => {
    e.preventDefault();
    createRoom(roomName)
      .then(roomInfo => {
        console.log(roomInfo);
        handleClose();
      })
    setRoomName("")
  }

  const handleClose = (e) => {
    setShowMakeRoom(false);
  };

  return (
    <Dialog open={showMakeRoom} onClose={handleClose}>
      <DialogTitle>채팅방 만들기</DialogTitle>
      <DialogContent>
        <DialogContentText>
          채팅방 이름을 입력하세요.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="채팅방 이름"
          type="text"
          fullWidth
          variant="standard"
          value={roomName}
          onChange={e => setRoomName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>취소</Button>
        <Button onClick={completeMakeRoom}>완료</Button>
      </DialogActions>
    </Dialog>
  );
}
