self.addEventListener("install", event => {
    console.log("Service Worker instalado");
});

self.addEventListener("activate", event => {
    console.log("Service Worker ativado");
});
self.addEventListener("fetch", event => {
    console.log("Requisição:", event.request.url)
});
self.addEventListener("fetch", event => {

    console.log("URL:");
    console.log(event.request.url);

    console.log("Método:");
    console.log(event.request.method);

});

