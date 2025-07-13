function stampaMessaggio(msg) {
  console.log(msg);
}

const stampaFoo = (cb) => {
  // stampaFoo fa il suo lavoro
  console.log("foooooooooooo");

  // quando termina chiama la funzione di callback
  cb("Finito");
};

// chiama stampaFoo e passa come
// funzione di callback la stampaMessaggio
// creata in precedenza
stampaFoo(stampaMessaggio);
