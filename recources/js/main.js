// LINK ACTIVATION

const navLink = document.querySelectorAll('.navLink');
function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active');
}
navLink.forEach(n => n.addEventListener('click', linkAction))