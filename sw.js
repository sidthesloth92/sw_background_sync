self.addEventListener('sync', function(event) {
    if (event.tag == "oneTimeSync") {
        console.log("One Time Sync Fired");
    }
});

self.addEventListener('periodicsync', function(event) {
    console.dir(event);
    if (event.tag == "periodicSync") {
        console.log("Periodic Sync fired");
    }
});
