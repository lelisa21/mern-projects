import Document from "../models/Document.js";
import Flashcard from "../models/Flashcard.js"
import Quiz from "../models/Quizz.js"
import {extractTextFromPDF} from "../utils/pdfParser.js"
import {chunkText} from "../utils/textChunker.js"
import fs from 'fs/promises'
import mongoose from "mongoose";


export const uploadDocument = async(req, res, next) => {
    try {
        
    } catch (error) {
    //    clean up file on error
    if(req.file){
        await fs.unlink(req.file.path).catch(() => {})
    }
    next(error)
    }
}

export const getDocuments = async(req, res, next) => {
    try {
        
    } catch (error) {
    //    clean up file on error
    if(req.file){
        await fs.unlink(req.file.path).catch(() => {})
    }
    next(error)
    }
}

export const getDocument = async(req, res, next) => {
    try {
        
    } catch (error) {
    //    clean up file on error
    if(req.file){
        await fs.unlink(req.file.path).catch(() => {})
    }
    next(error)
    }
}


export const deleteDocument = async(req, res, next) => {
    try {
        
    } catch (error) {
    //    clean up file on error
    if(req.file){
        await fs.unlink(req.file.path).catch(() => {})
    }
    next(error)
    }
}

export const updateDocument = async(req, res, next) => {
    try {
        
    } catch (error) {
    //    clean up file on error
    if(req.file){
        await fs.unlink(req.file.path).catch(() => {})
    }
    next(error)
    }
}
