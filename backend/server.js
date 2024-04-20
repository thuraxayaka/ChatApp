import express from 'express';
import dotenv from 'dotenv';
import cookieparser from 'cookie-parser';
//routes
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes  from './routes/user.routes.js';

import connectToDb from './database/connect.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;




app.use(express.json());
app.use(cookieparser());
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);
app.listen(PORT,() => {
    connectToDb();
    console.log(`Server is listening on port ${PORT}`);
})

