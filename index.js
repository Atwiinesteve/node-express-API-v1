import express from 'express';
import bodyParser from 'body-parser';

// Import Custom made Router.
import usersRoutes from './routes/users.js';

//App Setup
const app = express();
const PORT = process.env.PORT || 5000;

// Use json fornat data
app.use(bodyParser.json());

// Setup Middlewares
app.use('/users', usersRoutes);

// Home Router Test
app.get('/', (req, res) => { res.send('Node Express API says Hi...') })

//Initializing Application Server
app.listen(PORT, () => { console.log(`Server Application Running at http://localhost:${PORT}`); });