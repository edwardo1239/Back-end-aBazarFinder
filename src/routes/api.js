import express from 'express'
import { ItemServiceRepository } from '../services/itemService.js'
export const apiRout = express.Router()

apiRout.get("/items", async (req, res) => {
    try{
        const response = await ItemServiceRepository.getItems(req.query.q)
        res.json({ message: "Ok", status:200, data: response })
    } catch (err){
        res.json({ name: err.name, message: err.message, status: err.code })
    }
})

apiRout.get("/items/:id", async (req, res) => {
    try {
        const response = await ItemServiceRepository.getItemById(req.params.id);
        res.json({ message: "Ok", status: 200, data: response });
    } catch (err) {
        res.json({ name: err.name, message: err.message, status: err.code });
    }
});

apiRout.post("/items", async (req, res) => {
    try{
        await ItemServiceRepository.postItem(req.body);
        res.json({ message: "Item creado correctamente", status:202 })
    } catch (err){
        res.json({ name: err.name, message: err.message })
    }
})