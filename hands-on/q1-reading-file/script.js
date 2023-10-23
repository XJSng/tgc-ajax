document.querySelector("#load-btn").addEventListener("click", async ()=>{
let data = await loadData()
// console.log(data)
document.querySelector("div#content").innerHTML = data
})

async function loadData() {
  const response =   await axios.get("contact.txt");
  return response.data;
}