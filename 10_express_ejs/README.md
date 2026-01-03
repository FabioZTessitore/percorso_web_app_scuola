# Percorso Web App Scuola

## Percorso per lo sviluppo di Web App - Node/React

### Parte 2: Node - Express

**Express - HTML EJS Views**

1.  Operazioni preliminari

    Partire dall'applicazione `09_express_form`.

1.  EJS

    Installare il pacchetto `ejs`:

    ```bash
    npm install ejs
    ```

1.  Configurare EJS

    Il pacchetto `ejs` permette di creare delle viste.
    Si tratta di pagine HTML a cui sono aggiunti
    dei _segnaposti_ per poter includere informazioni
    che saranno note solo al momento dell'esecuzione
    dell'applicazione come, ad esempio, i valori da
    sommare e il risultato della somma.

    Creiamo la directory `views`, creiamo il file
    `risultato.ejs` al suo interno e istruiamo il
    server sulla posizione e sul tipo di viste
    che verranno utilizzate:

    ```js
    app.set("view engine", "ejs");
    app.set("views", "views");
    ```

1.  Utilizzare le viste

    Quando arriva la richiesta di effettuare una somma,
    il server calcolerà il risultato e costruirà (_render_)
    la pagina di output partendo dalla vista `risultato.ejs`
    all'interno della quale verrà inserito il risultato

    ```js
    res.render("risultato", { result: sum });
    ```

Riavviare l'applicazione, inserire i numeri e premere il pulsante.
Il server, dopo aver elaborato i dati, invierà una risposta sotto forma
di pagina HTML costruita inserendo i risultati dell'elaborazione
nella vista.
