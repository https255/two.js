var two = new Two({
    fullscreen: true,
    autostart: true
}).appendTo(document.body);
var cX = two.width / 2;
var cY = two.height / 2;

var circle = two.makeCircle(cX, cY, 100);