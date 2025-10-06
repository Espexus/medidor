(function(){
    let formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", (e)=> {
        e.preventDefault();

        let espacio = document.getElementById("espacio-respuesta");
        espacio.innerHTML = "";

        let rango = Number(document.getElementById("rango").value);
        if(rango <=25) {
            espacio.classList.remove("oculto");
            let rutaImagen = "pato.jpg";
            let texto = "Parece que me odias bastante, qué? te debo o qué? quiereme ptm, o le meto un coñazo ";

            let imagen = document.createElement("img");
            imagen.classList.add("imagen");
            imagen.src = rutaImagen;

            let contenedorTexto = document.createElement("p");
            contenedorTexto.classList.add("textoRespuesta");
            contenedorTexto.textContent = texto;

            espacio.appendChild(imagen);
            espacio.appendChild(contenedorTexto);
            return;
        }
        if(rango <=50 && rango >25) {
            espacio.classList.remove("oculto");
            let rutaImagen = "llorar.jpg";
            let texto = "Qué pachó Sarita? yo kelo ser tu bestie, quiéreme ya por favor recontra supramega piroa";

            let imagen = document.createElement("img");
            imagen.classList.add("imagen");
            imagen.src = rutaImagen;

            let contenedorTexto = document.createElement("p");
            contenedorTexto.classList.add("textoRespuesta");
            contenedorTexto.textContent = texto;

            espacio.appendChild(imagen);
            espacio.appendChild(contenedorTexto);
            return;

        }
        if(rango <=75 && rango >50) {
            espacio.classList.remove("oculto");
            let rutaImagen = "querer.jpg";
            let texto = "Sarita me quiere, el mundo ya ta bien, sisisisisi";

            let imagen = document.createElement("img");
            imagen.classList.add("imagen");
            imagen.src = rutaImagen;

            let contenedorTexto = document.createElement("p");
            contenedorTexto.classList.add("textoRespuesta");
            contenedorTexto.textContent = texto;

            espacio.appendChild(imagen);
            espacio.appendChild(contenedorTexto);
            return;

        }
        if(rango >75) {
            espacio.classList.remove("oculto");
            let rutaImagen = "badbunny.jpg";
            let texto = "Me quieres mucho, eres una badbunny amorosa, yo también te quiero mucho Sarita";

            let imagen = document.createElement("img");
            imagen.classList.add("imagen");
            imagen.src = rutaImagen;

            let contenedorTexto = document.createElement("p");
            contenedorTexto.classList.add("textoRespuesta");
            contenedorTexto.textContent = texto;

            espacio.appendChild(imagen);
            espacio.appendChild(contenedorTexto);
            return;
        }
    })
})()