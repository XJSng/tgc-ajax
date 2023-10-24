document.addEventListener("DOMContentLoaded", async function(){

})

// When the button is clicked run this function

document.querySelector("#item-btn").addEventListener("click", function(){
    // Hide the button to prevent multiple clicks
    document.querySelector("#item-btn").style.display = "none"
    // Run the loadData function
    return loadData()
})

// function that will load data when button is clicked
async function loadData() {
    const response = await axios.get("items.txt")
    const fruits = response.data.split(",")
    const fruitList = document.querySelector("#fruitList")
    // for loop through the fruits
    for (f of fruits) {
        let li = document.createElement("li")
        li.innerHTML = `${f}`
    fruitList.appendChild(li)        
    }
    
    // console.log(response.data) // returns "apple,oranges,pineapples,pears,durians"
}