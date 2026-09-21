const CACHE_NAME = "agenda-v1";
const ARQUIVOS = [
    "index.html",
    "style.css",
    "app.js",
    "icon-192x192.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return Promise.all(
                    ARQUIVOS.map(arquivo => {
                        return cache.add(arquivo).catch(erro => {
                            console.error("Erro ao cachear o arquivo: " + arquivo + " -> Verifique se o caminho ou nome estao corretos.");
                        });
                    })
                );
            })
    );
});


self.addEventListener("activate", event => {
    console.log("Service Worker ativado");
});


self.addEventListener("fetch", event => {
  
    if (event.request.url.endsWith("/teste-sw")) {
        event.respondWith(new Response("Resposta criada pelo Service Worker!"));
        return;
    }


    event.respondWith(
        caches.match(event.request)
            .then(respostaCache => {
                
                return respostaCache || fetch(event.request);
            })
    );
});
