import Player from "@vimeo/player"
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const onPlay = function (data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data))
    
}
player.on('timeupdate', throttle(onPlay, 1000))


player.setCurrentTime(
    JSON.parse(
        localStorage.getItem("videoplayer-current-time")
    ).seconds
)