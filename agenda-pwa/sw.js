const CACHE_NAME = "agenda-v1"
const ARQUIVOS = [
    "./",
    "./index.html",
    "./style.css",
    "./app.js",
    "./icon-192x192.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
    );
});

self.addEventListener("activate", event => {
    console.log("Service Worker ativado");
});
self.addEventListener("fetch", (event) => {
    if (event.request.url.endsWith("/teste-sw")) {
        event.respondWith(new Response("Resposta criada pelo Service Worker!"));
        return;
    }
});


