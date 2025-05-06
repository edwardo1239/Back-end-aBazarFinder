import { z } from 'zod';

// Expresión regular para evitar scripts y etiquetas HTML básicas
const safeString = () => z.string()
    .min(1, 'Este campo es requerido')
    .max(255, 'Máximo 255 caracteres')
    .regex(/^(?!.*<script)(?!.*<.*?>)[\w\s.,:;áéíóúÁÉÍÓÚüÜñÑ\-_/()]+$/i, 'Caracteres inválidos o potencialmente peligrosos');

export const itemSchema = z.object({
    precio: z.number({ invalid_type_error: 'El precio debe ser un número' })
        .positive('El precio debe ser positivo'),
    descripcion: safeString(),
    marca: safeString(),
    stock: z.number({ invalid_type_error: 'El stock debe ser un número' })
        .int('El stock debe ser un número entero')
        .nonnegative('El stock no puede ser negativo'),
    categoria: safeString(),
    createAt: z.string().refine(
        (val) => !isNaN(Date.parse(val)),
        { message: 'Fecha inválida' }
    ),
});

export function validateItem(data) {
    return itemSchema.safeParse(data);
}

export const validateSearchQuery = (data) => {
    const schema = z.string()
        .min(1, 'La búsqueda no puede estar vacía')
        .max(100, 'La búsqueda es demasiado larga')
        .regex(/^(?!.*<script)(?!.*<.*?>)[\w\s.,:;áéíóúÁÉÍÓÚüÜñÑ\-_/()]+$/i, 'Caracteres inválidos o potencialmente peligrosos');
    return schema.safeParse(data);
}

export const validateMongoId = (id) => {
    const schema = z.string()
        .length(24, 'ID inválido')
        .regex(/^[a-fA-F0-9]{24}$/, 'ID inválido');
    return schema.safeParse(id);
}
