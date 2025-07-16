# Percorso Web App Scuola

## Percorso per lo sviluppo di Web App - Node/Vue

### Parte 2: Node - Express

**Express**

1.  Operazioni preliminari

    Per iniziare creare la directory, inizializzare npm
    e installare `express`. Modificare
    il file `package.json` per abilitare l'uso di `import`
    e creare lo script di start.

    Creare il file `index.js`:

    ```js
    import express from "express";

    const app = express();

    console.log(app);
    ```

    e avviare il programma con `npm run start`.

1.  Mettere il server in attesa

    La variabile `app` creata in precedenza contiene una serie di metodi utili per
    gestire un server. La prima di queste è `listen()` che permette all'app di restare
    in attesa di connessioni da parte dei client. Bisogna fornirle la porta sulla
    quale il server è in ascolto.

    ```js
    const port = 3000;

    app.listen(port);
    ```

    Avviare l'applicazione e notare che dopo l'avvio essa non termina, ma resta in attesa.
    Utilizziamo un browser web come client e andiamo all'indirizzo locale `127.0.0.1:3000`.

    Sulla pagina comparirà il messaggio `Cannot GET /`. Significa che il server ha risposto,
    ma non sa come gestire la richiesta.

1.  Segnalare l'avvio dell'app

    Si può utilizzare una funzione di callback per segnalare l'avvio dell'app nel terminale del server.
    Dovrebbe solo stampare
    un messaggio, quindi potrebbe essere qualcosa del tipo:

    ```js
    function serverStarted() {
      console.log(`app in ascolto sulla porta ${port}`);
    }

    app.listen(port, serverStarted);
    ```

    Questa funzione va usata solo una volta, passata come parametro alla funzione `listen()`.
    Si può quindi definirla direttamente laddove serve seguendo uno standard molto usato
    per le applicazioni node:

    ```js
    app.listen(port, () => {
      console.log(`app in ascolto sulla porta ${port}`);
    });
    ```

    Il codice del programma server è cambiato, prima di
    avviarlo bisogna interrompere l'esecuzione precedente!

1.  Gestire le richieste del client

    Quando il browser web si collega al server, effettua una richiesta di tipo `GET`.
    Per gestirla bisogna usare `app.get()` specificando quale indirizzo si vuole gestire
    (`/` per iniziare) e quale funzione dovrà andare in esecuzione per gestire la
    richiesta stessa.

    ```js
    app.get("/", (req, res) => {
      res.send("Hello, World!");
    });
    ```

    Riavviare l'applicazione, riprendere il browser web e andare
    all'indirizzo locale `127.0.0.1:3000`. Stavolta sullo schermo comparirà
    il messaggio di saluto spedito dal server.
