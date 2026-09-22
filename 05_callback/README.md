# Percorso Web App Scuola

## Percorso per lo sviluppo di Web App - Node/React

### Parte 1: Node

1. **Callback**
   1. Creare la directory 05_callback
   1. Aprire la directory con Visual Studio Code
   1. Da terminale inizializzare la directory per l'utilizzo di npm
   1. Aggiungere lo script `start` per l'avvio
   1. Creare il file `index.js`. Creare una funzione che stampa un messaggio:

      ```js
      function stampaMessaggio(msg) {
        console.log(msg);
      }
      ```

   1. Creare una seconda funzione che prende come ultimo parametro una funzione, detta di _callback_. La funzione effettuerà il proprio lavoro e al termine invocherà la funzione di callback!

      ```js
      const stampaFoo = (cb) => {
        // stampaFoo fa il suo lavoro
        console.log("foooooooooooo");

        // quando termina chiama la funzione di callback
        cb("Finito");
      };
      ```

   1. Invocare `stampaFoo`

      ```js
      // chiama stampaFoo e passa come
      // funzione di callback la stampaMessaggio
      // creata in precedenza
      stampaFoo(stampaMessaggio);
      ```

   1. Eseguire il programma
