# Percorso Web App Scuola

## Percorso per lo sviluppo di Web App - Node/Vue

### Parte 2: Node - Express

**Express - HTML Link**

1.  Operazioni preliminari

Partire dall'applicazione `07_express_html`.

1.  Creare una seconda pagina Web

    Aggiungere una seconda pagina html `seconda.html` alla directory `public`
    e aggiornare il foglio di stile secondo necessità.

1.  Creare nella prima pagina un link alla seconda e viceversa.

1.  Gestire le richieste del client

    In questo caso dobbiamo gestire due richieste differenti.
    Una verso `/` e una seconda verso un URL a nostra scelta,
    per esempio `/seconda`. Nel primo caso verrà fornita al
    client la pagina `index.html`, mentre nel secondo caso
    verrà fornita la pagina `seconda.html`.

    Le richieste al server possono avvenire manualmente
    scrivendo l'indirizzo nel browser web oppure cliccando
    sui link presenti nelle pagine, ma non cambia il modo
    in cui tali richieste vengono gestite.

    ```js
    app.get("/", (req, res) => {
      res.sendFile(path.resolve("public", "index.html"));
    });

    app.get("/seconda", (req, res) => {
      res.sendFile(path.resolve("public", "seconda.html"));
    });
    ```

    Riavviare l'applicazione, riprendere il browser web e andare
    all'indirizzo locale `127.0.0.1:3000`. Sullo schermo comparirà
    la pagina Web con il messaggio di saluto e si potrà navigare
    alla seconda pagina tramite link.
