"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.router = router;
const usersController_1 = require("../controllers/usersController");
router.get('/', usersController_1.getAllUsers);
router.post('/login', usersController_1.loginUser);
router.post('/register', usersController_1.registerUser);
