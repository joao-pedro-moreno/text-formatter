const characters = document.querySelector(".characters")
const words = document.querySelector(".words")

function uppercase() {
    let initialText = document.querySelector("#textarea").value

    var textUppercase = initialText.toUpperCase()
    document.querySelector("#textarea").value = textUppercase
}

function lowercase() {
    let initialText = document.querySelector("#textarea").value

    var textLowercase = initialText.toLowerCase()
    document.querySelector("#textarea").value = textLowercase
}

function countText() {
    let initialText = document.querySelector("#textarea").value

    characters.innerHTML = initialText.length
    words.innerHTML = initialText.length == 0 ? 0 : initialText.split(/\s+/).length;
}