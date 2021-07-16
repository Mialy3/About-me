const play = document.getElementById('ctrl-play')
const pause = document.getElementById('ctrl-pause')
const backward = document.getElementById('ctrl-backward')
const forward = document.getElementById('ctrl-forward')
const player = document.getElementById('player')
const cover = document.getElementById('cover')
const title = document.getElementById('title')
const artist = document.getElementById('artist')
let current = 0

const setSong = (song) => {
    cover.src = song.cover
    artist.innerHTML = song.artist
    title.innerHTML = song.title
    player.src = song.filename
}

const stop = () => {
    player.pause()
    player.currentTime = 0
}

const songs = [
  {
    filename: 'src/audio/song4.mp3',
    title: 'Beyond Today (Farewell Pt. 3)',
    artist: 'Seventh Wonder',
    cover: 'src/img/album-art/song4.png'
  },
  {
    filename: 'src/audio/song1.mp3',
    title: 'Sad Song (feat. Elena Coats)',
    artist: 'We The Kings',
    cover: 'src/img/album-art/song1.png'
  },
  {
    filename: 'src/audio/song2.mp3',
    title: 'If This Was a Movie',
    artist: 'Taylor Swift',
    cover: 'src/img/album-art/song2.png'
  },
  {
    filename: 'src/audio/song3.mp3',
    title: 'The Beginning (Against The Current Cover)',
    artist: 'Against the Current',
    cover: 'src/img/album-art/song3.png'
  }
]

player.addEventListener('ended',() => {
  player.pause()
    pause.classList.add('d-none')
    play.classList.remove('d-none')
})

setSong(songs[current])

play.addEventListener('click',() => {
    player.play()
    play.classList.add('d-none')
    pause.classList.remove('d-none')
})

pause.addEventListener('click',() => {
    player.pause()
    pause.classList.add('d-none')
    play.classList.remove('d-none')
})

forward.addEventListener('click',() => {
    let paused = player.paused
    current++
    if(current >= songs.length)current = 0
    setSong(songs[current])
    if(!paused)player.play()
})

backward.addEventListener('click',() => {
    let paused = player.paused
    current--
    if(current <= 0)current = songs.length - 1
    setSong(songs[current])
    if(!paused)player.play()
})





