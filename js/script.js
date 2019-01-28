var move1 = $(".moving__1");
var move2 = $(".moving__2");
var move3 = $(".moving__3");

$(document).mousemove(function(event){
    // Get pos of mouse
    var posX = event.clientX;
    // Animation
    TweenLite.to(move1, 0, {x: (posX * 0.1 - 65), ease: Power1.easeOut }); // minus the start pos of layer2
    TweenLite.to(move2, 0, {x: (posX * 0.2 - 170), ease: Power1.easeOut }); // minus the start pos of layer3
    TweenLite.to(move3, 0, {x: (posX * 0.3 - 280), ease: Power1.easeOut });// minus the start pos of layer4


});