const express = require('express')
const router = express.Router();

const protect = require('../middlewares/protect');
const auth = require('../middlewares/auth');

const {
    login,
    register,
    addUser,
    userList,
    deleteUser,
    editUser,
    updateUser
} = require('../controllers/UserController');

router.post('/api/v1/login', login);
router.post('/api/v1/register', register);
router.post('/api/v1/adduser', protect, auth, addUser);
router.get('/api/v1/user-list', protect, auth, userList);
router.delete('/api/v1/user-delete'+'/:id', protect, deleteUser);
router.get('/api/v1/user-edit'+'/:id', protect, editUser);
router.put('/api/v1/user-update'+'/:id', protect, updateUser);

module.exports = router;