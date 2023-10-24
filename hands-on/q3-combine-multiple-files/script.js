document.addEventListener("DOMContentLoaded", function () {
    const loadBtn = document.querySelector("#load-btn")

    // When button is clicked
    loadBtn.addEventListener("click", async function () {
        return loadData()
    })
})

//
async function loadData() {
    const response = await axios.get("file1.txt")
    const response2 = await axios.get("file2.txt")
    return console.log(response, response2)
}