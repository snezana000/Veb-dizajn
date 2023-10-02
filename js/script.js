let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};

window.onscroll= () => {
    if (! menu.classList.contains('bx-x')){
    menu.classList.remove('active');
    }

}

// Funkcija za promenu teme
function promeniTemu(tema) {
    document.body.className = tema;
    localStorage.setItem('tema', tema);
}

// Funkcija za prikaz dijaloga
function prikaziDialog() {
    const dialog = document.getElementById('theme-dialog');
    dialog.style.display = 'flex';
}

// Funkcija za sakrivanje dijaloga
function sakrijDialog() {
    const dialog = document.getElementById('theme-dialog');
    dialog.style.display = 'none';
}

// Proverite localStorage da biste postavili temu
const sacuvanaTema = localStorage.getItem('tema');
if (sacuvanaTema) {
    promeniTemu(sacuvanaTema);
}

// Dodajte event listenere za dugmad
document.getElementById('light-theme-btn').addEventListener('click', function() {
    promeniTemu('svetla-tema');
    sakrijDialog();
});

document.getElementById('dark-theme-btn').addEventListener('click', function() {
    promeniTemu('tamna-tema');
    sakrijDialog();
});

// Prikazivanje dijaloga pri prvom posetu
window.addEventListener('load', prikaziDialog);

// Dodajte sledeći JavaScript kod da biste zatvorili meni klikom van menija
window.addEventListener('click', function (e) {
    var dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(function (dropdown) {
        if (!dropdown.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });
});

// Funkcija za validaciju forme
function validateContactForm() {
  const imePrezime = document.getElementById("ime_prezime").value;
  const email = document.getElementById("email").value;
  const telefon = document.getElementById("telefon").value;
  const poruka = document.getElementById("poruka").value;

  // Resetovanje poruka o greškama
  document.querySelectorAll(".error-message").forEach(function(element) {
      element.textContent = "";
  });

  let isValid = true;

  // Provera za ime i prezime
  if (imePrezime.trim() === "") {
      document.getElementById("ime_prezime-error").textContent = "Polje 'Ime i Prezime' je obavezno.";
      isValid = false;
  }

  // Provera za email adresu
  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailFormat)) {
      document.getElementById("email-error").textContent = "Unesite validnu email adresu.";
      isValid = false;
  }

  // Provera za telefon
  const telefonFormat = /^\d{10}$/; // Primer: 1234567890
  if (!telefon.match(telefonFormat)) {
      document.getElementById("telefon-error").textContent = "Unesite validan broj telefona (10 cifara).";
      isValid = false;
  }

  // Provera za poruku
  if (poruka.trim() === "") {
      document.getElementById("poruka-error").textContent = "Polje 'Poruka' je obavezno.";
      isValid = false;
  }

  return isValid;
}

// Dodavanje event slušalaca za submit događaj forme
document.getElementById("contact-form").addEventListener("submit", function(event) {
  if (!validateContactForm()) {
      event.preventDefault(); // Zaustavljanje slanja forme ako validacija nije uspešna
  }
});


