document.addEventListener("DOMContentLoaded", ()=>{
   
    const loadImage = document.querySelector("#load-image-btn")
    loadImage.addEventListener("click", async function(){
        await loadArtwork()
    })    
    
})

async function loadArtwork(){
    const response = await axios.get("artwork.json")
    const artwork = response.data
    let display = document.createElement("div")
    display.innerHTML = `<h1>${artwork.title}</h1>
    <img src='${artwork.image_url}'/>`
    display.classList.add = (`${artwork.class}`)
    document.querySelector("#artwork").appendChild(display)

    //console.log(artwork)
}