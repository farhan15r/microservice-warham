import express from "express";
import contactController from "../controller/contact-controller.js";
import {authMiddleware} from "../middleware/auth-middleware.js";

const userRouter = new express.Router();
userRouter.use(authMiddleware);

// Contact API
userRouter.post('/api/contacts', contactController.create);
userRouter.get('/api/contacts/:contactId', contactController.get);
userRouter.put('/api/contacts/:contactId', contactController.update);
userRouter.delete('/api/contacts/:contactId', contactController.remove);
userRouter.get('/api/contacts', contactController.search);

// // Address API
// userRouter.post('/api/contacts/:contactId/addresses', addressController.create);
// userRouter.get('/api/contacts/:contactId/addresses/:addressId', addressController.get);
// userRouter.put('/api/contacts/:contactId/addresses/:addressId', addressController.update);
// userRouter.delete('/api/contacts/:contactId/addresses/:addressId', addressController.remove);
// userRouter.get('/api/contacts/:contactId/addresses', addressController.list);

export {
    userRouter
}
