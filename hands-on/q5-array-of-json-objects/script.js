// when button event it pressed - display firstName, lastName, email
// When butten even is clicked - function fires off to display firstName and lastName
// function which allows users to enter 

// Once the DOM has been loaded
document.addEventListener("DOMContentLoaded", async function () {
    let loadUserBtn = document.querySelector("#load-users-btn")
    loadUserBtn.addEventListener("click", function () {
        return loadData()
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