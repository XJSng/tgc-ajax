document.addEventListener("DOMContentLoaded", ()=>{
   
    const loadImage = document.querySelector("#load-image-btn")
    loadImage.addEventListener("click", async function(){
        await loadArtwork()
        return loadImage.style.display = "none"
    })    
    
})

async function loadArtwork(){
    const response = await axios.get("artwork.json")
    const artwork = response.data
    const title = document.createElement("h1")
    const image = document.createElement("img") 
    //change to seperate appendChild
    title.innerHTML = `${artwork.title}`
    image.style.width = "300px"
    image.src = `${artwork.image_url}`
    image.classList.add(`${artwork.class}`)
    document.querySelector("#artwork").appendChild(title)
    document.querySelector("#artwork").appendChild(image)

    //console.log(artwork)
}