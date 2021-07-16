let begin = document.getElementById('begin')
let canvas = document.getElementById('tuto')
let links = document.getElementsByClassName('redirect-link')

begin.addEventListener('click',() => {
    canvas.classList.add('fade')
    setTimeout(() => canvas.classList.add('d-none'),1000)
})

for(let i = 0; i < links.length ;i++){
    links[i].addEventListener('click',() => {
        let data = links[i].dataset
        window.open(data.href)
    })
}

