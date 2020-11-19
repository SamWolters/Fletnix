var openModal;

$(document).ready(function() {
    var btnSignIn = document.getElementById("btnSignIn")
    var btnClose = document.getElementById("btnClose")

    btnSignIn.onclick = function () {
        toggleModal(document.getElementById("modal-signIn"))
    }

    btnClose.onclick = function () {
        toggleModal(document.getElementById("modal-signIn"))
    }
});

function toggleModal(element) {
    if (element.style.display == "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }

    openModal = element;
}

window.onclick = function(event) {
    if (event.target == openModal) {
        openModal.style.display = "none";
    }
}

