import Player from '@vimeo/player';
import { async } from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const saveCurrentTime = throttle(async function () {
  try {
    const currentTime = await player.getCurrentTime();
    localStorage.setItem('videoplayer-current-time', currentTime);
  } catch (error) {
    console.error('Error while saving playback time:', error);
  }
}, 1000);

async function setPlayerCurrentTimeFromStorage() {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    try {
      await player.setCurrentTime(parseFloat(currentTime));
    } catch (error) {
      console.error('Error while saving playback time:', error);
    }
  }
}

player.on('timeupdate', saveCurrentTime);
player.play();
window.addEventListener('DOMContentLoaded', setPlayerCurrentTimeFromStorage);
