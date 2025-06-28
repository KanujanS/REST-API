import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './configs/db.js';
import userRoutes from './routes/userRoutes.js'

const app = express();
connectDB();

app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));