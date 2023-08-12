import Player from '@vimeo/player';
import throttle  from "lodash.throttle";


const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate',
    throttle(() => {
        player
            .getCurrentTime()
            .then((seconds) => localStorage.setItem("videoplayer-current-time", seconds))
            .catch((error) => console.log(error));
}, 1000));

let lastTimer = localStorage.getItem("videoplayer-current-time");
if(lastTimer) player.setCurrentTime(lastTimer)
