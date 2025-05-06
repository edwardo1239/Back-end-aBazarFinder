import { app } from "./src/app/app.js";
import { config } from "./src/config/index.js";
import { initMongoDB } from "./src/config/mongoDB.js";

const RECONNECT_INTERVAL_MS = 5000;

const startServer = async () => {
    app.listen(config.PORT, config.HOST, () => {
        console.log(`Servidor corriendo en http://${config.HOST}:${config.PORT}`);
    })
}

const connectWithRetry = async () => {
    try {
        await initMongoDB();
        startServer();
    } catch (err) {
        console.error('❌ Error al conectar a la base de datos. Reintentando en 5 segundos...');
        setTimeout(connectWithRetry, RECONNECT_INTERVAL_MS);
    }
};

connectWithRetry();