import express from 'express';
//import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './utils/db';
import adminRoutes from './routes/adminRoutes';
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();

//app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/admin', adminRoutes);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
