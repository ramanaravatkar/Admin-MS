import { Request, Response } from 'express';
import { registerAdmin, loginAdmin } from '../services/adminService';

export const register = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        const admin = await registerAdmin(name, email, password);
        res.status(201).json(admin);
    } catch (error) {
        res.status(400).json({ message: error });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const admin = await loginAdmin(email, password);
        res.status(200).json(admin);
    } catch (error) {
        res.status(400).json({ message: error});
    }
};
