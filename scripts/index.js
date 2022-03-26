'use strict'
let map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 50.272796, lng: 30.31428 },
        zoom: 8
    })
}

const video = document.getElementById('video')
const videoPlay = document.getElementById("video-play")
const videoPause = document.getElementById('video-pause')

videoPlay.addEventListener('click', (event) => {
    video.play()
    event.target.style.display = "none"
    videoPause.style.display = 'block'
})

videoPause.addEventListener('click', (event) => {
    video.pause()
    event.target.style.display = 'none'
    videoPlay.style.display = 'block'
})

const menuBurger = document.getElementById('menu-burger');
const menu = document.getElementById('menu');

menuBurger.addEventListener('click', () => {
    menu.classList.toggle('menu-none')
})


