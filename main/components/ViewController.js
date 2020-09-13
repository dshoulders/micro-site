import { React, useState, useEffect } from 'https://unpkg.com/es-react';

export default () => {
    const paramsSet = new URLSearchParams(document.location.search);

    const [path, setPath] = useState(document.location.pathname);
    const [params, setParams] = useState(paramsSet);
    
    useEffect(
        () => {
            document.addEventListener('location', function (event) {
                const params = new URLSearchParams(document.location.search);
                setPath(document.location.pathname);
                setParams(params);
            });
        }
    );

    switch (path) {
        case '/':
        return React.createElement('micro-home', {}, 'home');

        case '/shop':
        return React.createElement('micro-shop', {}, 'shop');

        case '/search':
        return React.createElement('micro-search', {}, 'search: ' + params.get('query'));

        default:
        return React.createElement('micro-home', {}, 'home');
    }
};
