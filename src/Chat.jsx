import { Avatar } from '@mui/material'
import React from 'react'
import "./Chat.css"
import StopRoundedIcon from '@mui/icons-material/StopRounded'
import ReactTimeago from 'react-timeago'
import { useDispatch } from 'react-redux'
import { selectImage } from './features/appSlicer'
import { db } from './firebase'
import { useHistory } from 'react-router-dom'

function Chat({id, profilePic, username, timestamp,
imageUrl, read}) {
    const dispatch = useDispatch()
    const history =useHistory()
    const open = () =>{
        if(!read) {
            dispatch(selectImage(imageUrl));
            db.collection('posts').doc(id).set(
                {
                    read:true,
                },
                {merge:true}
            )
                history.push('/chats/view')
        }
    }

  return (
    <div onClick={open} className='chat'>
        <Avatar src={profilePic} className="chat_avatar"/>
        <div className="chat_info">
            <h4>{username}</h4>
            <p>{!read && "Tap to view - "}<ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()}/></p>
        </div>

        {!read && <StopRoundedIcon className="chat_read"/> }
    </div>
  )
}

export default Chat