const errors = { 401: 'Ошибка авторизации в удаленном ресурсе' };

export function decodeError(error) {
    return errors[error.errorCode || 'Неизвестная ошибка'];
}

