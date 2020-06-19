import React from 'react';

export const LoggedStatus = ({user}) => (
    <p className={'text-white p-0 m-0'}>{user && user['name'] ?
        `${user['name']}` :
        'Вход не выполнен'}
    </p>
);
