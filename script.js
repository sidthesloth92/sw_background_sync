if (navigator.serviceWorker) {
    console.log("ServiceWorkers are supported");

    navigator.serviceWorker.register('sw.js', {
            scope: './'
        })
        .then(function(reg) {
            console.log("ServiceWorker registered ◕‿◕", reg);
        })
        .catch(function(error) {
            console.log("Failed to register ServiceWorker ಠ_ಠ", error);
        });
}

function registerOneTimeSync() {
    if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.ready.then(function(reg) {
            if (reg.sync) {
                reg.sync.register({
                        tag: 'oneTimeSync'
                    })
                    .then(function(event) {
                        console.log('Sync registration successful', event);
                    })
                    .catch(function(error) {
                        console.log('Sync registration failed', error);
                    });
            } else {
                console.log("Background Sync not supported");
            }
        });
    } else {
        console.log("No active ServiceWorker");
    }
}

function registerPeriodicSync() {
    if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.ready.then(function(reg) {
            if (reg.sync) {
                reg.periodicSync.register({
                        tag: 'periodicSync',
                        minPeriod: 0,
                        powerState: 'auto',
                        networkState: 'any'
                    })
                    .then(function(event) {
                        console.log('Periodic Sync registration successful', event);
                    })
                    .catch(function(error) {
                        console.log('Periodic Sync registration failed', error);
                    });
            } else {
                console.log("Background Sync not supported");
            }
        });
    } else {
        console.log("No active ServiceWorker");
    }
}
