content = document.querySelector("#content")
but = document.querySelector(".but")
button = document.querySelector(".button")
searchdata = 'default'

function user(e){
    searchdata = e.value
}

function fetchData() {
    fetch(`https://icanhazdadjoke.com/search?term=${searchdata}`, {
        headers: {
            "Accept": "application/json"
        }
    })
        .then(res => res.json())
        .then(data =>{
          content.innerHTML=  data.joke
        })
}
function fetchData() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            "Accept": "application/json"
        }
    })
        .then(res => res.json())
        .then(data =>{
          content.innerHTML=  data.joke
        })
}

