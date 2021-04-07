//GOAL: stampare a schermo il contenuto di una variabile dentro un h1
//BONUS: utilizzare un data come nome del file immagine in un tag img

function initVue() {
  let titleImage = new Vue({
    el: "#app",
    data: {
      msg: "Titolo",
      paragrafo: "",
      immagine1: "img/verdena20.png",
      immagine2: "img/palletto.png",
      firstImg: true,
    },
    methods: {
      //change: function () {
      // if (
      //   this.msg == "Titolo" &&
      //   this.immagine == "img/verdena20.png" &&
      //   this.paragrafo == ""
      // ) {
      //   this.msg = "Nuovo titolo!";
      //   this.paragrafo = "Ta-daaaaa!";
      //   this.immagine = "img/palletto.png";
      // } else {
      //   this.msg = "Titolo";
      //   this.paragrafo = "";
      //   this.immagine = "img/verdena20.png";
      // }

      flip: function () {
        this.firstImg = !this.firstImg;

      },
    },
  });
}

initVue();

$(initVue);
