import express from 'express';
import genreModel, { Genres } from './genreModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); 

router.get('/', asyncHandler(async (req, res) => {
    const genres = await genreModel.find();
    res.status(200).json(genres);
}));

export default router;

