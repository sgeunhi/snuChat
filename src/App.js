import './App.css';
import {useEffect} from 'react';
import SignupDialog from "./Components/SignupDialog";
import Button from "@mui/material/Button";
import {TextField} from "@material-ui/core";
import {useRecoilState} from "recoil";
import {
  ChatState,
  CurrentRoomIdState,
  MessageState,
  RoomState,
  ShowMakeRoomState,
  ShowSignupState,
  UserState
} from "./Store/atom";
import {getChats, getRooms, login, createRoom, sendMessage} from "./Api/api";
import ChatRoom from "./Components/ChatRoom";
import Chat from "./Components/Chat";
import {keys} from "@material-ui/core/styles/createBreakpoints";
import MakeRoomDialog from "./Components/MakeRoomDialog";
import SendIcon from '@mui/icons-material/Send';

function App() {
  const [user, setUser] = useRecoilState(UserState);
  const [showSignup, setShowSignup] = useRecoilState(ShowSignupState);
  const [showMakeRoom, setShowMakeRoom] = useRecoilState(ShowMakeRoomState);
  const [rooms, setRooms] = useRecoilState(RoomState);
  const [chats, setChats] = useRecoilState(ChatState);
  const [message, setMessage] = useRecoilState(MessageState);
  const [currentRoomId, setCurrentRoomId] = useRecoilState(CurrentRoomIdState);

  const showChats = (e, roomId) => {
    e.preventDefault();
    getChats(roomId)
      .then(chatInfo => {
        setChats(chatInfo);
      })
  }

  const logout = (e) => {
    window.localStorage.removeItem("key");
    setUser(null);
  }

  useEffect(() => {
    getRooms()
      .then(roomsInfo => {
        setRooms(roomsInfo);
      })
  }, [rooms]);

  useEffect(() => {
    const key = localStorage.getItem('key');
    if (key) {
      login()
        .then(user => {
          setUser(user)
        })
    }
  }, [])

  return (
    <div id="snuChat">
      <div id="left-container">
        <div id="login-info">
          {user ? <div id="user-info">
              <div>🙌&nbsp;&nbsp;{user.name}님</div>
              <div><Button style={{marginRight:"5px"}} variant="contained" component="span" onClick={e => setShowMakeRoom(true)}>채팅방
                만들기</Button><Button variant="outlined" component="span" onClick={e => logout(e)}>로그아웃</Button></div>
            </div>
            : <Button variant="contained" size="medium" onClick={e => setShowSignup(true)}>회원가입</Button>
          }
        </div>
        <div id="room-container">
          <div id="rooms">
            {rooms.map(room => <ChatRoom key={room._id} onClick={e => {
              showChats(e, room._id)
              setCurrentRoomId(room._id)
            }} {...room}/>)}
          </div>
        </div>
      </div>
      <div id="chats">
        <div id="chat-list">
          {chats.map(chat => <Chat key={chats._id} userName={chat.userName} message={chat.message}
                                   createdAt={chat.createdAt}/>)}
        </div>
        <form id="chat-form" onSubmit={e => {
          e.preventDefault();
          sendMessage(currentRoomId, message)
            .then(messageInfo => {
              console.log(messageInfo.room)
              showChats(e, messageInfo.room)
            })
          setMessage("")
        }}>
          <TextField autoFocus
                     id="message"
                     label="메세지를 입력하세요."
                     type="text"
                     variant="standard"
                     value={message}
                     onChange={e => setMessage(e.target.value)}/>
          <Button type="submit" variant="contained" endIcon={<SendIcon/>}>입력</Button>
        </form>
      </div>
      <SignupDialog/>
      <MakeRoomDialog/>
    </div>
  );
}

export default App;
