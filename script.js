let btn = document.querySelector(".btn")
btn.addEventListener('click', () => {
    let para = document.querySelector(".para")

    let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
    fetch(url)
        .then((responce) =>  responce.json() )
        .then((data) => { 
            para.textContent =`${data.joke}`
            para.style.display = "flex"
         })
})
