import { React, ReactDOM, useState, useEffect } from 'https://unpkg.com/es-react';

export default () => {
    const [path, setPath] = useState(document.location.pathname);
    
    useEffect(
        () => {
            document.addEventListener('location', function (event) {
                setPath(event.detail.path);
            });
        }
    );

    return path;
};
