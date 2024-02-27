import express from 'express';
import routes from './routes/index.js';
import 'dotenv/config'
import init_db from './db.js'
const { PORT } = process.env;

init_db()
const app = express();
app.use('/', routes);
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
