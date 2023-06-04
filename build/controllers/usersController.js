"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = exports.loginUser = exports.getAllUsers = void 0;
const users_1 = __importDefault(require("../model/users"));
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield users_1.default.findAll();
    if (users.length === 0) {
        res.status(404).json({ msg: "No users found." });
        return;
    }
    res.status(400).json(users);
});
exports.getAllUsers = getAllUsers;
const loginUser = (req, res) => {
    res.status(200).json({ msg: "Login User" });
};
exports.loginUser = loginUser;
const registerUser = (req, res) => {
    res.status(200).json({ msg: "Resgister User." });
};
exports.registerUser = registerUser;
