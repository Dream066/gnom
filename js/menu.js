
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('burger').addEventListener('click', function () {
        document.getElementById('burger__list').classList.toggle('active')
        document.querySelector('.header__burger').classList.toggle('opened')
    })
})


