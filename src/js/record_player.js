
  // import {fetchMusicData} from '../js/supabase.js'
  
  // const musicData = await fetchMusicData()

  // async function initRecordPlayer()
  // {
  //    document.addEventListener('DOMContentLoaded', () => {
  //     const trackCoverImage = document.querySelector('#cover_image')
  //     const trackDataContainer = document.querySelector('#track_data_container')
  //     const trackTitle = document.querySelector('#track_title')
  //     const startTime = document.querySelector('#start_time')
  //     const endTime = document.querySelector('#end_time')
  //     const controlBtnsContainer = document.querySelector('.controls-container')
  //     const playPauseSongBtn = document.querySelector('.play-pause-song-btn i')
  //     const progressBar = document.querySelector('#progress_bar')
  //     const trackListContainer = document.querySelector('.track-list-container')
  //     const mobileTrackListToggleBtn = document.querySelector(
  //       '#toggle_mobile_track_list_btn',
  //     )

  //   const trackListItems = document.querySelectorAll('.track-list li')

  //   const audio = new Audio()

  //   controlBtnsContainer?.addEventListener('click', (e) => controlAudio(e))
  //   audio.addEventListener('timeupdate', updateProgressBar)
  //   mobileTrackListToggleBtn?.addEventListener('click', toggleMobileTrackList)

  //   // Initially setting the width of the progress bar to 0
  //   progressBar.style.width = '0%'

  //   let songIndex = 0
  //   let timeUpdateInterval

  //   loadSong(musicData[songIndex], false)

  //   function loadSong(song, shouldHighlight = true) {
  //     trackTitle.textContent = song.trackTitle
  //     trackCoverImage.src = `/recordings/covers/${song.audioCover}.webp`
  //     audio.src = `/recordings/audio/${song.audioTrack}.mp3`
  //     startTime.textContent = song.startTime
  //     endTime.textContent = song.endTime
  //     console.log(typeof endTime)

  //     updateTimerInterval()

  //     if (shouldHighlight) {
  //       highlightCurrentSong()
  //     }
  //   }

  //   function updateTimerInterval() {
  //     if (timeUpdateInterval) {
  //       clearInterval(timeUpdateInterval) // Clear any previous intervals
  //     }
  //     timeUpdateInterval = setInterval(updateStartTime, 1000) // Update every second
  //   }

  //   function controlAudio(e) {
  //     if (e.target.closest('.previous-song-btn')) {
  //       playPreviousSong()
  //     } else if (e.target.closest('.play-pause-song-btn')) {
  //       toggleAudioPlayState()
  //       updateStartTime()
  //     } else if (e.target.closest('.next-song-btn')) {
  //       playNextSong()
  //     }
  //   }

  //   function toggleAudioPlayState() {
  //     audio.paused
  //       ? (audio.play(), trackCoverImage?.classList.add('spin'))
  //       : (audio.pause(), trackCoverImage?.classList.remove('spin'))
  //     updatePlayPauseIconState()
  //   }

  //   function updatePlayPauseIconState() {
  //     audio.paused
  //       ? (playPauseSongBtn?.classList.remove('fa-pause'),
  //         playPauseSongBtn?.classList.add('fa-play'))
  //       : (playPauseSongBtn?.classList.remove('fa-play'),
  //         playPauseSongBtn?.classList.add('fa-pause'))
  //   }

  //   function playPreviousSong() {
  //     songIndex--
  //     if (songIndex < 0) {
  //       songIndex = trackData.length - 1
  //     }
  //     loadSong(trackData[songIndex])
  //     audio.play()
  //     trackCoverImage?.classList.add('spin')
  //     updatePlayPauseIconState()
  //   }

  //   function playNextSong() {
  //     songIndex++
  //     if (songIndex >= trackData.length) {
  //       songIndex = 0
  //     }
  //     loadSong(trackData[songIndex])
  //     audio.play()
  //     trackCoverImage?.classList.add('spin')
  //     updatePlayPauseIconState()
  //   }

  //   function updateStartTime() {
  //     const minutes = Math.floor(audio.currentTime / 60)
  //     const seconds = Math.floor(audio.currentTime % 60)
  //     startTime.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  //   }

  //   function updateProgressBar(e: any) {
  //     const target = e.target

  //     if (target) {
  //       const {duration, currentTime} = target
  //       const progressPercentage = (currentTime / duration) * 100
  //       progressBar.style.width = `${progressPercentage}%`
  //     }
  //   }

  //   function toggleMobileTrackList() {
  //     toggleTrackList()
  //     rotateMobileTrackListIcon()
  //   }

  //   function toggleTrackList() {
  //     trackListContainer.classList.contains('top-[500px]')
  //       ? (trackListContainer.classList.remove('top-[500px]'),
  //         trackListContainer.classList.add('top-[135px]'))
  //       : (trackListContainer.classList.remove('top-[135px]'),
  //         trackListContainer.classList.add('top-[500px]'))
  //   }

  //   function rotateMobileTrackListIcon() {
  //     mobileTrackListToggleBtn.classList.contains('rotate-[0]')
  //       ? (mobileTrackListToggleBtn.classList.remove('rotate-[0]'),
  //         mobileTrackListToggleBtn.classList.add('-rotate-[180deg]'))
  //       : (mobileTrackListToggleBtn.classList.remove('-rotate-[180deg]'),
  //         mobileTrackListToggleBtn.classList.add('rotate-[0]'))
  //   }

  //   function highlightCurrentSong() {
  //     trackListItems.forEach((trackListItem) => {
  //       trackListItem.classList.remove('current-song')
  //     })

  //     const currentTrackItem = trackListItems[songIndex]

  //     if (currentTrackItem) {
  //       currentTrackItem.classList.add('current-song')
  //     }
  //   }

  //   function playSongFromPlayList() {
  //     const trackListItems = document.querySelectorAll('.track-list li')

  //     trackListItems.forEach((item, index) => {
  //       item.addEventListener('click', () => {
  //         if (index === songIndex && !audio.paused) {
  //           return
  //         }
  //         songIndex = index
  //         loadSong(trackData[songIndex])
  //         audio.play()
  //         rotateMobileTrackListIcon()
  //         updatePlayPauseIconState()
  //         trackCoverImage?.classList.add('spin')
  //         toggleTrackList()
  //       })
  //     })
  //   }
  //   playSongFromPlayList()
  // })
  // }
 

