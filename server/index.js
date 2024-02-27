import express from 'express';
import auth from './routes/auth.js'
import user from './routes/user.js'
import 'dotenv/config'
import init_db from './db.js'
const { PORT } = process.env;

init_db()
const app = express();
app.use(express.json());
app.use('/', auth);
app.use('/', user);
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
