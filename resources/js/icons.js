import React from 'react';

export const getInlineSvg = (name, width = 20, height = 20, fillColor = 'white', strokeColor = 'white') => {
    switch (name) {
        case 'del':
            return (
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width={width} height={height}
                     fill={fillColor} stroke={strokeColor}>
                    <path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z'/>
                </svg>);

        case 'filter':
            return (
                <svg version='1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150' width={width} height={height}
                     fill={fillColor} stroke={strokeColor}>
                    <path
                        d='M8.7 7.7c-.4.3-.7 3.4-.7 6.7v6.1l8.3 8.5c4.6 4.7 14.3 15 21.7 23 7.4 8 14.9 16 16.6 17.7l3.1 3.3h32.6l3.1-3.3C95.1 68 102.6 60 110 52c7.4-7.9 17.2-18.3 21.7-23l8.3-8.5-.3-6.5-.2-6.5-65.1-.3c-35.8-.1-65.4.1-65.7.5zM56.7 79.6c-.4.4-.7 10.9-.7 23.4v22.7l16.2 9.7c8.8 5.3 16.8 9.5 17.7 9.4 1.4-.3 1.6-3.9 1.6-32.8V79.5l-17.1-.3c-9.3-.1-17.3.1-17.7.4z'/>
                </svg>
            );
        case 'edit':
            return (
                <svg version='1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width={width} height={height}
                     fill={fillColor} stroke={strokeColor}>
                    <path
                        d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z'/>
                </svg>
            );
            case 'search':
            return (
                <svg version='1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width={width} height={height}
                     fill={fillColor} stroke={strokeColor}>
                    <path
                        d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/>
                </svg>
            );

        default:
            return (null);
    }
};
