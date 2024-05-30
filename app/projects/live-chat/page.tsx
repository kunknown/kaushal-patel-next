"use client";

import { Button, Input } from "@nextui-org/react";
import React, { useEffect } from "react";
import { io } from "socket.io-client";

export default function LiveChat() {
  // const connect = () => {
  //   const socket = io();
  //   socket.on("connect", () => {
  //     console.log("connected to socket", socket);
  //   });
  // };
  // const disconnect = () => {
  //   const socket = io();
  //   socket.on("disconnect", () => {
  //     console.log("disconnected from socket", socket);
  //   });
  // };
  // useEffect(() => {
  //   (async () => {
  //     await fetch("/api/live-chat");
  //     connect();
  //   })();
  // }, []);
  // const send = () => socket.emit("clientToServer")
  return (
    <div className="flex justify-center">
      <div>Live Chat</div>
      {/* <Button onClick={connect}>Connect</Button> */}
      {/* <Input label="Message" /> */}
      {/* <Button onClick={send}>Send</Button> */}
      {/* <Button onClick={disconnect}>Disconnect</Button> */}
    </div>
  );
}
