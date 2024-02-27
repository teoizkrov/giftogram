import express from 'express';
import auth from './auth.js'
import user from './user.js'

/**
 * conglomerate all our routes and export it to server/index
 */
const router = express.Router();

router.use('/auth', auth);
router.use('/users', user);

export default router;