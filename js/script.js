//GOAL: stampare a schermo il contenuto di una variabile dentro un h1
//BONUS: utilizzare un data come nome del file immagine in un tag img

function initVue() {
  let titleImage = new Vue({
    el: "#app",
    data: {
      msg: "Titolo",
      paragrafo: '',
      immagine: "img/verdena20.png",
    },
    methods: {
      change: function () {
        this.msg = "Nuovo titolo!";
        this.paragrafo = 'Ta-daaaaa!'
        this.immagine = "img/palletto.png";
      }
    },
  });
}

initVue();

$(initVue);
