import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useRecoilState} from "recoil";
import {NameState, ShowSignupState, UserState} from "../Store/atom";
import {signup} from "../Api/api";

export default function SignupDialog() {
  const [showSignup, setShowSignup] = useRecoilState(ShowSignupState);
  const [name, setName] = useRecoilState(NameState);
  const [user, setUser] = useRecoilState(UserState);
  // 이미 등록된 회원가입 아이디 처리
  const completeSignup = (e) => {
    e.preventDefault();
    if (user) {
      alert('이미 등록된 아이디입니다.')
      setShowSignup(false);
    } else {
      signup(name)
        .then(userInfo => {
          localStorage.setItem('key', userInfo.key);
          setUser(userInfo);
          handleClose();
        })
    }
  }

  const handleClose = (e) => {
    setShowSignup(false);
  };

  return (
    <Dialog open={showSignup} onClose={handleClose}>
      <DialogTitle>회원가입</DialogTitle>
      <DialogContent>
        <DialogContentText>
          사용하실 닉네임을 입력하세요.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="닉네임"
          type="text"
          fullWidth
          variant="standard"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>취소</Button>
        <Button onClick={completeSignup}>완료</Button>
      </DialogActions>
    </Dialog>
  );
}
