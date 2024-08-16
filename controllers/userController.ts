import { Request, Response } from 'express';
import { getUserInfo, getAllUsers, blockUser, unblockUser } from '../services/userService';

export const getInfo = async (req: Request, res: Response) => {
    try {
        const user = await getUserInfo(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

export const getAll = async (req: Request, res: Response) => {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: error});
    }
};

export const block = async (req: Request, res: Response) => {
    try {
        const user = await blockUser(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

export const unblock = async (req: Request, res: Response) => {
    try {
        const user = await unblockUser(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};
