/* -------- DOM MANIPULATION -------- */


// 1-Eleman Ekleme
const movieUl=document.getElementById("movie-ul")
const yeniEleman=document.createElement("li")
yeniEleman.textContent="Blacklist"
yeniEleman.className="movie-item"

movieUl.appendChild(yeniEleman)


// 2- Yeni Eleman eklemek için daha kolay yöntem
movieUl.innerHTML += `<li id="avatar" class="movie-item avatar">God Father</li>`


// 2- Element Silme

movieUl.removeChild(matrix)

// Özellik ekleme - Attribute Ekleme
// SetAttribute
const movieInput=document.querySelector("#movie-input")
movieInput.setAttribute("placeholder","Enter a movie name")

movieInput.ariaPlaceholder="New Movie"

movieInput.removeAttribute("type")


// -----------------------------------------------------------

const interstellar=document.getElementById("interstellar")
interstellar.classList.add("highlight")



// bir elementin classa sahip olup olmadığını kontrolü
// contains=> içeriyor mu- true veya false

const check=interstellar.classList.contains("interstellar")
console.log(check);