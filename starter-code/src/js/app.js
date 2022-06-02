
const $btn = document.querySelector('.btn-menu'),
    $menu = document.querySelectorAll('.menu'),
    $panel = document.querySelector('.navbar')

$btn.addEventListener('click', ()=>{
    if($menu[0]){
        $panel.classList.toggle("is-active");
        $menu[1].classList.toggle('is-open')
        $menu[0].classList.toggle('is-open')
    }
    
})