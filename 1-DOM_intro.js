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
document.getElementById("movieHeader").style.fontWeight="bolder"
document.getElementById("moviesHeader").style.fontSize="2.5rem"

const moviesHeader=document.getElementById("moviesHeader")

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================


//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

//* ========================================
//*              QUERYSELECTOR()
//* ========================================

//* ========================================
//*              QUERYSELECTORALL()
//* ========================================