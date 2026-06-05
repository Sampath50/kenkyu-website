import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.get('/', (req, res) => {
  res.json({ message: 'Journals and Publication Website API' });
});

// MongoDB Connection - HARDCODED for deployment
const MONGO_URI = "mongodb://kenkyupub_db_user:Kenkyu2024@cluster0.of4owpq.mongodb.net:27017/kenkyu?ssl=true&authSource=admin&retryWrites=true&w=majority&directConnection=true";

console.log('Connecting to MongoDB Atlas...');

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB Connected Successfully');
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ MongoDB Connection Error:', err.message);
    process.exit(1);
  });