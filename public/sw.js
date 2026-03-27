self.addEventListener("install", (event) => {
    console.log("Service Worker Installed");
});

self.addEventListener("push", (event) => {
    self.registration.showNotification("Healthcare Alert", {
        body: "New patient added!",
    });
});