
export const getZodErrorMessage = (error) => {
    const issues = error?.error?.issues;
    if (Array.isArray(issues)) {
        return issues.map(err => 
            err.code + " " + err.message + " " + err.path[0]
        ).join(', ');
    }
    return 'An unknown error occurred';
};

