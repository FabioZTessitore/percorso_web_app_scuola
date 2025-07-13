# Percorso Web App Scuola

## Percorso per lo sviluppo di Web App - Node/Vue

### Parte 1: Node

1. **Hello**

   1. Creare la directory 01_hello
   1. Entrare nella directory 01_hello
   1. Aprire un terminale nella directory 01_hello
   1. Lanciare l'editor Visual Studio Code con `code .`
   1. Creare il file `hello.js`
   1. Scrivere nel file `hello.js` il codice:

      ```js
      console.log("Hello, World!");
      ```

   1. Nel terminale eseguire il programma con:

      ```bash
      node hello.js
      ```

1. **Impostare un progetto npm**

   1. Eseguire i passaggi 1, 2, 3 e 4 come in Hello (creare la directory 02_npm)
   1. Da terminale inizializzare la directory per l'utilizzo di npm:

   ```bash
   npm init -y
   ```

   3. Controllare che sia stato creato il file `package.json`
   4. Aggiungere lo script `start` per l'avvio:

   ```json
   "scripts": {
       "start": "node index.js",
       "test": "..."
   }
   ```

   5. Creare il file `index.js` con contenuto:

   ```js
   console.log("Hello");
   ```

   6. Nel terminale eseguire il programma con:

   ```bash
   npm run start
   ```

1. **Importare dipendenze**

   1. Ripetere tutti i passaggi come nell'esempio 2 (creare la directory 03_dipendenze)
   1. Nel terminale installare la libreria `lodash` con:

   ```bash
   npm install lodash
   ```

   3. Modificare il file index.js:

   ```js
   const _ = require("lodash");

   const v = [1, 2, 3];
   console.log(v);

   _.fill(v, "c");
   console.log(v);
   ```

   4. Nel terminale eseguire il programma con:

   ```bash
   npm run start
   ```

   5. Sostituire `require` con `import` nel file `index.js`

   ```js
   import _ from "lodash";
   ```

   6. Abilitare l'uso di `import` aggiungendo al file `package.json`

   ```js
   "type": "module",
   ```

   7. Eseguire ancora il programma con:

   ```bash
   npm run start
   ```

1. **Le funzioni**

   1. Ripetere tutti i passaggi come nell'esempio 2 (creare la directory 04_funzioni)
   1. Modificare il file `index.js`. Creare una funzione di esempio

   ```js
   function somma(a, b) {
     return a + b;
   }
   ```

   3. Invocarla e stampare il risultato dell'operazione

   ```js
   const c = somma(3, 5);
   console.log(c);
   ```

   4. Eseguire il programma
   1. Creare una seconda funzione, anonima, e assegnarla ad una variabile

   ```js
   const prodotto = function (a, b) {
     return a * b;
   };
   ```

   6. Invocarla e stampare il risultato

   ```js
   const p = prodotto(3, 5);
   console.log(p);
   ```

   7.Eseguire il programma
   8.Creare una funzione mediante l'operatore freccia

   ```js
   const doppio = (x) => 2 * x;
   ```

   9. Invocarla e stampare il risultato

   ```js
   const d = doppio(3);
   console.log(d);
   ```

1. **Callback**
   1. Creare la directory 05_callback e inizializzare npm
   1. Modificare il file `index.js`. Creare una funzione che stampa un messaggio
   ```js
   function stampaMessaggio(msg) {
     console.log(msg);
   }
   ```
   3. Creare una seconda funzione che prende come ultimo parametro una funzione, detta di _callback_. La funzione effettuerà il proprio lavoro e al termine invocherà la funzione di callback
   ```js
   const stampaFoo = (cb) => {
     console.log("foooooooooooo");
     cb("Finito");
   };
   ```
   4. Invocare `stampaFoo`
   ```js
   stampaFoo(stampaMessaggio);
   ```
   5.Eseguire il programma
