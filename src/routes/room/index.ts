import { Router } from "express";
import { createRoomController } from "./instance/CreateRoom";
import { listRoomsController } from "./instance/ListAllRooms";
import { listRoomByIdController } from "./instance/ListRoomById";
import { deleteRoomController } from "./instance/DeleteRoom";
import { deleteManyRoomsController } from "./instance/DeleteManyRooms";
import { updateRoomController } from "./instance/UpdateRoom";
import { checkGithubToken } from "../../modules/middlewares/checkGithubToken";

const roomRoute = Router();

roomRoute.post("/create", checkGithubToken, (req, res) => 
  createRoomController.handle(req, res));

roomRoute.get("/list", (req, res) => 
  listRoomsController.handle(req, res));

roomRoute.get("/room/list/:id", (req, res) => 
  listRoomByIdController.handle(req, res));

roomRoute.delete("/room/:id", (req, res) => 
  deleteRoomController.handle(req, res));

roomRoute.delete("/", (req, res) =>
  deleteManyRoomsController.handle(req, res));

roomRoute.put("/room/:id", (req, res) =>
  updateRoomController.handle(req, res));

export { roomRoute };
