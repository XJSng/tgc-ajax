// when button event it pressed - display firstName, lastName, email
// When butten even is clicked - function fires off to display firstName and lastName
// function which allows users to enter 

// Once the DOM has been loaded
document.addEventListener("DOMContentLoaded", async function(){
 let loadUserBtn = document.querySelector("#load-users-btn")
loadUserBtn.addEventListener("click", function() {
    return loadData()
} )
})

// function that fetches the data
async function loadData(){
    let response = await axios.get("users.json")
    console.log(response)
}