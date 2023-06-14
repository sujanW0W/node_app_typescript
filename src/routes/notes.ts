import express from 'express'
const router = express.Router()

import {getAllNotes, getNoteById, createNote, updateNote, deleteNote} from '../controllers/notesController'

router.get('/', getAllNotes)

router.get('/:id', getNoteById)

router.post('/', createNote)

router.patch("/:id", updateNote)

router.delete('/:id', deleteNote)

export {router}