// Gère la transition du header //

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    let logo = document.getElementById('logo')
    if (window.scrollY > 0) {
        header.classList.add('Reduce');
        logo.src= 'ressource img/logo image - blanc.png'
        document.getElementById('header').innerHTML = img
    } else {
        header.classList.remove('Reduce');
        logo.src= 'ressource img/Logo ligne - blanc.png'
    }
})