import express from "express";
import addressController from "../controller/address-controller.js";
import {authMiddleware} from "../middleware/auth-middleware.js";

const userRouter = new express.Router();
userRouter.use(authMiddleware);

// Address API
userRouter.post('/api/address/:contactId/addresses', addressController.create);
userRouter.get('/api/address/:contactId/addresses/:addressId', addressController.get);
userRouter.put('/api/address/:contactId/addresses/:addressId', addressController.update);
userRouter.delete('/api/address/:contactId/addresses/:addressId', addressController.remove);
userRouter.get('/api/address/:contactId/addresses', addressController.list);

export {
    userRouter
}
