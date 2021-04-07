//GOAL: stampare a schermo il contenuto di una variabile dentro un h1
//BONUS: utilizzare un data come nome del file immagine in un tag img

function initVue() {
  let titleImage = new Vue({
    el: "#app",
    data: {
      msg: "Titolo",
      paragrafo: "",
      immagine: "img/verdena20.png",
    },
    methods: {
      change: function () {
        if (
          this.msg == "Titolo" &&
          this.immagine == "img/verdena20.png" &&
          this.paragrafo == ""
        ) {
          this.msg = "Nuovo titolo!";
          this.paragrafo = "Ta-daaaaa!";
          this.immagine = "img/palletto.png";
        } else {
          this.msg = "Titolo";
          this.paragrafo = "";
          this.immagine = "img/verdena20.png";
        }
      },
    },
  });
}

initVue();

$(initVue);
