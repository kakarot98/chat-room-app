import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Join.css'

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return(
      <div className="joinOuterContainer">
        <div className="joinInnerContainer">
        <h1 className="heading">JOIN</h1>
          <div><input type="text" value={name} placeholder="Name" className="joinInput" onChange={(e)=>setName(e.target.value)} /></div>
          <div><input type="text" value={room} placeholder="Room" className="joinInput" onChange={(e)=>setRoom(e.target.value)} /></div>
          <Link onClick={(e) => (!name || !room) ? e.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
          <button className="button mt-25" type="submit">Join in</button>
          </Link>
        </div>
         
      </div>
  )
};

export default Join;
