import { Router } from 'express';
import { registerUser, loginUser, getAllUsers } from '../controllers/user.controller.js';
import { authenticateToken, authorizeRole } from '../middlewares/auth.js';
const router = Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.get('/', authenticateToken, authorizeRole('ADMIN'), getAllUsers);
//router.get('/', getAllUsers);
export default router;
