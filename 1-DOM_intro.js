/* ------------ DOM INTRO ----------- */
// DOM dökümanların stillerinin, yapısının, içeriğinin erişilmesine ve güncellenmesine olanak sağlayan, dilden bağımsız bir arabirimdir.
// HTML Api olark bize bir kod bloğu sunuyor. Bu sayede HTML, CSS e JS ile erişip manipule edebiliyorum.
// HTML ve CSS ile değişiklik yapabiliyor, ama JS ile dinamiklik sağlıyor


/* -------------------------------------------------------------------------- */
//!                           Belgeye Erişim Yöntemleri                       */
/* -------------------------------------------------------------------------- */
// document.getElementById(id): Belirtilen id'ye sahip olan ilk elemente erişir.
// document.getElementsByClassName(className): Belirtilen sınıfa (class) sahip tüm elementleri bir HTMLCollection olarak döner.
// document.getElementsByTagName(tagName): Belirtilen etiket adına sahip tüm elementleri bir HTMLCollection olarak döner.
// document.querySelector(selector): Belirtilen CSS seçicisine (selector) uyan ilk elemente erişir.
// document.querySelectorAll(selector): Belirtilen CSS seçicisine (selector) uyan tüm elementleri bir NodeList olarak döner.

//*===========================================
//*            GETELEMENTBYID()
//*===========================================
document.getElementById("moviesHeader").style.color="red"
document.getElementById("moviesHeader").style.fontWeight="bolder"
document.getElementById("moviesHeader").style.fontSize="2.5rem"

const moviesHeader=document.getElementById("moviesHeader")

const inception=document.getElementById("inception")

inception.style.backgroundColor="lime"

inception.innerText="God Father"
inception.innerHTML=`<h3 style="background-color:gray">Backlist</h3>
<p>I like this series</p>`

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================
// HTML Collection - array- like bir yapı ama direk array gibi kullanılamıyor o nedenle arraye dönüştürmek gerekir.
//ArrayLike yapılar : arguments, HTML collection,NodeList(querySelectoAll ile gelir)
// Array ile ArrayLike yapı arasındaki fark: Array-like yapılar diziler gibi indekslenebilir ve length özelliğine sahip olabilirler, ancak dizilerin sunduğu çoğu yöntemden (örneğin, push, pop, map, filter, vb.) yoksundurlar

const addNewMovie=document.getElementsByClassName("movie-item")
console.log(addNewMovie);

addNewMovie[4].style.color="red"

for (let i=0;i<addNewMovie.length;i++){
    console.log(addNewMovie[i].textContent);
}

// Spread operatoru ile arraye çevirelim
const arrayMovies=[...addNewMovie]
console.log(arrayMovies);


arrayMovies.forEach((item)=>item.style.color="blue")

// 3- Array.from(arraylike)

console.log("Array.from",Array.from(arrayMovies));
//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

const listItems=document.getElementById("li")
console.log(listItems)

const h2ler=document.getElementsByTagName("h2")
console.log(h2ler);

const h2lerArray=[...h2ler]
console.log(h2lerArray);
h2lerArray.forEach((item)=> console.log(item.textContent))

//* ========================================
//*              QUERYSELECTOR()
//* ========================================

//* ========================================
//*              QUERYSELECTORALL()
//* ========================================