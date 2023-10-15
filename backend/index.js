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
res.json("Hello");
    return res.status(234).send("MERN is running")
})

app.use('/books', booksRoute)


mongoose
    .connect('mongodb+srv://sandeepvemula408:sandeep408@sandeepcluster.d8bxcde.mongodb.net/books-collection?retryWrites=true&w=majority')
    .then(() => {
        console.log("database is connected")
        app.listen(PORT, () => {
            console.log("server is running on port;", PORT)
        });

    })
    .catch((error) => {
        console.log(error)

    })
