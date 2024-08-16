import bcrypt from 'bcryptjs';
import { Admin, IAdmin } from '../models/admin';
import { generateToken } from '../utils/auth';

export const registerAdmin = async (name: string, email: string, password: string) => {
    const adminExists = await Admin.findOne({ email });

    if (adminExists) {
        throw new Error('Admin already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const admin = await Admin.create({
        name,
        email,
        password: hashedPassword,
    });

    return {
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        token: generateToken(admin._id.toString())
    };
};

export const loginAdmin = async (email: string, password: string) => {
    const admin = await Admin.findOne({ email });

    if (admin && (await bcrypt.compare(password, admin.password))) {
        return {
            _id: admin._id,
            name: admin.name,
            email: admin.email,
            token: generateToken(admin._id.toString())
        };
    } else {
        throw new Error('Invalid credentials');
    }
};
