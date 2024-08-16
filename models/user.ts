import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
    blocked: boolean;
}

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    blocked: { type: Boolean, default: false }
});

export const User = mongoose.model<IUser>('User', UserSchema);
