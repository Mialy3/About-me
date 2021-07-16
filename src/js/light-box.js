let lightbox = document.getElementsByClassName('lightbox')
let modalImage = document.getElementById('modal-image')
let img = document.getElementById('lightbox-img')
let modal = new bootstrap.Modal(modalImage)

for(let i=0 ;i < lightbox.length ;i++){
    lightbox[i].addEventListener('click',(e) => {
        let data = lightbox[i].dataset.img
        img.src = data
        modal.show()
    })
}