import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import connectCloudinary from './config/cloudinary.js';
import companyRoutes from './routes/companyRoutes.js';
import jobRoutes from './routes/jobRoutes.js';
import userRoutes from './routes/userRoutes.js';
import savedJobRoutes from "./routes/savedJobRoutes.js";
import { clerkMiddleware } from '@clerk/express';
import 'dotenv/config';
import * as Sentry from '@sentry/node';

const app = express();

// DB + Cloudinary
await connectDB();
await connectCloudinary();

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(clerkMiddleware());

// Optional: prevent caching
app.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  next();
});

// Routes
app.get('/api', (req, res) => res.send('✅ API working'));
app.use('/api/company', companyRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/users', userRoutes);
app.use('/api/saved-jobs', savedJobRoutes);

// Sentry error handler
Sentry.setupExpressErrorHandler(app);

// Export for Vercel
export default app;
