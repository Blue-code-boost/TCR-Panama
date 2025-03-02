document.addEventListener("DOMContentLoaded", () => {
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
    const header = document.createElement("header");
    header.innerHTML = `
        <nav>
            <h1>TCR Panamá</h1>
            <ul>
                <li><a href="#news">Noticias</a></li>
                <li><a href="#calendar">Calendario</a></li>
                <li><a href="#teams">Equipos</a></li>
                <li><a href="#videos">Videos</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
    `;
    document.body.prepend(header);
}

function createHeroSection() {
    const hero = document.createElement("section");
    hero.innerHTML = `
        <h2>Bienvenido a TCR Panamá</h2>
        <p>La serie de turismos más emocionante del país.</p>
    `;
    document.body.appendChild(hero);
}

function createNewsSection() {
    const news = document.createElement("section");
    news.innerHTML = `<h2>Últimas Noticias</h2>`;
    document.body.appendChild(news);
}

function createCalendarSection() {
    const calendar = document.createElement("section");
    calendar.innerHTML = `<h2>Calendario de Carreras</h2>`;
    document.body.appendChild(calendar);
}

function createTeamsSection() {
    const teams = document.createElement("section");
    teams.innerHTML = `<h2>Equipos y Pilotos</h2>`;
    document.body.appendChild(teams);
}

function createVideosSection() {
    const videos = document.createElement("section");
    videos.innerHTML = `<h2>Videos Destacados</h2>`;
    document.body.appendChild(videos);
}

function createSponsorsSection() {
    const sponsors = document.createElement("section");
    sponsors.innerHTML = `<h2>Nuestros Patrocinadores</h2>`;
    document.body.appendChild(sponsors);
}

function createContactForm() {
    const contact = document.createElement("section");
    contact.innerHTML = `
        <h2>Contacto</h2>
        <form>
            <input type="text" placeholder="Tu Nombre" required />
            <input type="email" placeholder="Tu Correo" required />
            <textarea placeholder="Tu Mensaje"></textarea>
            <button type="submit">Enviar</button>
        </form>
    `;
    document.body.appendChild(contact);
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.innerHTML = `
        <p>&copy; 2025 TCR Panamá. Todos los derechos reservados.</p>
    `;
    document.body.appendChild(footer);
}
