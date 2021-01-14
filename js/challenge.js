const counter = document.querySelector("#counter") 
counter.innerText = 0

let pauseStatus = false

const increaseCounter = () => {
    if (pauseStatus === false){
        counter.innerText++
    }
}

setInterval(increaseCounter, 1000)

const likeButton = document.querySelector("#heart")
const newLike = () => {
    const likesList = document.querySelector(".likes")
    const newLike = document.createElement("li")
    const currentCounter = counter.innerText
    newLike.textContent = `${currentCounter} ❤️`
    likesList.append(newLike)
    }

const plusButton = document.querySelector("#plus")
const plusCounter = () => { counter.innerText++ }

const minusButton = document.querySelector("#minus")
const minusCounter = () => { 
    if (counter.innerText == 0){
    } else {counter.innerText-- }
    }

const pauseButton = document.querySelector("#pause")
const pauseCounter = () => {

    if (pauseStatus === false){
        pauseStatus = !pauseStatus
        minusButton.disabled = true
        plusButton.disabled = true
        likeButton.disabled = true
        pauseButton.innerText = "resume"
    } else {
        pauseStatus = !pauseStatus
        minusButton.disabled = false
        plusButton.disabled = false
        likeButton.disabled = false
        pauseButton.innerText = "pause"
    }
}

document.addEventListener("click", e => {
    if (e.target === likeButton) {
        newLike()
    } else if (e.target === plusButton) {
        plusCounter()
    } else if (e.target === minusButton) {
        minusCounter()
    } else if (e.target === pauseButton){
        pauseCounter()
    }
})

const comments = document.querySelector("div")
const newUl = document.createElement("ul")
comments.append(newUl)

const form = document.querySelector("form")

form.addEventListener("submit", function(e){
    e.preventDefault()
    
    const newLi = document.createElement("li")
    newLi.textContent = e.target[0].value
    newUl.append(newLi)

    e.target.reset()
})

