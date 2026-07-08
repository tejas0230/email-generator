import express from 'express';
import cors from 'cors';
import appRouter from './routes/index.js';

const app = express();

const allowedOrigins = [
  'https://n8n.firespinelabs.com'
];

app.use(cors({
  origin: (origin, callback) => {
    if (
      !origin || // Allows Postman, curl, Insomnia, etc.
      allowedOrigins.includes(origin) ||
      /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)
    ) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/v1',appRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});