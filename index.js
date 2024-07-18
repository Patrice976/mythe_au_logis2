// Gère la transition du header //

window.addEventListener('scroll', function() {

    const Header = document.querySelector('header');
    let LogoLandingPage = document.getElementById('logo') ;
    let Y = scrollY ;

       if (window.scrollY > 0) {
        Header.classList.add('Reduce');
        LogoLandingPage.src= 'ressourceimg/logo image - blanc.png'

    } else {
        Header.classList.remove('Reduce');
        LogoLandingPage.src= 'ressourceimg/Logo ligne - blanc.png'
    }
})

// Bonton panthéon affichage de contenu au clic  //
const ButtonToDisplay = {
    'button_greek' : 'display_greek',
    'button_norse' : 'display_norse',
    'button_egyptian' : 'display_egyptian',
    'button_hindu' : 'display_hindu',
    'button_chinois' : 'display_chinois',
    'button_japan' : 'display_japan',
    'button_arthurian' : 'display_arthurian',
    'button_mayan' : 'display_mayan',
    'button_celtic' : 'display_celtic',
}
let BoutonPantheon = document.querySelectorAll('#bouton_pantheon button')
let DisplayPantheon = document.querySelectorAll('.display_pantheon section')


for (let index = 0; index < BoutonPantheon.length; index++) { //On va parcourir l'enssemble des boutons 
    const element = BoutonPantheon[index];
    element.addEventListener ('click', function() { //On va attaché au boutton cliqué un eventListener 

            for (let i = 0; i < DisplayPantheon.length; i++) {  //boucle pour cacher toute les éléments display
                const ButtonContent = DisplayPantheon[i]; //On parcours l'enssemble des éléments du display panthéon 
                ButtonContent.classList.add('hide') // On va cacher ces éléments 
            }
         // ON doit recuperer l'id du bouton clické
        let ButtonID = this.getAttribute('id')
        // EN utilisant ton objet ButtonToDIsplay, recuperer l'id correspondant de la div
        let Display = ButtonToDisplay[ButtonID]
        // Selectionner la div grace a son id
        let TargetDiv = document.getElementById(Display)
        // Afficher la div
        TargetDiv.classList.remove('hide')
    })
}






