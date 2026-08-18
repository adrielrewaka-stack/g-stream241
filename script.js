// ===============================
// CONFIGURATION WHATSAPP
// ===============================

const WHATSAPP_NUMBER = "24162276666";

function whatsapp(message) {
  return "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message);
}


// ===============================
// WHATSAPP DIRECT
// ===============================

document.getElementById("waHero").href = whatsapp(
  "Bonjour G-Stream 👋\n\nJe voudrais connaître vos offres."
);

document.getElementById("waContact").href = whatsapp(
  "Bonjour G-Stream 👋\n\nJ'ai besoin d'informations concernant vos services."
);


// ===============================
// VARIABLES DE COMMANDE
// ===============================

let currentProduct = "";
let currentPrice = 0;
let currentType = "service";


// ===============================
// OUVRIR UNE COMMANDE SERVICE
// ===============================

function openOrder(product, price) {
  currentProduct = product;
  currentPrice = price;
  currentType = "service";

  document.getElementById("orderProduct").textContent = product;
  document.getElementById("orderDuration").textContent = "1 mois";
  document.getElementById("orderPrice").textContent =
    formatPrice(price) + " FCFA";

  document.getElementById("orderModal").classList.add("active");

  document.body.classList.add("modal-open");
}


// ===============================
// OUVRIR UNE COMMANDE PACK
// ===============================

function openPack(packName, services, price) {
  currentProduct = packName;
  currentPrice = price;
  currentType = "pack";

  document.getElementById("orderProduct").textContent =
    packName + " — " + services;

  document.getElementById("orderDuration").textContent =
    "Forfait";

  document.getElementById("orderPrice").textContent =
    formatPrice(price) + " FCFA";

  document.getElementById("orderModal").classList.add("active");

  document.body.classList.add("modal-open");

  // On conserve les services pour le message WhatsApp
  document.getElementById("confirmOrder").dataset.services = services;
}


// ===============================
// CONFIRMATION WHATSAPP
// ===============================

document.getElementById("confirmOrder").addEventListener("click", function () {

  let message;

  if (currentType === "pack") {

    const services = this.dataset.services || "";

    message =
      "Bonjour G-Stream 👋\n\n" +
      "Je souhaite commander le pack suivant :\n\n" +
      "🔥 " + currentProduct + "\n" +
      "Services : " + services + "\n" +
      "Prix : " + formatPrice(currentPrice) + " FCFA\n\n" +
      "Pouvez-vous me confirmer la disponibilité et les modalités de paiement ?";

  } else {

    message =
      "Bonjour G-Stream 👋\n\n" +
      "Je souhaite commander :\n\n" +
      "📦 Service : " + currentProduct + "\n" +
      "⏱️ Durée : 1 mois\n" +
      "💰 Prix : " + formatPrice(currentPrice) + " FCFA\n\n" +
      "Pouvez-vous me confirmer la disponibilité et les modalités de paiement ?";
  }

  window.open(whatsapp(message), "_blank");

  closeOrder();
});


// ===============================
// FERMER LA FENÊTRE
// ===============================

function closeOrder() {
  document.getElementById("orderModal").classList.remove("active");
  document.body.classList.remove("modal-open");
}


// Fermer en cliquant en dehors de la fenêtre
document.getElementById("orderModal").addEventListener("click", function (event) {
  if (event.target === this) {
    closeOrder();
  }
});


// Fermer avec la touche Échap
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeOrder();
  }
});


// ===============================
// FORMAT DES PRIX
// ===============================

function formatPrice(price) {
  return new Intl.NumberFormat("fr-FR").format(price);
}


// ===============================
// MENU MOBILE
// ===============================

function toggleMenu() {
  document.getElementById("nav").classList.toggle("open");
}
