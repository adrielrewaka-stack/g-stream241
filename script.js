// IMPORTANT : remplace ce numéro par ton numéro WhatsApp au format international.
// Exemple Gabon : 2417XXXXXXXX
const WHATSAPP_NUMBER = "24162276666";

function whatsapp(message) {
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
}

document.getElementById("waHero").href = whatsapp("Bonjour G-Stream, je voudrais connaître vos offres.");
document.getElementById("waContact").href = whatsapp("Bonjour G-Stream, j'ai besoin d'informations.");

function order(product, price) {
  const message = `Bonjour G-Stream 👋\n\nJe souhaite commander : ${product}\nPrix affiché : ${price}\n\nPouvez-vous me confirmer la disponibilité et les modalités de paiement ?`;
  window.open(whatsapp(message), "_blank");
}

function toggleMenu() {
  document.getElementById("nav").classList.toggle("open");
}
