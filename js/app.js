document.addEventListener("DOMContentLoaded",()=>{

    const imagenpersonage = document.getElementById('imgPersonage');
    const spanDisparo = document.getElementById('spanDisparo');
    const disparoContainer = document.getElementById("disparoContainer");
    const preguntas = document.getElementById("preguntas");
    const respuestas = document.getElementById("respuestas");

// preguntas 
const listaPreguntas = [
    new Juego("¿Cuál es la capital de Gran Canaria?", ["Las Palmas de Gran Canaria", "Santa Cruz de Tenerife", "Arrecife", "Puerto del Rosario"], "Las Palmas de Gran Canaria", 1),
    new Juego("¿Qué famoso parque natural se encuentra en Gran Canaria?", ["Parque Nacional de Garajonay", "Parque Nacional de Timanfaya", "Parque Nacional del Teide", "Parque Natural de Tamadaba"], "Parque Natural de Tamadaba", 2),
    new Juego("¿Cuál es el punto más alto de Gran Canaria?", ["Pico de las Nieves", "Roque Nublo", "Pico del Teide", "Montaña de Tindaya"], "Pico de las Nieves", 3),
    new Juego("¿Qué famosa playa se encuentra en el sur de Gran Canaria?", ["Playa de las Canteras", "Playa de Maspalomas", "Playa de Sotavento", "Playa de Famara"], "Playa de Maspalomas", 4),
    new Juego("¿Cuál es el aeropuerto principal de Gran Canaria?", ["Aeropuerto de Gran Canaria", "Aeropuerto de Tenerife Sur", "Aeropuerto de Lanzarote", "Aeropuerto de Fuerteventura"], "Aeropuerto de Gran Canaria", 5),
    new Juego("¿Qué famoso monumento natural se encuentra en el centro de Gran Canaria?", ["Roque Nublo", "Dunas de Maspalomas", "Charco de San Ginés", "Cueva de los Verdes"], "Roque Nublo", 6),
    new Juego("¿Cuál es el principal puerto de Gran Canaria?", ["Puerto de la Luz", "Puerto de Santa Cruz de Tenerife", "Puerto de Los Cristianos", "Puerto de Arrecife"], "Puerto de la Luz", 7),
    new Juego("¿Qué famoso jardín botánico se encuentra en Gran Canaria?", ["Jardín Canario", "Jardín de Cactus", "Jardín de Aclimatación de La Orotava", "Palmitos Park"], "Jardín Canario", 8),
    new Juego("¿Cuál es el principal centro comercial de Gran Canaria?", ["Centro Comercial Las Arenas", "Centro Comercial Siam Mall", "Centro Comercial El Corte Inglés", "Centro Comercial La Cañada"], "Centro Comercial Las Arenas", 9),
    new Juego("¿Qué famoso parque temático se encuentra en Gran Canaria?", ["Loro Parque", "Siam Park", "Palmitos Park", "Aqualand"], "Palmitos Park", 10),
];
const juegoDuracion = 120; // 120 seconds (2 minutes)

// instancia de objeto
const pregunta = new Juego(listaPreguntas, juegoDuracion, juegoDuracion);
pregunta.shuffleQuestions();
 

iniciaJuego()

    // Escuchar el movimiento del mouse
    document.addEventListener('mousemove', (event) => {
        // Obtener la posición del mouse en relación con el centro de la pantalla
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        
        // console.log(mouseX + "  " + mouseY)
        
        let rotationZ = ((mouseX - centerX) / centerX) * 40; // 40 es el ángulo máximo
        
        imagenpersonage.style.transform = `translate(${rotationZ * 6.5}px, ${mouseY / 2.6}px) rotate(${rotationZ}deg)  scale(1.2)`
        // spanDisparo.style.transform = `translate(${rotationZ * 6.9}px, 1px) rotate(${rotationZ}deg)  scale(1.2)`

        document.addEventListener("click", (event) => {
            
            
            let counttimerDisparo = 0;
            const timerDisparo = setInterval(() => {
            // Añadir la clase "disparado" al elemento span
            disparoContainer.classList.add("disparado"); // Mejor usar classList para añadir clases
            spanDisparo.style.transform = `translate(${rotationZ * 7.9}px, ${mouseY / 2}px) rotate(${rotationZ}deg)  scale(19.5)`
            
            counttimerDisparo++;
            if (counttimerDisparo >= 2) {
                disparoContainer.className = " disparo";
                clearInterval(timerDisparo);
            }
        }, 100);
        
    });
    
    const imagen = document.getElementById('mirilla');
    
    document.addEventListener('mousemove', (event) => {
        // Actualiza la posición de la imagen según la posición del mouse
        imagen.style.left = event.clientX -49+ 'px';
        imagen.style.top = event.clientY-25 + 'px';
    });
    
    
});

function iniciaJuego(){
    if (pregunta.hasEnded()) {
        showResults();
        return;
      }

      console.log(pregunta)

}

function generaPreguntas(){

}


});