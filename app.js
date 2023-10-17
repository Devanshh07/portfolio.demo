

let scroll = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true
});

function mv(){
    window.addEventListener("mousemove",function(dets) {
    
  document.querySelector(".minicircle").computedStyleMap.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
})
}
mv();