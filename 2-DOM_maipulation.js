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