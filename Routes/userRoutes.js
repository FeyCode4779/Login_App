import express from 'express';
import { createUser, getUsers, getUsersById, updateUser, userLogin } from '../controller/userController.js';

const router = express.Router();

router.route('/').get(getUsers).post(createUser);
router.route('/:id').get(getUsersById).put(updateUser)
router.route('/login').post(userLogin)


export default router;