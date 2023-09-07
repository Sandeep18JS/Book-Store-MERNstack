
import express from 'express'
import { Book } from '../models/bookmodel.js'

const router= express.Router();

//route for Save new Book 
router.post('/', async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishedyear
        ) {
            return res.status(400).send({
                message: 'send all requires fields: title , author , publisedyear'
            });
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishedyear: req.body.publishedyear,
        };
        const book = await Book.create(newBook);
        return res.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
})

// get all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({})

        return res.status(200).json({
            count: books.length,
            Data: books
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
})

// get book with id
router.get('/:id', async (req, res) => {
    try {

        const { id } = req.params;

        const book = await Book.findById(id)

        return res.status(200).json(book);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
})

// update a book
router.put('/:id', async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishedyear
        ) {
            return res.status(400).send({
                message: 'send all requires fields: title , author , publisedyear'
            });
        }

        const { id } = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);
        if (!result) {
            return res.status(404).json({ message: 'book not found' });
        }
        return res.status(200).send({ message: 'book updated' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
})
// delete book
router.delete('/:id', async (req, res) => {
    try {
      
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: 'book not found' });
        }
        return res.status(200).send({ message: 'book deleted' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
})

export default router;