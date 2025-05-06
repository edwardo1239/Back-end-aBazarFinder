import { ItemsRepository } from "../controllers/itemController.js";
import { BusinessLogicError } from "../schemas/errors.js";
import { getZodErrorMessage } from "../utils/zodUtils.js";
import { validateItem, validateSearchQuery, validateMongoId } from '../validations/itemsValidations.js';

export class ItemServiceRepository {
    static async postItem(data){
        // Validar los datos antes de continuar
        const result = validateItem(data);
        if (!result.success) {
            throw new BusinessLogicError(`${getZodErrorMessage(result)}`, 1002);
        }
        try{
            await ItemsRepository.postItems(data);
        } catch (err){
            throw new BusinessLogicError(err.message, 1001);
        }
    }
    static async getItems(data){
        const result = validateSearchQuery(data);
        if (!result.success) {
            throw new BusinessLogicError(`${getZodErrorMessage(result)}`, 1002);
        }
        try{
            const response = await ItemsRepository.getitems(data);
            return response;
        } catch (err){
            throw new BusinessLogicError(err.message, 1001);
        }
    }
    static async getItemById(id) {
        const result = validateMongoId(id);
        if (!result.success) {
            throw new BusinessLogicError('ID inválido', 400);
        }
        try {
            const response = await ItemsRepository.getItemById(id);
            if (!response) {
                throw new BusinessLogicError('Item no encontrado', 404);
            }
            return response;
        } catch (err) {
            throw new BusinessLogicError(err.message, 1001);
        }
    }
}
