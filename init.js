import './db';
import app from './app';
import dotenv from 'dotenv';
import './models/Meet';
import './models/Member';

dotenv.config();

app.listen(process.env.PORT, () => {
    console.log(`✔ Connected to localhost:${process.env.PORT}`);
});
