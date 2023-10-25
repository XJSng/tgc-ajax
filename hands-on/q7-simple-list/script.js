const url = `https://anapioficeandfire.com/api/books/`
document.addEventListener("DOMContentLoaded", async function () {
    document.querySelector("#load-books-btn").addEventListener("click", async function () {
        const booksArray = await loadBooks()
        let displayBooksHtml = await displayBooks(booksArray)
        let displayPovHtml = await displayPov(booksArray)
        document.querySelector("#output").innerHTML += displayBooksHtml += displayPovHtml
    })

})

// function that fetches the books array and returns it
async function loadBooks() {
    const response = await axios.get(url)
    return response.data
    // console.log(books)
}
// function that displays the book title and book pages
function displayBooks(books) {
    for (b of books) {
        const newDiv = document.createElement("div")
        newDiv.innerHTML = `<h3>${b.name}</h3>
        <p>Number of pages: ${b.numberOfPages}</p>
        <ul id=${b.name}></ul>`
        document.querySelector("#output").appendChild(newDiv)
    }
}

// function displayPov(books) {
//     for (chr of books) {
//         const li = document.createElement("li")
//         li.innerHTML = `${chr.povCharacters[chr]}`
//         console.log(li)}
//         //document.querySelector(`#${chr.name}`).appendChild(li)
// }