document.addEventListener("mouseover" , parallax);

function parallax(ev) {
    const haftSinElemans = document.querySelectorAll(".haft-sin-item");

    haftSinElemans.forEach(function (elem) {
        let moving_value = elem.getAttribute("data-value");

        let x = (ev.clientX * moving_value) / 100;
        let y = (ev.clientY * moving_value) / 100;

        elem.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}