import Player from "@vimeo/player"
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const PLAYBACK_TIME = "videoplayer-current-time"

const onPlay = function (data) {
    localStorage.setItem(PLAYBACK_TIME, JSON.stringify(data))
    
}
player.on('timeupdate', throttle(onPlay, 1000))

const savedTime = localStorage.getItem(PLAYBACK_TIME)

if (savedTime !== null) {
    player.setCurrentTime(JSON.parse(savedTime).seconds)
};