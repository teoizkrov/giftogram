import express from 'express';
import authController from '../controllers/auth.js';

const { register, login } = authController;
const router = express.Router();

router.post('/register', register);
router.post('/login', login);

export default router;
