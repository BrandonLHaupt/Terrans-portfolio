let project = document.getElementsByClassName("project")

console.log(project)

Array.from(project).forEach((e) => {
    e.addEventListener("click", ()=> {
        e.classList.toggle("active")
        console.log(`${e} was clicked`)
    })
})