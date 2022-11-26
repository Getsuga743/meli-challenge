const Errors = {
    ERR_BAD_REQUEST: 'Hubo un error',
    ERR_NOT_FOUND: 'No se encontró lo que estabas buscando',
    ERR_INTERNAL_SERVER: 'Se rompió todo',
};

export const getValidationError = (error) => {
    const { code } = error;
    if (code) {
        if (Errors[code]) {
            return Errors[code];
        }
    }
};
