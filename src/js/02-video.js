import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

//3.Ініціалізуй плеєр у файлі скрипта 
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
console.log(iframe);

//4. Вивчи документацію методу on() 
const onPlay = function(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
};
console.log(onPlay);

// 4.почни відстежувати подію timeupdate - оновлення часу відтворення.
player.on('play', function(data) {
   
});console.log('played the video!');


//5.Зберігай час відтворення у локальне сховище (localStorage) з ключем ('videoplayer-current-time')
const savedTime = Number(localStorage.getItem('videoplayer-current-time'));
console.log(savedTime); 

//6. Під час перезавантаження сторінки скористайся методом setCurrentTime() 
//з метою відновлення відтворення зі збереженої позиції.

player.setCurrentTime(savedTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
 console.log(player);

//7.Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.
player.on('timeupdate', throttle(onPlay, 1000));
console.log(player.on);



