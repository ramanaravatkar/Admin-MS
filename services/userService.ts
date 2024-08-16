import { User, IUser } from '../models/user';

export const getUserInfo = async (id: string) => {
    const user = await User.findById(id);
    if (!user) {
        throw new Error('User not found');
    }
    return user;
};

export const getAllUsers = async () => {
    const users = await User.find();
    return users;
};

export const blockUser = async (id: string) => {
    const user = await User.findById(id);
    if (!user) {
        throw new Error('User not found');
    }
    user.blocked = true;
    await user.save();
    return user;
};

export const unblockUser = async (id: string) => {
    const user = await User.findById(id);
    if (!user) {
        throw new Error('User not found');
    }
    user.blocked = false;
    await user.save();
    return user;
};
