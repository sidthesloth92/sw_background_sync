self.addEventListener('sync', function(event) {
    if (event.registration.tag == "oneTimeSync") {
        console.dir(self.registration);
        console.log("One Time Sync Fired");
    }
});

self.addEventListener('periodicsync', function(event) {
    console.dir(event);
    if (event.registration.tag == "periodicSync") {
        console.log("Periodic Sync fired");
    }
});
