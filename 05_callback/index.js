function stampaMessaggio(msg) {
  console.log(msg);
}

const stampaFoo = (cb) => {
  console.log("foooooooooooo");
  cb("Finito");
};

stampaFoo(stampaMessaggio);
