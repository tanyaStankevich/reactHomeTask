import React from "react";
import { Router, Link, useParams, Redirect, useRouteMatch } from "react-router-dom";
import { arrChat } from "../../../NameChat";

export default function Message() {
   const { arrChatName } = useParams();
    
  const chat = arrChat.find(({ name }) => name === arrChatName);
  
    return ( 
        <div>{ chat} + '   Message'</div>
    )
}