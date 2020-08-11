document.addEventListener('DOMContentLoaded', () =>{
    fetch('http://localhost:3000/mvc2')
    .then(response => response.json())
    .then(char => {
        char.forEach(renderCharacter)
    })
    
    
    const renderCharacter = (char) => {

        ul = document.querySelector("body > div > ul")
        // console.log(ul)
        li = document.createElement('li')
        li.innerText = char.name
        ul.appendChild(li)
    }
})