import express from 'express'
import { PORT, mongoDBURL } from './config.js'
import mongoose, { connect } from 'mongoose';
import booksRoute from './routes/booksRoutes.js'
import cors from 'cors';
const app = express();

// middleware for parsing req body
app.use(express.json());

// middleware for handling cors policy
app.use(cors());


app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send("MERN is running")
})

app.use('/books', booksRoute)


mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("database is connected")
        app.listen(PORT, () => {
            console.log("server is running on port;", PORT)
        });

    })
    .catch((error) => {
        console.log(error)

    })