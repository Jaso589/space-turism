import * as model from '../../data.js';
const jsonData = model.state.data.destinations;

const $links = document.querySelectorAll('.btn-link'),
    $title = document.querySelector('.title'),
    $img = document.querySelector('.img-destination'),
    $distance = document.querySelector('.distance'),
    $time = document.querySelector('.time-travel'),
    $text = document.querySelector('.text');

    console.log(jsonData[0].name)
    var i
document.addEventListener('click', (e)=>{
    if(e.target == $links[0]){
        i = 0
        $links.forEach(el =>{
            //console.log(el.id)
            el.classList.remove('is-active')
        } )
        $links[0].classList.add('is-active')
        
        
    }
    if(e.target == $links[1]){
        i = 1
        $links.forEach(el =>{
            //console.log(el.id)
            el.classList.remove('is-active')
        } )
        $links[1].classList.add('is-active')
    }
    if(e.target == $links[2]){
        i = 2
        $links.forEach(el =>{
            //console.log(el.id)
            el.classList.remove('is-active')
        } )
        $links[2].classList.add('is-active')
    }
    if(e.target == $links[3]){
        i = 3
        $links.forEach(el =>{
            //console.log(el.id)
            el.classList.remove('is-active')
        } )
        $links[3].classList.add('is-active')
    }
    $title.innerHTML = (jsonData[i].name).toUpperCase();
    $text.innerHTML = jsonData[i].description;
    $img.innerHTML = `
        <img src="/starter-code${jsonData[i].images.png}" alt="${jsonData[0].name}">
    `;
    $distance.innerHTML = `
        <p>AVG. DISTANCE</p>
        <P>${(jsonData[i].distance).toUpperCase()}</P>
    `
    $time.innerHTML = `
        <p>EST. TRAVEL TIME</p>
        <p>${(jsonData[i].travel).toUpperCase()}</p>
    `

})
$title.innerHTML = (jsonData[0].name).toUpperCase();
    $text.innerHTML = jsonData[0].description;
    $img.innerHTML = `
        <img src="/starter-code${jsonData[0].images.png}" alt="${jsonData[0].name}">
    `;
    $distance.innerHTML = `
        <p>AVG. DISTANCE</p>
        <P>${(jsonData[0].distance).toUpperCase()}</P>
    `
    $time.innerHTML = `
        <p>EST. TRAVEL TIME</p>
        <p>${(jsonData[0].travel).toUpperCase()}</p>
    `