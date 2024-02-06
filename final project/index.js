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







// const intouch = document.getElementById('intouch')
// const closebuttonintouch = document.getElementById('closebuttonintouch')
// const intouchh = document.getElementById('intouchh')

// const show1Modal = () => {
//     intouch.style.display = 'flex'
// }

// const hide1Modal = () => {
//     intouch.style.display = 'none'
// }

// intouch.addEventListener('click', show1Modal)
// closebuttonintouch.addEventListener('click', hide1Modal)