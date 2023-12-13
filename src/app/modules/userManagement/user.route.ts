import express from "express";
import { userController } from "./user.controller";
const router = express.Router();

router.post("/", userController.createUser);
router.get("/", userController.getAllUser);
router.get("/:userId", userController.getSingleUser);
router.put("/:userId", userController.updateASingleUser);
router.delete("/:userId", userController.deleteAUser);
router.put("/:userId/orders", userController.addProductToOrder);

export const userRoute = router;
