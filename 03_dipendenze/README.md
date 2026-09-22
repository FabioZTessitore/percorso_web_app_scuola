# Percorso Web App Scuola

## Percorso per lo sviluppo di Web App - Node/React

### Parte 1: Node

1. **Importare dipendenze**
   1. Creare la directory 03_dipendenze
   1. Aprire la directory con Visual Studio Code
   1. Da terminale inizializzare la directory per l'utilizzo di npm:

      ```bash
      npm init -y
      ```

   1. Controllare che sia stato creato il file `package.json`
   1. Aggiungere lo script `start` per l'avvio:

      ```json
      "scripts": {
         "start": "node index.js",
         "test": "..."
      }
      ```

   1. Nel terminale installare la libreria `lodash-es` con:

      ```bash
      npm install lodash-es
      ```

   1. Creare il file `index.js`:

      ```js
      const _ = require("lodash-es");

      const v = [1, 2, 3];
      console.log(v);

      _.fill(v, "c");
      console.log(v);
      ```

   1. Nel terminale eseguire il programma con:

      ```bash
      npm run start
      ```

   1. Sostituire `require` con `import` nel file `index.js`

      ```js
      import _ from "lodash-es";
      ```

   1. Abilitare l'uso di `import` modificando il file
      `package.json` come segue (se il campo `type` non
      è presente basta aggiungerlo):

      ```js
      "type": "module",
      ```

   1. Eseguire ancora il programma con:

      ```bash
      npm run start
      ```
