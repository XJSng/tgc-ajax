

document.addEventListener("DOMContentLoaded", async function () {
    document.querySelector("#random-quote-btn").addEventListener("click", async function () {
        const url = `https://anapioficeandfire.com/api/books/`
        document.querySelector("#output").innerHTML = ``
        return getApi(url)
    })
})




async function getApi(url) {
    const response = await axios.get(url);
    const data = await response
    const n = Math.floor(Math.random() * 10)
    const book = data[n].name
    const newDiv = document.createElement("div")
    newDiv.innerHTML = `${book}`
    document.querySelector("#output").appendChild(newDiv)
    // console.log(response.data)
    // const data = await response.json();
    // console.log(data);
}

// getapi(url)