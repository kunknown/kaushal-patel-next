import type { Server as Http2Server } from "http";
import type { Socket as NetSocket } from "net";
import type { NextApiResponse } from "next";
import type { Server as IOServer } from "socket.io";

export interface SocketServer extends Http2Server {
  io?: IOServer | undefined;
}

export interface SocketWithIO extends NetSocket {
  server: SocketServer;
}

export interface NextApiResponseWithSocket extends NextApiResponse {
  socket: SocketWithIO;
}
