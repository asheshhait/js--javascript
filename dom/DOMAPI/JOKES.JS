const display = document.querySelector("#container")
let currentJoke = ""; // to store joke text
const downloadBtn = document.querySelector("#download-btn");
document.querySelector("#button").addEventListener("click",()=>{
    getJokes()
})


async function getJokes() {
try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke")
    console.log(response)
    const data = await response.json();
    console.log(data)
    const jokes = data.setup
    display.innerHTML = `<h3>Joke:</h3>
      <p><strong>${data.setup}</strong></p>
      <p>${data.punchline}</p>`;

      currentJoke = `${data.setup}\n${data.punchline}`; // ✅ store joke for download
} catch (error) {
 currentJoke = "";
    console.error("Joke API Error:", error);
}
    
}

downloadBtn.addEventListener("click", () => {
  if (!currentJoke ) {
    alert("No joke to download yet!");
    return;
  }
const blob = new Blob([currentJoke], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "joke.txt";
  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});