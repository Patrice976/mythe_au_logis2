// Gère la transition du header //

window.addEventListener('scroll', function() {

    const header = document.querySelector('header');
    let logo = document.getElementById('logo') ;
    let Y = scrollY ;

       if (window.scrollY > 0) {
        header.classList.add('Reduce');
        logo.src= 'ressource img/logo image - blanc.png'

    } else {
        header.classList.remove('Reduce');
        logo.src= 'ressource img/Logo ligne - blanc.png'
    }
})

// Bonton panthéon affichage de contenu au clic  //

const ButtonToDisplay = {
    'buttongreek' : 'display_greek',
    'buttonnorse' : 'display_norse',
    'buttonegyptian' : 'display_egyptian',
    'buttonhindu' : 'display_hindu',
    'buttonchinois' : 'display_chinois',
    'buttonjapan' : 'display_japan',
    'buttonarthurian' : 'display_arthurian',
    'buttonmayan' : 'display_mayan',
    'buttonceltic' : 'display_celtic',
}
let buttons = document.querySelectorAll('#boutonpantheon button')
console.log(buttons)

for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index];
    element.addEventListener ('click', function() {
        alert('coucou')
         // ON doit recuperer l'id du bouton clické
        let id = this.getAttribute('id')
        // EN utilisant ton objet ButtonToDIsplay, recuperer l'id correspondant de la div
        let display = ButtonToDisplay[id]
        // Selectionner la div grace a son id
        let target_div = document.getElementById(display)
        console.log(target_div)
        // Afficher la div
        target_div.classList.remove('hide')

    })
}

// let buttongreek = document.getElementById('buttongreek')
// let visible=false


// buttongreek.addEventListener ('click', function() {

//     const div = document.getElementById('display_greek')

//     if (visible==false) {
//         div.classList.remove('hide') ;
//         visible=true
 
//     } else { 
//     div.classList.add('hide')
//     visible = false
//     }
   
// })



