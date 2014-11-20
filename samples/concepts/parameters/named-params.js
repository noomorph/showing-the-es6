function named({ req1, req2 }) {
    return [req1, req2];
}

named({ req2: 'y', req1: 'x' });
// ['x', 'y'];
