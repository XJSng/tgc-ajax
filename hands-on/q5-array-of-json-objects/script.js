// when button event it pressed - display firstName, lastName, email
// When butten even is clicked - function fires off to display firstName and lastName
// function which allows users to enter 

// Once the DOM has been loaded
document.addEventListener("DOMContentLoaded", async function () {
    let loadUserBtn = document.querySelector("#load-users-btn")
    loadUserBtn.addEventListener("click", function () {
        document.querySelector("#all-users").innerHTML = ""
        return loadData()
    })
    let searchBtn = document.querySelector("#user-search-btn")
    searchBtn.addEventListener("click", function () {
        document.querySelector("#all-users").innerHTML = "" 
        return searchById()
    })
})

// function that fetches the data
async function loadData() {
    const response = await axios.get("users.json")
    const userData = response.data.users
    for (user of userData) {
        let newDiv = document.createElement("div")
        let firstName = user.firstName
        let lastName = user.lastName
        let email = user.emailAddress
        newDiv.innerHTML = `<p><b>First Name:</b> ${firstName}, <b>Last Name:</b> ${lastName}, <b>Email:</b> ${email}</p>`
        document.querySelector("#all-users").appendChild(newDiv)
    }

    //console.log(response)
}

// function that returns firstName and LastName when user search for ID
async function searchById() {
    const response = await axios.get("users.json")
    const userData = response.data.users
    const userInput = document.querySelector("#user-search")

        for (user of userData) {
        if (userInput.value == user.userId) {
            let firstName = user.firstName
            let lastName = user.lastName
            const newDiv = document.createElement("div")
            newDiv.innerHTML = `<p><b>Id:</b>${user.userId}, <b>First Name:</b> ${firstName}, <b>Last Name:</b> ${lastName}</p>`
        document.querySelector("#all-users").appendChild(newDiv)
        }
        }
}