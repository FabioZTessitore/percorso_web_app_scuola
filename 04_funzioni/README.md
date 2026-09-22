# Percorso Web App Scuola

## Percorso per lo sviluppo di Web App - Node/React

### Parte 1: Node

1. **Le funzioni**
   1. Creare la directory 04_funzioni
   1. Aprire la directory con Visual Studio Code
   1. Da terminale inizializzare la directory per l'utilizzo di npm
   1. Aggiungere lo script `start` per l'avvio
   1. Creare il file `index.js`. Creare una funzione di esempio:

      ```js
      function somma(a, b) {
        return a + b;
      }
      ```

   1. Invocarla e stampare il risultato dell'operazione

      ```js
      const c = somma(3, 5);
      console.log(c);
      ```

   1. Eseguire il programma
   1. Creare una seconda funzione, anonima, e assegnarla ad una variabile

      ```js
      const prodotto = function (a, b) {
        return a * b;
      };
      ```

   1. Invocarla e stampare il risultato

      ```js
      const p = prodotto(3, 5);
      console.log(p);
      ```

   1. Eseguire il programma
   1. Creare una funzione mediante l'operatore freccia

      ```js
      const doppio = (x) => 2 * x;
      ```

   1. Invocarla e stampare il risultato

      ```js
      const d = doppio(3);
      console.log(d);
      ```

   1. Eseguire il programma
