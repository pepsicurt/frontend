// const card = document.getElementById('card')
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('closeBtn')
const cardImg = document.getElementById('card-img')
const cardTitle = document.getElementById('card-title')

const showModal = () => {
    modal.style.display = 'flex'
}

const hideModal = () => {
    modal.style.display = 'none'
}

cardImg.addEventListener('click', showModal)
cardTitle.addEventListener('click', showModal)
closeBtn.addEventListener('click', hideModal)