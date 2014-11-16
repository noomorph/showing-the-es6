var collection = [ { id: 1 }, { id: 2 } ],
    found;

found = collection.filter(function (obj) {
    return obj.id === 2;
})[0]; // known hack

found = collect.find(function (obj) {
    return obj.id === 2;
}); // better, because it stops when finds
