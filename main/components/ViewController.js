import { React, useState, useEffect } from 'https://unpkg.com/es-react';

export default () => {
    const paramsSet = Array.from(new URLSearchParams(document.location.search));

    const [path, setPath] = useState(document.location.pathname);
    const [params, setParams] = useState(paramsSet);
    
    useEffect(
        () => {
            document.addEventListener('location', function (event) {
                setPath(event.detail.path);
                setParams(event.detail.params);
            });
        }
    );

    switch (path) {
        case '/':
        return React.createElement('micro-home', {}, 'home');

        case '/shop':
        return React.createElement('micro-shop', {}, 'shop');

        case '/search':
        return React.createElement('micro-search', {}, 'search: ' + params);
    }
};
