var images = [ 'bubbles-1.png', 'bubbles-2.png', 'bubbles-3.png'];
var openModal;

$(document).ready(function() {
    $('.card-subscription').each(function(i, obj) {
        var image = images[Math.floor(Math.random() * images.length)];
        obj.style.backgroundImage = 'url(../assets/' + image + ')';
    });

    var btnBasic = document.getElementById("btnBasic")
    var btnNormal = document.getElementById("btnNormal")
    var btnPremium = document.getElementById("btnPremium")

    btnBasic.onclick = function () {
        toggleModal(document.getElementById("modal-basic"))
    }

    btnNormal.onclick = function () {
        toggleModal(document.getElementById("modal-normal"))
    }

    btnPremium.onclick = function () {
        toggleModal(document.getElementById("modal-premium"))
    }
});

function toggleModal(element) {
    console.log("open")
    openModal = element;
    element.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == openModal) {
        openModal.style.display = "none";
    }
}

