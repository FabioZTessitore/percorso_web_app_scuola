# Percorso Web App Scuola

## Percorso per lo sviluppo di Web App - Node/React

### Parte 3: React

**React - Componenti**

1.  Operazioni preliminari

    Creare una nuova app React con il comando:

    ```bash
    npx create-next-app@latest my-app --yes
    ```

    Entrare nella cartella e avviare l'app appena creata:

    ```bash
    cd my-app
    npm run dev
    ```

1.  La struttura del progetto

    Nella cartella del progetto è presente una sottocartella `app`
    all'interno della quale sono presenti i file iniziali e dove
    andremo a inserire i nostri nuovi file.

    Per iniziare aprire il file `page.tsx` e cancellare tutto ciò
    che è presente all'interno del tag `main`. Cancellare anche
    la riga iniziale `import Image from "next/image";`.

    All'interno del tag `main` inserire un messaggio (per esempio `Hello, World!`)

1.  Creare un nuovo componente

    Nella cartella `app` creare la sottocartella `components` e all'interno di questa
    creare un nuovo file `Hello.tsx`

    ```tsx
    export default function Hello() {
      return <h1>Hello, World!</h1>;
    }
    ```

1.  Aggiungere il componente alla home page

    Nel file `page.tsx` importare il nuovo componente con:

    ```tsx
    import Hello from "./components/Hello";
    ```

    e poi sostituire il messaggio `Hello, World!` inserito precedentemente
    con il nuovo componente:

    ```html
    <Hello />
    ```

1.  Passare dati al componente

    Il nostro componente funziona, ma saluta sempre tutto il mondo!
    Sarebbe più utile se chi lo usa potesse decidere chi salutare
    scrivendo qualcosa del tipo:

    ```html
    <Hello firstname="planet Earth" />
    ```

    Modificare il componente `Hello` in modo che possa ricevere
    un oggetto contenente tutti gli attributi che gli vengono passati:

    ```tsx
    export default function Hello({ firstname = "World" }) {
      return <h1>Hello, {firstname}!</h1>;
    }
    ```

1.  Derivare dati dinamicamente

    A volte a partire dai dati passati a un componente, esso necessita
    di derivare nuovi dati. Per fare un esempio semplice consideriamo
    il caso in cui il nostro componente `Hello` riceva sia il nome che
    il cognome della persona da salutare e prima di effettuare il render
    venga derivato il nome completo (concatenazione di nome e cognome):

    ```html
    <Hello firstname="Giuseppe" lastname="Verdi" />
    ```

    ```tsx
    export default function Hello({ firstname = "World", lastname = "" }) {
      let fullname = firstname;
      if (lastname !== "") {
        fullname += " " + lastname;
      }

      return <h1>Hello, {fullname}!</h1>;
    }
    ```

1.  Esercizio

    Creare un componente in cui siano presenti due pulsanti, uno con il `+` e uno con il `-`.
    Il componente visualizzerà un numero (partendo da `0`) e quando viene premuto uno dei
    pulsanti aggiorna il valore visualizzato.
