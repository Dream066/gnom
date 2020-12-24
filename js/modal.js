


document.addEventListener('DOMContentLoaded', function () {
    let modal = document.querySelector("#modal");
    let modalOverlay = document.querySelector("#modal-overlay");
    let openButton = document.querySelector("#open-button");

    openButton.addEventListener("click", function () {
        modal.classList.toggle("open");
        modalOverlay.classList.toggle("closed");
    });
    document.querySelector("#close-button").addEventListener("click", function () {
        modal.classList.toggle("open");
        modalOverlay.classList.toggle("closed");
    })
    // modalOverlay.addEventListener("click", function () {
    //     modal.classList.toggle("open");
    //     modalOverlay.classList.toggle("closed");
    // })
    // if(document.querySelector("#modal-overlay").classList.contains('open'))
    // document.querySelector("#modal-overlay").addEventListener("click", function () {
    //     document.querySelector("#modal").classList.toggle("open");
    // })
})

