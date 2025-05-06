import rateLimit from 'express-rate-limit';

export function corsMiddle(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // Permite solicitudes de cualquier origen
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Métodos permitidos
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); // Encabezados permitidos
    // Maneja las solicitudes OPTIONS (pre-flight)
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next()
}

export const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // límite por IP
    message: 'Demasiadas solicitudes desde esta IP, inténtalo de nuevo más tarde.',
    standardHeaders: true, // incluye los headers estándar
    legacyHeaders: false, // desactiva los headers obsoletos
});