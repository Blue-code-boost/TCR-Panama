document.addEventListener("DOMContentLoaded", function () {
    createHeader();
    createHeroSection();
    createNewsSection();
    createCalendarSection();
    createTeamsSection();
    createVideosSection();
    createSponsorsSection();
    createContactForm();
    createFooter();
});
function createHeader() {
    var header = document.createElement("header");
    header.innerHTML = "\n        <nav>\n            <h1>TCR Panam\u00E1</h1>\n            <ul>\n                <li><a href=\"#news\">Noticias</a></li>\n                <li><a href=\"#calendar\">Calendario</a></li>\n                <li><a href=\"#teams\">Equipos</a></li>\n                <li><a href=\"#videos\">Videos</a></li>\n                <li><a href=\"#contact\">Contacto</a></li>\n            </ul>\n        </nav>\n    ";
    document.body.prepend(header);
}
function createHeroSection() {
    var hero = document.createElement("section");
    hero.innerHTML = "\n        <h2>Bienvenido a TCR Panam\u00E1</h2>\n        <p>La serie de turismos m\u00E1s emocionante del pa\u00EDs.</p>\n    ";
    document.body.appendChild(hero);
}
function createNewsSection() {
    var news = document.createElement("section");
    news.innerHTML = "<h2>\u00DAltimas Noticias</h2>";
    document.body.appendChild(news);
}
function createCalendarSection() {
    var calendar = document.createElement("section");
    calendar.innerHTML = "<h2>Calendario de Carreras</h2>";
    document.body.appendChild(calendar);
}
function createTeamsSection() {
    var teams = document.createElement("section");
    teams.innerHTML = "<h2>Equipos y Pilotos</h2>";
    document.body.appendChild(teams);
}
function createVideosSection() {
    var videos = document.createElement("section");
    videos.innerHTML = "<h2>Videos Destacados</h2>";
    document.body.appendChild(videos);
}
function createSponsorsSection() {
    var sponsors = document.createElement("section");
    sponsors.innerHTML = "<h2>Nuestros Patrocinadores</h2>";
    document.body.appendChild(sponsors);
}
function createContactForm() {
    var contact = document.createElement("section");
    contact.innerHTML = "\n        <h2>Contacto</h2>\n        <form>\n            <input type=\"text\" placeholder=\"Tu Nombre\" required />\n            <input type=\"email\" placeholder=\"Tu Correo\" required />\n            <textarea placeholder=\"Tu Mensaje\"></textarea>\n            <button type=\"submit\">Enviar</button>\n        </form>\n    ";
    document.body.appendChild(contact);
}
function createFooter() {
    var footer = document.createElement("footer");
    footer.innerHTML = "\n        <p>&copy; 2025 TCR Panam\u00E1. Todos los derechos reservados.</p>\n    ";
    document.body.appendChild(footer);
}
