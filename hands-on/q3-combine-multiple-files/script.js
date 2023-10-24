document.addEventListener("DOMContentLoaded", function () {
    const loadBtn = document.querySelector("#load-btn")

    // When button is clicked
    loadBtn.addEventListener("click", async function () {
        await loadData()
        return loadBtn.style.display = "none"
    })
})

//
async function loadData() {
    const response = await axios.get("file1.txt")
    const response2 = await axios.get("file2.txt")
    // select textbox and add .value to the file
    const contentSpace = document.querySelector("#content")
    contentSpace.value += 
    `${response.data}
    ${response2.data}`

    // return console.log(response, response2) returns both objects
}