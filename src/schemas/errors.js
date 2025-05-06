export class DatabaseConnectionError extends Error {
    constructor(message, code) {
        super(message);
        this.name = 'DatabaseConnectionError';
        this.type = 'Database Connection Error';
        this.code = code;
    }
}

export class BusinessLogicError extends Error {
    constructor(message, code) {
        super(message);
        this.name = 'BusinessLogicError';
        this.type = 'Business Logic Error';
        this.code = code;
    }
}

export class DatabaseOperationError extends Error {
    constructor(message, code) {
        super(message);
        this.name = 'DatabaseOperationError';
        this.type = 'Database Operation Error';
        this.code = code;
    }
}




