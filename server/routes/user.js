import express from 'express';
import userController from '../controllers/user.js';

const { view_messages, send_message, list_all_users } = userController;
const router = express.Router();

router.post('/view_messages', view_messages);
router.post('/send_message', send_message);
router.get('/list_all_users', list_all_users);

export default router;