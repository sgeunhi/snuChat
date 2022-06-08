import {atom} from "recoil";
import * as React from "react";

export const UserState = atom({
  key: 'UserState',
  default: null,
})

export const NameState = atom({
  key: 'NameState',
  default: '',
})

export const RoomNameState = atom({
  key: 'RoomNameState',
  default: '',
})

export const MessageState = atom({
  key: 'MessageState',
  default: '',
})

export const ChatState = atom({
  key: 'ChatState',
  default: [],
})

export const UserInfoState = atom({
  key: 'UserInfoState',
  default: [],
})

export const ShowSignupState = atom({
  key: 'ShowSignupState',
  default: false,
})

export const CurrentRoomIdState = atom({
  key: 'CurrentRoomIdState',
  default: '',
})

export const ShowMakeRoomState = atom({
  key: 'ShowMakeRoomState',
  default: false,
})

export const RoomState = atom({
  key: 'RoomState',
  default: [],
})
