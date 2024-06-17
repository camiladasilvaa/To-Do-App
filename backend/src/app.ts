import express from 'express';
import bodyParser from 'body-parser';
import { initModels } from './models';
import todoRoutes from './routes/todo';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());

app.use('/todos', todoRoutes);

initModels().then(() => {
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
});
