import { NextApiResponseWithSocket } from "@/shared/types-interfaces-enums/interfaces";
import type { NextApiRequest } from "next";
import { Server } from "socket.io";

export default function SocketHandler(
  req: NextApiRequest,
  res: NextApiResponseWithSocket,
) {
  res.status(200).json("socket testing");
}
