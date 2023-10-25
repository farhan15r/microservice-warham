import express from "express";
import addressController from "../controller/address-controller.js";
import {authMiddleware} from "../middleware/auth-middleware.js";

const userRouter = new express.Router();
userRouter.use(authMiddleware);

// Address API
userRouter.post('/api/contacts/:contactId/addresses', addressController.create);
userRouter.get('/api/contacts/:contactId/addresses/:addressId', addressController.get);
userRouter.put('/api/contacts/:contactId/addresses/:addressId', addressController.update);
userRouter.delete('/api/contacts/:contactId/addresses/:addressId', addressController.remove);
userRouter.get('/api/contacts/:contactId/addresses', addressController.list);

export {
    userRouter
}
