import React from 'react';
export const getInlineSvg = (name, width = 20, height = 20, fillColor = 'white', strokeColor = 'white') => {
    switch (name) {
        case 'roger':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width={width} height={height}
                     fill={fillColor} stroke={strokeColor}>
                    <g>
                        <path
                            d="M4.3 55C2.5 56.1 1 57.2 1 57.4c0 .2 2.9 1.4 6.4 2.6 23.4 7.8 36.6 32.2 39.8 73.8 1.7 21.8-.6 42.2-6.8 61.7-4.3 13.3-17.4 34.3-27.3 44-2.3 2.1-4.1 4.2-4.1 4.6 0 .4 2.6-.1 5.7-1.1 12.1-3.7 19-4.4 28.6-2.7C59 243 64 240.1 68.5 226c1.8-5.7 4.5-9.9 4.5-7 0 .8-.7 4.2-1.5 7.5s-1.4 7.1-1.5 8.5v2.4l1.6-2.2c2.3-3.4 3.4-2.7 3.4 2.2 0 2.5.5 4.8 1 5.1 2.7 1.7 23.3 4.5 32.5 4.5 11.2 0 27.3-2.6 40.6-6.4 4.6-1.4 20.4-7.4 35.1-13.5 37.3-15.3 49.4-18.8 69.3-19.7 12.6-.6 23.3.8 29.7 4.1 4 2 4.3 1.9 5.6-.7.9-1.9 1.1-1.3 1.1 3.8.1 5.3-.3 6.5-2.4 8.6-1.4 1.4-4 3.3-5.8 4.2l-3.2 1.7 4-.6c6.8-1 12.8-4.6 14.8-8.7 3.9-8 3-22-2-27.8-4.2-5.1-7.6-6.2-21.5-7.2-7-.4-14-1.4-15.5-2-2.6-1.1-2.2-1.2 4.9-1.9 4.2-.3 9.3-1.5 11.5-2.5 3.3-1.6 3.8-2.4 4.1-5.7.2-2.1-.6-8.7-1.7-14.7-3-15.5-5.1-32.2-5.1-40.6 0-7.2 0-7.2-3.5-9.3-4.3-2.5-4.4-3.6-.2-5.1 2.9-1 3-1.2 1.5-2.4-2.6-1.9-2.2-2.6 1.6-2.6h3.4l-.1-18.3c0-10 .2-19.1.4-20.2 1.1-5.2-27.8-7.8-45.1-4.2-4.7 1-15 4.1-23 6.8-34.8 12-40.8 13.8-50.8 14.8-12.6 1.3-38.3-.1-63.6-3.5-10.4-1.3-19.4-2.3-20-2.1-.7.2-1.1 4.7-1.1 13.3 0 8.2-.5 13.6-1.2 14.9-1 1.6-1.2.2-1.3-8.2 0-11.2-1.4-19.5-3.5-21.3-1.1-.9-1.2-.4-.8 2.8.3 2.4.1 4.2-.6 4.6-.6.4-1.1.2-1.1-.4 0-2.6-5.4-9.1-9.6-11.6-6-3.5-19.5-8-31.3-10.5-11.7-2.4-13.8-2.4-17.8.1zM199 87.5c1.6.8 3.5 2.4 4.3 3.5 1.4 2 1.4 2 5.8-.5 9-5.1 19.6-2.5 22 5.4 1.1 3.6 1 4.5-1.2 8.7-3.4 6.7-7.5 8.7-16.2 8-6.6-.5-7-.4-11.8 3l-4.9 3.6 3.5 4.1c4.4 5.1 7.9 12.4 9.5 19.9 1.6 7.3.2 15.2-3.8 21.1-1.5 2.3-3.1 4.7-3.5 5.4-.5.8.9 1.9 3.9 3.2 2.6 1.2 4.8 2.1 4.9 2.1.2 0 .6-1.1.9-2.4.3-1.3 2.2-3.8 4.1-5.5 2.9-2.5 4.5-3.1 8.1-3.1 3.9 0 5.1.5 7.9 3.3 3.1 3.1 5.5 8.8 5.5 13 0 7.7-10.6 13.1-19.4 9.7-2.5-.9-2.6-.8-2.6 2.8 0 6.7-5 11.3-10 9.2-4.4-1.8-6.4-8.9-4-14.5.6-1.6-.1-2.9-3.3-6.3-2.3-2.3-4.4-4.2-4.8-4.2-.4 0-2.5 1-4.8 2.3l-4 2.3 2.9 4.5c1.7 2.4 3 4.7 3 5.2 0 .8-4.1 2.6-8.1 3.4-2.5.5-2.8.1-4.4-4.6-.9-2.8-2.1-5.1-2.6-5.1-1.3 0-1.2 1 1.1 7.5 1.1 3.2 1.9 5.9 1.8 6-.6.5-9.8 2.5-11.2 2.5-1.2 0-1.6-1.5-1.8-6.7-.2-4.4-.7-6.8-1.6-7.1-1.1-.3-1.2 1.2-.6 7.8l.7 8.1-6.4-.7c-3.5-.4-6.6-.8-6.7-1-.2-.1 0-3.4.5-7.3.7-5.4.6-7.1-.3-7.1-.7 0-1.5 2.3-1.9 6.1-.7 5.6-.9 6-2.9 5.5-1.1-.3-3.8-.9-5.8-1.2-2.1-.4-3.8-.8-3.8-1.1 0-.2.7-2 1.5-4 .8-1.9 1.5-4.1 1.5-4.8 0-.7-3.3-2.4-7.2-3.8l-7.3-2.6-4.1 4-4.1 4 3.5 3.5c3.1 3.1 3.4 3.9 2.9 7.2-.8 4.7-5.5 9.2-9.8 9.2-4 0-7.9-3.9-7.9-7.9v-3l-3.5 1.5c-5.1 2.1-11.7 1.8-14.9-.7-5.7-4.5-6.9-10.4-3.6-16.9 5.1-9.9 19.3-12.6 24.6-4.5l1.5 2.4 3.5-2.1 3.4-2-3.3-3.8c-8.1-8.8-8.9-20.8-2.4-34.4 2.1-4.4 3.4-8.2 3-8.6-.4-.4-2.6-1.9-4.7-3.3l-3.9-2.6-1.8 2.3c-4 5.1-16 5.5-20.4.6-4.4-4.9-2.4-15.9 3.7-20.4 3.1-2.2 11-2.6 14.6-.7 1.8.9 2.1.7 3.1-2.1 2.3-6.6 7-8.6 11.9-5.2 3 2.1 3.1 8.8.1 12l-2.1 2.2 3.2 4.7 3.2 4.6 6.6-6.3c7.9-7.6 11.8-10.1 19.1-12.2 6.4-1.9 12-2 19.3-.5 5.9 1.3 16.3 5.7 20.7 8.8 1.6 1.2 3.1 2.1 3.4 2.1.3 0 1.2-1.9 2-4.3 1.4-4.2 1.4-4.4-1.4-7.5-2.1-2.4-2.9-4.3-2.9-7 0-4.2.6-5.4 3.5-7 2.7-1.5 4.1-1.5 7.5.3z"/>
                        <path
                            d="M132.8 118c-7 3.8-15.5 17-16.4 25.8-.7 5.9 2.4 12.2 7.9 16.6 2.9 2.4 5 3.1 9.7 3.4 8 .6 14.1-2.3 18.2-8.7 2.8-4.3 2.9-5.1 2.6-12.8-.4-6.8-1-9.2-3.9-15-3.5-7-8.2-11.3-12.3-11.3-1.2.1-3.8 1-5.8 2zm16.7 19.3c3.5 5.5 2.2 14.7-2.4 16.2-6.6 2.1-10.8-10.8-5.4-16.7 2.2-2.5 5.9-2.3 7.8.5zM168.8 123.3c-4.6 4.3-4.8 17.5-.5 25.2 5.7 10.1 23.3 11.5 29.9 2.5 2.4-3.2 3.2-8.6 2.4-14.5-.6-3.4-1.6-5.4-4.3-8-7.3-7.1-22.4-9.9-27.5-5.2zm6 14.9c1.9 1.9 1.4 7.3-.7 9.2-1.8 1.7-2 1.7-4-.3-2.3-2.3-2.7-5.2-1.1-8.2 1.2-2.1 4-2.5 5.8-.7zM162.2 159.2c-1.9 1.9-1.4 9.5.8 13.8 1.8 3.5 2.5 4 5.4 4 1.9 0 4.4-.8 5.6-1.8 3.3-2.6 2.1-8-2.9-13.2-3.9-4.1-6.7-5-8.9-2.8zM154.6 163.2c-3.5 5.3-3.9 12.2-.8 11.6 3.3-.6 5.5-9.2 3.3-12.7-.7-1.1-1.2-.8-2.5 1.1z"/>
                    </g>
                </svg>);

        case 'filter':
            return (
                <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" width={width} height={height}
                     fill={fillColor} stroke={strokeColor}>
                    <path d="M8.7 7.7c-.4.3-.7 3.4-.7 6.7v6.1l8.3 8.5c4.6 4.7 14.3 15 21.7 23 7.4 8 14.9 16 16.6 17.7l3.1 3.3h32.6l3.1-3.3C95.1 68 102.6 60 110 52c7.4-7.9 17.2-18.3 21.7-23l8.3-8.5-.3-6.5-.2-6.5-65.1-.3c-35.8-.1-65.4.1-65.7.5zM56.7 79.6c-.4.4-.7 10.9-.7 23.4v22.7l16.2 9.7c8.8 5.3 16.8 9.5 17.7 9.4 1.4-.3 1.6-3.9 1.6-32.8V79.5l-17.1-.3c-9.3-.1-17.3.1-17.7.4z"/>
                </svg>
            );
        case 'edit':
            return (
                <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width={width} height={height}
                     fill={fillColor} stroke={strokeColor}>
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                </svg>
            );

        default:
            return (null);
    }
};
