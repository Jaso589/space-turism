import * as model from '../../data.js'

const jsonData = model.state.data.technology
console.log(jsonData)
const $links = document.querySelectorAll('.btn'),
    $title1 = document.querySelector('.title2'),
    $text = document.querySelector('.text'),
    $img = document.querySelector('.img-tech')

    var i
document.addEventListener('click', (e)=>{
    if(e.target == $links[0]){
        i = 0
        $links.forEach(el =>{
            //console.log(el.id)
            el.classList.remove('is-active')
        } )
        $links[i].classList.add('is-active')
    }
    if(e.target == $links[1]){
        i = 1
        $links.forEach(el =>{
            //console.log(el.id)
            el.classList.remove('is-active')
        } )
        $links[i].classList.add('is-active')
    }
    if(e.target == $links[2]){
        i = 2
        $links.forEach(el =>{
            //console.log(el.id)
            el.classList.remove('is-active')
        } )
        $links[i].classList.add('is-active')
    }

    $title1.innerHTML = (jsonData[i].name).toUpperCase()
    $text.innerHTML = jsonData[i].description;
    $img.innerHTML = `
    <img src="/starter-code${jsonData[i].images.portrait}" alt="">
    `
})
$title1.innerHTML = (jsonData[0].name).toUpperCase()
    $text.innerHTML = jsonData[0].description;
    $img.innerHTML = `
    <img src="/starter-code${jsonData[0].images.portrait}" alt="">
    `