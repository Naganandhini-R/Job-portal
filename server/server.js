import './config/instrument.js';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import connectCloudinary from './config/cloudinary.js';
import companyRoutes from './routes/companyRoutes.js';
import jobRoutes from './routes/jobRoutes.js';
import userRoutes from './routes/userRoutes.js';
import savedJobRoutes from "./routes/savedJobRoutes.js";
import { clerkMiddleware } from '@clerk/express';
import * as Sentry from '@sentry/node';
import 'dotenv/config';

const app = express();

// Connect DB + Cloudinary
await connectDB();
await connectCloudinary();

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL , credentials: true }));
app.use(express.json());
app.use(clerkMiddleware());

// Routes
app.get('/api', (req, res) => res.send('✅ API working'));
app.use('/api/company', companyRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/users', userRoutes);
app.use("/api/users", savedJobRoutes);

// Sentry error handler
Sentry.setupExpressErrorHandler(app);

//  Remove app.listen() for Vercel
export default app;
