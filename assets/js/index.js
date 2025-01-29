// Gère la transition du header //

window.addEventListener("scroll", function () {
  const Header = document.querySelector("header");
  let LogoLandingPage = document.getElementById("logo");
  let Y = scrollY;

  if (window.scrollY > 0) {
    Header.classList.add("Reduce");
    LogoLandingPage.src = "assets/ressourceimg/logo image - blanc.png";
  } else {
    Header.classList.remove("Reduce");
    LogoLandingPage.src = "assets/ressourceimg/Logo ligne - blanc.png";
  }
});

// Bonton panthéon affichage de contenu au clic  //
const ButtonToDisplay = {
  button_greek: "display_greek",
  button_norse: "display_norse",
  button_egyptian: "display_egyptian",
  button_hindu: "display_hindu",
  button_chinese: "display_chinese",
  button_japan: "display_japan",
  button_arthurian: "display_arthurian",
  button_mayan: "display_mayan",
  button_celtic: "display_celtic",
};
let BoutonPantheon = document.querySelectorAll("#bouton_pantheon button");
let DisplayPantheon = document.querySelectorAll(".display_pantheon section");
let displayStatus = false;

for (let index = 0; index < BoutonPantheon.length; index++) {
  //On va parcourir l'enssemble des boutons
  const element = BoutonPantheon[index];
  element.addEventListener("mouseup", function () {
    //On va attaché au boutton cliqué un eventListener

    for (let i = 0; i < DisplayPantheon.length; i++) {
      //boucle pour cacher toute les éléments display
      const ButtonContent = DisplayPantheon[i]; //On parcours l'enssemble des éléments du display panthéon
      ButtonContent.classList.add("hide"); // On va cacher ces éléments
    }
    // ON doit recuperer l'id du bouton clické
    let ButtonID = this.getAttribute("id");
    // EN utilisant ton objet ButtonToDIsplay, recuperer l'id correspondant de la div
    let Display = ButtonToDisplay[ButtonID];
    // Selectionner la div grace a son id
    let TargetDiv = document.getElementById(Display);
    // Afficher la div
    TargetDiv.classList.remove("hide");
  });
  displayStatus = true;
}

window.addEventListener("mouseup", function () {
  if (displayStatus == true) {
    for (let i = 0; i < DisplayPantheon.length; i++) {
      //boucle pour cacher toute les éléments display
      const ButtonContent = DisplayPantheon[i]; //On parcours l'enssemble des éléments du display panthéon
      ButtonContent.classList.add("hide"); // On va cacher ces élément
    }
  }
  displayStatus = false;
});

// Logique pour afficher le nom du pathéon au hover du bouton 

//liste de toutes les div button/titre
const button_title_to_show = 
["greek_button_title",
"norse_button_title",
"egyptian_button_title",
"hindu_button_title",
"chinese_button_title",
"japan_button_title",
"arthurian_button_title",
"mayan_button_title",
"celtic_button_title"
]




for (let index = 0; index < button_title_to_show; index++) {
  const title_to_show = array[index];
  
  //On cible dans le dom la div qui contient le bouton et son text
let div = document.getElementById(array[index])
//On cible la balise p dans la div greek_button_title
title = div.querySelector("p");

//on fait apparait le texte au hover
div.addEventListener("mouseover", function() {
  title.style.opacity = '1';
})

//on fait disparaitre le texte en sortie de hover 
div.addEventListener("mouseout", function() {
    title.style.opacity = "0";
})
}
