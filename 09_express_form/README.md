# Percorso Web App Scuola

## Percorso per lo sviluppo di Web App - Node/Vue

### Parte 2: Node - Express

**Express - HTML Form**

1.  Operazioni preliminari

Partire dall'applicazione `07_express_html`.

1.  Creare il form

    Creare un form all'interno della pagina `index.html`
    e aggiornare il foglio di stile secondo necessità.

1.  Gestire le richieste del client

    Quando viene premuto il pulsante presente nel form
    deve essere inviata una richiesta al server.
    Tale richiesta avviene all'indirizzo `/sum` e sarà
    di tipo `POST`. Il server deve gestirla:

    ```js
    app.post("/sum", (req, res) => {
      // qui deve leggere i dati presenti
      // nella richiesta, gestirli e inviare la risposta
    });
    ```

1.  Ottenere i dati

    I dati che arrivano al server saranno presenti all'interno
    dell'oggetto `req.body`, nel corpo della richiesta.
    Purtroppo, però, se si prova a stampare tale oggetto
    con `console.log(req.body)` si ottiene `undefined`.

    Per risolvere il problema, la documentazione di `express`
    dice di aggiungere le righe:

    ```js
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    ```

    Ora la stampa di `req.body` restituisce qualcosa del tipo
    `{ firstnumber: '1', secondnumber: '2' }`. Attenzione
    al fatto che i dati sono considerati stringhe!

1.  Gestire i dati

    I numeri da sommare sono presenti nelle variabili
    `req.body.firstnumber` e `req.body.secondnumber`
    sotto forma di stringhe. Convertiamoli in numeri,
    sommiamoli e infine restituiamo la risposta sotto forma
    di json.

    ```js
    const firstnumber = parseFloat(req.body.firstnumber);
    const secondnumber = parseFloat(req.body.secondnumber);

    const sum = firstnumber + secondnumber;

    res.send({ result: sum });
    ```

Riavviare l'applicazione, inserire i numeri e premere il pulsante.
Il server, dopo aver elaborato i dati, invierà una risposta sotto forma
di json. Nella prossima applicazione tale risposta verrà inserita
in una nuova pagina.
