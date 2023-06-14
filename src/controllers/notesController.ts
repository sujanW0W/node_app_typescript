import {Request, Response} from 'express'
import { ExtendedRequest } from '../utils/ExtendedRequest';
import Note from '../model/notes'

export const getAllNotes = async (req: ExtendedRequest, res: Response): Promise<void> => {
    const userId = req.user && req.user.userId   

    const notes = await Note.findAll({where: {userId}})

    res.status(200).json(notes)
}

export const getNoteById = async (req: ExtendedRequest, res: Response): Promise<void> => {
    const userId = req.user && req.user.userId
    const {id: noteId} = req.params

    const note = await Note.findOne({where: {userId, id: noteId}})

    if(!note){
        res.status(404).json({msg: 'Note not found.'})
        return;
    } 

    res.status(200).json(note)
}

export const createNote = async (req: ExtendedRequest, res: Response): Promise<void> => {
    const userId = req.user && req.user.userId
    const {note} = req.body

    const response = await Note.create({content: note, userId})

    res.status(201).json({msg: 'Note created.'})
}

export const updateNote = async (req: ExtendedRequest, res: Response): Promise<void> => {
    const userId = req.user && req.user.userId
    const {id: noteId} = req.params
    const {note} = req.body

    const response = await Note.update({content: note},{where: {userId, id: noteId}})

    if(response[0] === 0){
        res.status(404).json({msg: 'Note not found.'})
        return;
    }

    res.status(200).json({msg: "Note updated successfully."})
}

export const deleteNote = async (req: ExtendedRequest, res: Response): Promise<void> => {
    const userId = req.user && req.user.userId
    const {id: noteId} = req.params

    const response = await Note.destroy({where: {userId, id: noteId}})

    if(response === 0){
        res.status(404).json({msg: 'Note not found'})
        return;
    }

    res.status(200).json({msg: "Note deleted successfully."})
}