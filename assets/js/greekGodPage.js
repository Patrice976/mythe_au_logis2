// Quand tu clique sur une div ayant la classe .container 
let godDiv = document.querySelectorAll(".container");
console.log('tu debugges tkt');
console.log(godDiv);
// Ajoute lui la classe hoveranimation 
godDiv.forEach((godDiv) => { //Pour toute les div de dieux 
    godDiv.addEventListener("mouseover", function () { //ajoute un event listener au hover 
        console.log('hover');
        this.classList.add("hoveranimation"); // Qui ajouter la classe de l'animation hover
    });

    godDiv.addEventListener("mouseout"), function() {
        this.classList.replace()
    }  //Si ce n'est pas this alors remplace l'animation par celle de fermeture 
        
      
});
// Ajouter aux autre la classe nothoveranimation
// Désactive le mousehover TANT QUE l'animation n'est pas terminé  

