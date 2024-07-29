/* -------------------------------------------------------------------------- */
/*                              DOM MANIPULATION                              */
/* -------------------------------------------------------------------------- */
// 1. Element Ekleme

const movieUl=document.getElementById("movie-ul")

const yeniEleman=document.createElement("li")
yeniEleman.textContent="Blacklist"
yeniEleman.className="movie-item"

movieUl.appendChild(yeniEleman)

//2 Yeni Eleman Ekleme - Daha Kolay yöntem
movieUl.innerHTML +=` <li id="avatar" class="movie-item avatar">God Father</li>
<p>I like this movie</p>`

// 2. Element Silme
// removeChild(childElement):
const matrix=document.getElementById("matrix")
movieUl.removeChild(matrix)

// Özellik ekleme - Attribute Ekleme
// SetAttribute
const movieInput=document.querySelector("#movie-input")

movieInput.setAttribute("placeholder","Enter a movie name")
movieInput.placeholder="New Movie"

movieInput.removeAttribute("type")

/* -------------------------------------------------------------------------- */
// Class Ekleme
const avatar=document.getElementById("avatar")
avatar.classList.add("highlight")

// Class Silme Metodu
const inters=document.getElementById("interstellar")
inters.classList.remove("interstellar")

//bir element bir classa sahip mi kontrolü
// contains => içeriyor mu - True False

const check=inters.classList.contains("interstellar")
console.log(check)

const check1=avatar.classList.contains("highlight")
console.log(check1)

if (avatar.classList.contains("highlight")){
    avatar.style.fontSize="3rem"
}





