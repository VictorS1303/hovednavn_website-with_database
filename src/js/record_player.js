const trackCoverImage = document.querySelector('#cover_image')
const trackDataContainer = document.querySelector('#track_data_container')
const trackTitle = document.querySelector('#track_title')
const startTime = document.querySelector('#start_time')
const endTime = document.querySelector('#end_time')
const controlBtnsContainer = document.querySelector('.controls-container')
const playPauseSongBtn = document.querySelector('.play-pause-song-btn i')
const progressBar = document.querySelector('#progress_bar')

const audio = new Audio()

controlBtnsContainer?.addEventListener('click', (e) => controlAudio(e))
audio.addEventListener('timeupdate', updateProgressBar)
progressBar.style.width = '0%'

const trackData = [
  {
    trackTitle: 'Velkommen til Danmark',
    audioCover: 'velkommen-til-dk',
    audioTrack: 'velkommen-til-dk',
    progress: 30,
    startTime: '0:00',
    endTime: '3:50',
  },
  {
    trackTitle: 'Jorden er flad',
    audioCover: 'jorden-er-flad',
    audioTrack: 'jorden-er-flad',
    progress: 30,
    startTime: '0:00',
    endTime: '2:32',
  },
  {
    trackTitle: 'Døv',
    audioCover: 'doev',
    audioTrack: 'doev',
    progress: 30,
    startTime: '0:00',
    endTime: '4:14',
  },
  {
    trackTitle: "Latin (Du kan ik' se det)",
    audioCover: 'latin',
    audioTrack: 'latin',
    progress: 30,
    startTime: '0:00',
    endTime: '2:44',
  },
  {
    trackTitle: 'Sikke dog en dejlig dag',
    audioCover: 'sikke-dog-en-dejlig-dag',
    audioTrack: 'sikke-dog-en-dejlig-dag',
    progress: 30,
    startTime: '0:00',
    endTime: '3:54',
  },
]

let songIndex = 0
let timeUpdateInterval

loadSong(trackData[songIndex])

function loadSong(song) {
  trackTitle.textContent = song.trackTitle
  // /recordings/audio/doev.mp3
  trackCoverImage.src = `/recordings/covers/doev.webp`
  audio.src = `/recordings/audio/${song.audioTrack}.mp3`
  startTime.textContent = song.startTime
  endTime.textContent = song.endTime

  if (timeUpdateInterval) {
    clearInterval(timeUpdateInterval) // Clear any previous intervals
  }
  timeUpdateInterval = setInterval(updateStartTime, 1000) // Update every second
}

function controlAudio(e) {
  if (e.target.closest('.previous-song-btn')) {
    playPreviousSong()
  } else if (e.target.closest('.play-pause-song-btn')) {
    toggleAudioPlayState()
    updateStartTime()
  } else if (e.target.closest('.next-song-btn')) {
    playNextSong()
  }
}

function toggleAudioPlayState() {
  audio.paused
    ? (audio.play(), trackCoverImage?.classList.add('spin'))
    : (audio.pause(), trackCoverImage?.classList.remove('spin'))
  updatePlayPauseIconState()
}

function updatePlayPauseIconState() {
  audio.paused
    ? (playPauseSongBtn?.classList.remove('fa-pause'),
      playPauseSongBtn?.classList.add('fa-play'))
    : (playPauseSongBtn?.classList.remove('fa-play'),
      playPauseSongBtn?.classList.add('fa-pause'))
}

function playPreviousSong() {
  songIndex--
  if (songIndex < 0) {
    songIndex = trackData.length - 1
  }
  loadSong(trackData[songIndex])
  audio.play()
  updatePlayPauseIconState()
}

function playNextSong() {
  // Check if audio is paused before skipping to next song
  if (audio.paused) {
    trackCoverImage?.classList.add('spin')
  }
  songIndex++
  if (songIndex >= trackData.length) {
    songIndex = 0
  }
  loadSong(trackData[songIndex])
  audio.play()
  updatePlayPauseIconState()
}

function updateStartTime() {
  const minutes = Math.floor(audio.currentTime / 60)
  const seconds = Math.floor(audio.currentTime % 60)
  startTime.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

function updateProgressBar(e: Event) {
  // Type assertion to tell TypeScript that e.target is an HTMLMediaElement
  const target = e.target

  // Check if target is valid
  if (target) {
    const {duration, currentTime} = target

    const progressPercentage = (currentTime / duration) * 100
    progressBar.style.width = `${progressPercentage}%`
  }
}