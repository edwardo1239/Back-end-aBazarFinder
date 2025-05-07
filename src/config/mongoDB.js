import chalk from 'chalk';
import { config } from "../config/index.js";
import { DatabaseConnectionError } from "../schemas/errors.js";
import { MongoClient } from 'mongodb';

let db = null;

export const initMongoDB = async () => {
    try {

        console.log(chalk.blue(`🔄 Conectando a la base de datos en ${config.MONGODB_URI}...`));
        const mongoClient = new MongoClient(config.MONGODB_URI);
        await mongoClient.connect();

        db = mongoClient.db("itemsBazar")

        console.log(chalk.green('✅ Conexión exitosa a la base de datos.'));
    } catch (err) {
        console.log(chalk.red('❌ Error al conectar a la base de datos.'));
        throw new DatabaseConnectionError("Error al conectar a la base de datos", 500);
    }
}

export const getDB = () => {
    if (!db) throw new DatabaseConnectionError("❌ La base de datos no está inicializada", 500);
    return db;
};