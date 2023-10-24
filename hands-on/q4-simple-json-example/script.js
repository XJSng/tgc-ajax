document.addEventListener("DOMContentLoaded",()=>{
    loadArtwork()
})

async function loadArtwork(){
    let artwork = await axios.get("artwork.json")
    console.log(artwork)
}