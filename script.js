
const welcome = "Bienvenido a mi portafolio profesional"
alert(welcome);


const boton = document.getElementById("btn");
const parrafo = document.getElementById("descript");

const textoOriginal = parrafo.innerHTML;

let cambiado = false;

boton.addEventListener("click", () => {
    if (!cambiado) {
        parrafo.innerHTML = `
            Me apasiona el desarrollo de software<br><br>
            Estoy enfocado en seguir aprendiendo cada vez mas para encontrar la ruta  en la que me quiero especializar<br><br>
            Mi objetivo es crecer profesionalmente y crear proyectos de alto nivel.
        `;
        boton.textContent = "Volver al texto original";
    } else {
        parrafo.innerHTML = textoOriginal;
        boton.textContent = "Cambiar texto";
    }

    cambiado = !cambiado;
});





