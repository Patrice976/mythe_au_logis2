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
    'buttonnorse' : 'display_norse'

}
let buttongreek = document.getElementById('buttongreek')
let visible=false


buttongreek.addEventListener ('click', function() {

    const div = document.getElementById('hidden')

    if (visible==false) {
        div.classList.remove('hide') ;
        visible=true
 
    } else { 
    div.classList.add('hide')
    visible = false
    }
   
})

