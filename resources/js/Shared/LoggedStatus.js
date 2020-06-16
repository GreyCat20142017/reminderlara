import React from 'react';

export const LoggedStatus = ({user}) => (
    <p>{user && user['name'] ?
        `Выполнен вход под пользователем ${user['name']}` :
        'Вход не выполнен'}
    </p>
);
