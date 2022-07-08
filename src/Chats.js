import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import React, { useEffect, useState } from "react";
import "./Chats.css";
import { auth, db } from "./firebase";
import Chat from "./Chat";
import { selectUser } from "./features/appSlicer";
import { useDispatch, useSelector } from "react-redux";
import RadioButtonUnchecked from "@mui/icons-material/RadioButtonUnchecked";
import { useHistory } from "react-router-dom";
import { resetCameraImage } from "./features/cameraSlicer";

function Chats() {
  const [ posts, setPosts ] = useState([]);
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const history = useHistory()


  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const takeSnap = () =>{
    dispatch(resetCameraImage())
    history.push("/")
  }

  return (
    <div className="chats">
      <div className="chats_header">
        <Avatar onClick={() => auth.signOut()} src={user.profilePic} className="chats_avatar" />
        <div className="chats_search">
          <SearchIcon  className="search_icon"/>
          <input autoFocus="autoFocus" placeholder="Friends" type="text" />
        </div>
        <ChatBubbleIcon className="chats_chatIcon" />
      </div>

      <div className="chats_posts">
        {
          posts.map(
            ({
              id, 
              data: { profilePic, username, timestamp, imageUrl, read },
            }) => (
              <Chat
                key={id}
                id={id}
                username={username}
                timestamp={timestamp}
                imageUrl={imageUrl}
                read={read}
                profilePic={profilePic}
              />
            )
          )
        }
      </div>
      <RadioButtonUnchecked
        className="chats_takesnap"
        onClick={takeSnap}
        fontSize="large"
       />
    </div>
  );
}

export default Chats;
