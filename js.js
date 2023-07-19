//! Cambiar de fondo
const toggle_btn = document.querySelector('.cambioFondo');
const toggleBtnIcon = document.querySelector('.toggle_btn i');

toggle_btn.onclick = function(){
    toggle_btn.classList.toggle('active');

    const isActive = toggle_btn.classList.contains('active');

    toggleBtnIcon.classList = isActive
    ? 'fa-solid fa-moon'
    : 'fa-solid fa-sun'
}