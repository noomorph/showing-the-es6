try {
    try {
        var site = waitUntilSiteIsReady();
        doSomethingUseful(site);
    } catch (err) {
        if (!canHandle(err)) {
            throw err;
        }
    }
}
catch (err) {
    console.log('generic error', err);
}


waitUntilSiteIsReady().
    then(function (site) {
        doSomethingUseful();
    }, function (err) {
        if (!canHandle(err)) {
            return Promise.reject(err);
        }
    }).
    then(null, function (e) {
        console.log('generic error', err);
    });
