import express from 'express';

// Importing CRUD Functions.
import { getUsers, createUser, getUser, updateUser, deleteUser } from '../users-controller/users-controller.js';

// Setting up main Router.
const router = express.Router();

// Fetching all users.
router.get('/', getUsers);

// Creating a single User.
router.post('/', createUser);

// Getting a single User.
router.get('/:id', getUser);

// Updating a User.
router.patch('/:id', updateUser);

// Delete a User.
router.delete('/:id', deleteUser);

// Exporting router.
export default router;