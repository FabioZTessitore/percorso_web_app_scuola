# Percorso Web App Scuola

## Percorso per lo sviluppo di Web App - Node/Vue

### Parte 2: Node - Express

**Express - HTML**

1.  Operazioni preliminari

Partire dall'applicazione `06_express`.

1.  Creare una pagina Web

    Creare una directory `public` e inserire al suo interno una
    semplice pagina HTML `index.html` completa di foglio di stile CSS esterno `style.css`.

1.  I file statici

    La directory `public` contiene file statici. Bisogna indicare a Node
    dove si trovano:

    ```js
    app.use(express.static("public"));
    ```

1.  Gestire le richieste del client

    Quando arriva la richiesta da parte del client,
    il server deve inviare la pagina HTML e non un semplice
    messaggio.

    ```js
    app.get("/", (req, res) => {
      // sendHTML va a cercare nella directory
      // contenente i file statici.
      // Nella stessa directory verrà cercato
      // il file style.css
      res.sendHTML("index.html");
    });
    ```

    Riavviare l'applicazione, riprendere il browser web e andare
    all'indirizzo locale `127.0.0.1:3000`. Stavolta sullo schermo comparirà
    la pagina Web con il messaggio di saluto spedita dal server.
