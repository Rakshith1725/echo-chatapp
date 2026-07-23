import express from 'express';
import { getAllContacts, getChatPartners, getMessagesByUserId, sendMessage } from '../controllers/message.controller.js';
import { protectRoute } from '../middlewares/auth.middleware.js';
import { arcjetProtection } from '../middlewares/arcjet.middleware.js';

const router=express.Router();

router.use(arcjetProtection,protectRoute);

router.get('/contacts',protectRoute,getAllContacts);
router.get('/chats',getChatPartners);
router.get("/:id", getMessagesByUserId);
router.post('/send/:id',sendMessage);

router.get('/send',(req,res)=>{
     res.send("send message endpoint");
});

export default router;