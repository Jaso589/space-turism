import * as model from '../../data.js';
const jsonData = model.state.data.crew;
const $btn = document.querySelector('#slide1'),
    $btn2 = document.querySelector('#slide2'),
    $btn3 = document.querySelector('#slide3'),
    $btn4 = document.querySelector('#slide4'),
    $bio = document.querySelector('.bio'),
    $rol = document.querySelector('.rol'),
    $nombre = document.querySelector('.nombre'),
    $img = document.querySelector('.img-crew')

document.addEventListener('click',(e)=>{
    
    if(e.target === $btn){
        var i = 0
        $btn.classList.add('is-active')
        $btn2.classList.remove('is-active')
        $btn3.classList.remove('is-active')
        $btn4.classList.remove('is-active')
    }
    if(e.target === $btn2){
        i = 1
        $btn2.classList.add('is-active')
        $btn.classList.remove('is-active')
        $btn3.classList.remove('is-active')
        $btn4.classList.remove('is-active')
    }
    if(e.target === $btn3){
        i= 2
        $btn3.classList.add('is-active')
        $btn.classList.remove('is-active')
        $btn2.classList.remove('is-active')
        $btn4.classList.remove('is-active')
    }
    if(e.target === $btn4){
        i= 3
        $btn4.classList.add('is-active')
        $btn2.classList.remove('is-active')
        $btn.classList.remove('is-active')
        $btn3.classList.remove('is-active')
    }
    $rol.innerHTML = (jsonData[i].role).toUpperCase()
        $bio.innerHTML = jsonData[i].bio
        $nombre.innerHTML = (jsonData[i].name).toUpperCase()

        $img.innerHTML = `
        <img src="../../starter-code${jsonData[i].images.png}" alt="">
        `
})

    $rol.innerHTML = (jsonData[0].role).toUpperCase()
    $bio.innerHTML = jsonData[0].bio
    $nombre.innerHTML = (jsonData[0].name).toUpperCase()

    $img.innerHTML = `
    <img src="../../starter-code${jsonData[0].images.png}" alt="">
    `

