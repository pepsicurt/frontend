const modal = document.getElementById('modal')
const closebutton1 = document.getElementById('closebutton1')
const startnow = document.getElementById('startnow')

const showModal = () => {
    modal.style.display = 'flex'
}

const hideModal = () => {
    modal.style.display = 'none'
}

startnow.addEventListener('click', showModal)
closebutton1.addEventListener('click', hideModal)


