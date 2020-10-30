import { Router } from "express";
import userController from "../controllers/userController";

const router = Router();

router.route("/users").get(userController.listAll);
router.route("/user").post(userController.post);
router
  .route("/user/:id_user")
  .get(userController.list)
  .put(userController.update)
  .delete(userController.delete);
