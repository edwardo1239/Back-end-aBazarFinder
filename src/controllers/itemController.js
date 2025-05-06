import { getDB } from "../config/mongoDB.js";
import { DatabaseOperationError } from "../schemas/errors.js"

export class ItemsRepository {
    static async getitems(data) {
        try {
            const db = getDB();
            const collection = db.collection("items");
            const resultado = await collection.find(
                {
                    $or: [
                        { marca: { $regex: data, $options: "i" } },
                        { categoria: { $regex: data, $options: "i" } }
                    ]
                },
                {
                    projection: { titulo: 1, categoria: 1, precio: 1 }
                }
            ).toArray();
            console.log(resultado)
            return resultado;
        } catch (err) {
            throw new DatabaseOperationError(err.message, 2002);
        }
    }

    static async postItems(data) {
        try {
            const db = getDB();
            const collection = db.collection("items");
            const result = await collection.insertOne(data);
            if (result.acknowledged) {
                return result.insertedId;
            } else {
                throw new DatabaseOperationError("Error al insertar el documento", 2001);
            }
        } catch (err) {
            throw new DatabaseOperationError(err.message, 2001);
        }
    }

    static async getItemById(id) {
        try {
            const db = getDB();
            const collection = db.collection("items");
            // Convertir id a ObjectId de MongoDB
            const { ObjectId } = await import('mongodb');
            const item = await collection.findOne({ _id: new ObjectId(id) });
            return item;
        } catch (err) {
            throw new DatabaseOperationError(err.message, 2002);
        }
    }
}
