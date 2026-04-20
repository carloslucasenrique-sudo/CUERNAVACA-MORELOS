// Mensaje al enviar formulario
document.getElementById("formulario").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Gracias por tu mensaje. Te contactaremos pronto.");
});

// Efecto scroll suave
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});
