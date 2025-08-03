# Percorso Web App Scuola

## Percorso per lo sviluppo di Web App - Node/Vue

### Parte 2: Node - Express

**Express - HTML**

1.  Operazioni preliminari

    Partire dall'applicazione `06_express`.

1.  Creare una pagina Web

    Creare una directory `public` e inserire al suo interno una
    semplice pagina HTML `index.html` completa di foglio di stile CSS esterno `style.css`.

1.  Gestire le richieste del client

    Quando arriva la richiesta da parte del client,
    il server deve inviare la pagina HTML e non un semplice
    messaggio. Per inviare il file `index.html` si usa
    la funzione `sendFile()` a cui bisogna passare
    il percorso del file (`path`). È buona pratica non scrivere
    i percorsi in maniera esplicita perché sistemi operativi
    diversi utilizzano metodi diversi per scrivere un path
    e il codice deve poter essere eseguito su server con
    qualunque sistema operativo.
    In pratica bisogna installare il pacchetto `path` con

    ```bash
    npm install path
    ```

    e poi utilizzarlo per creare il percorso.

    ```js
    import path from "path";

    app.get("/", (req, res) => {
      // invia il file index.html presente nella directory public
      res.sendFile(path.resolve("public", "index.html"));
    });
    ```

    Riavviare l'applicazione, riprendere il browser web e andare
    all'indirizzo locale `127.0.0.1:3000`. Stavolta sullo schermo comparirà
    la pagina Web con il messaggio di saluto spedita dal server.
    Purtroppo non verrà caricato il foglio di stile.

1.  I file statici

    La directory `public` contiene file statici. Mentre i file HTML vengono
    inviati dalla funzione `sendFile()`, il foglio di stile viene
    richiesto in un secondo momento e nel codice non è stato indicato
    dove si trova.

    ```js
    app.use(express.static("public"));
    ```

Riavviare l'applicazione, riprendere il browser web e andare
all'indirizzo locale `127.0.0.1:3000`. Stavolta sullo schermo comparirà
la pagina Web con il messaggio di saluto correttamente
formattato secondo le regole del foglio di stile.
