# Percorso Web App Scuola

## Percorso per lo sviluppo di Web App - Node/React

### Parte 1: Node

1. **Impostare un progetto npm**
   1. Creare la directory 02_npm
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

   1. Creare il file `index.js` con contenuto:

      ```js
      console.log("Hello, World!");
      ```

   1. Nel terminale eseguire il programma con:

      ```bash
      npm run start
      ```
