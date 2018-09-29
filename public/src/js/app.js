var deferredPrompt;

if("serviceWorker" in navigator) {
    /* can also mention the scope, ex. .register("/sw.js", {scope: "/help/"}) */
    navigator.serviceWorker
        .register("/sw.js")
        .then(() => {
            console.log("Service worker is registered")
        })
}

window.addEventListener("beforeinstallprompt", e => {
    e.preventDefault();
    deferredPrompt = e;
    return false;
})

