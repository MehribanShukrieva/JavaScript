// Liste öğelerine erişim
var walterWhite = document.getElementById("walterwhite"); // Kimlik (id) ile erişim
var alternates = document.getElementsByClassName("alternate"); // Sınıf (class) ile erişim
var ulList = document.querySelector("ul"); // Etiket adı ile erişim

// Liste öğelerine müdahale
for (var i = 0; i < alternates.length; i++) {
    alternates[i].style.color = "red"; // Örnek olarak renk değiştirme
}

// Yeni öğe eklemek
var input = document.getElementById("veri"); // Input elementini seçme
var addButton = document.getElementById("ekle"); // Ekleme butonunu seçme

addButton.addEventListener("click", function() {
    var newListItem = document.createElement("li"); // Yeni bir liste öğesi oluşturma
    newListItem.textContent = input.value; // Input değerini yeni öğenin içeriği olarak belirleme
    ulList.appendChild(newListItem); // Listeye yeni öğeyi ekleme
    input.value = ""; // Input değerini temizleme
});
