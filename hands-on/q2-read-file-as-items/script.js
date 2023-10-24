document.addEventListener("DOMContentLoaded", async function(){

})

// When the button is clicked run this function
document.querySelector("#item-btn").addEventListener("click", function(){
    return loadData()
})

// function that will load data when button is clicked
async function loadData() {
    let response = await axios.get("items.txt")
    console.log(response.data)
}