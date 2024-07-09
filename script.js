function jiggle_element(elem) {
    if (elem.classList.contains("letter-jiggle")) return
    elem.classList.add("letter-jiggle")
    setTimeout(() => {
        elem.classList.remove("letter-jiggle")
    }, 550)
}

Array.from(document.getElementsByClassName("jiggleable")).forEach(e => {
    e.addEventListener("mouseover", jiggle_element.bind(this, e))
})

document.body.addEventListener("touchmove", function(e) {
    var touch = e.touches[0];

    var elem = document.elementFromPoint(touch.clientX, touch.clientY);

    if (!elem) return
    if (elem.classList.contains("jiggleable")) {
        jiggle_element(elem)
    }
});
