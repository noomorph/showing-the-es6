function genericErrorHandler(err) {
    console.log('generic error', err);
}

waitUntilSiteIsReady({
    success: function (site) {
        doSomethingUseful(site, {
            success: function () {
                // go on...
            },
            error: function (err) {
                if (!canHandle(err)) {
                    genericErrorHandler(err);
                }
            }
        });
    },
    error: genericErrorHandler
});
