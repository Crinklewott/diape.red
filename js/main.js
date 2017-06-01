// Click to play all videos!
window.addEventListener('load', function(){
  Array.prototype.forEach.call(document.getElementsByTagName('video'), function(targ){
    targ.addEventListener('click', function(){
      targ.className += " playing";
      targ.play();
    });

    targ.addEventListener('ended', function(){
      targ.className = targ.className.replace(/\s*\bplaying\b/g, "");
    });
  });
});
