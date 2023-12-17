const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click',() => {
        removeActiveClass()
        panel.classlist.add('active')
    })
})


function removeActiveClass() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
