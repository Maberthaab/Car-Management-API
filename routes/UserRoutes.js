var express = require('express');
var router = express.Router();

const UserController = require('../controller/User')

const isSuperAdmin = require('../middleware/isSuperAdmin')
const isAdmin = require('../middleware/isAdmin')
const isMember = require('../middleware/isMember')

const authAdmin = require('../middleware/authAdmin')
const authRegistered = require('../middleware/authRegistered')

// All
router.get('/login', UserController.login)
router.post('/register-member', UserController.registerMember)

// Registered
router.get('/info', authRegistered, UserController.currentUser)

// Super Admin
router.post('/register-admin', isSuperAdmin, UserController.registerAdmin)

// Admins Only
router.get('/', authAdmin, UserController.getAllUsers)

module.exports = router;