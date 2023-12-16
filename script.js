document.addEventListener("DOMContentLoaded", function () {
    let calcular = document.getElementById("calcular");
    const ERROR = document.getElementById("error");
    const resultadoFinal = document.getElementById("resultadoFinal");

    calcular.addEventListener("click", () => {
        let dato = document.getElementById("peso");
        if (dato.value === "") {
            ERROR.style.display = "block";
            resultadoFinal.textContent = "Resultado Final: "; // Limpiar resultado en caso de error
            return;
        }
        ERROR.style.display = "none";
        let peso = dato.value * 1;
        let vol1 = 0;
        let vol2 = 0;
        if (peso > 30) {
            vol1 = superficiecorporal(peso) * 1500;
            vol2 = superficiecorporal(peso) * 2000;

            // Actualizar resultado en el HTML
            resultadoFinal.textContent = `Resultado superficiecorporal: Entre ${vol1} y ${vol2} cc/h`;
        } else {
            const resultadoHollidaySegar = hollidaySegar(peso);
            // Actualizar resultado en el HTML
            resultadoFinal.textContent = `Resultado hollidaySegar: ${resultadoHollidaySegar} cc/h`;
        }
    });

    function superficiecorporal(peso) {
        let superficies;
        superficies = ((peso * 4) + 7) / (peso + 90);
        return superficies;
    }

    function hollidaySegar(peso) {
        let volumen;
    
        if (peso <= 10) {
            volumen = peso * 100;
        } else if (peso <= 20) {
            volumen = (peso - 10) * 50 + 1000;
        } else {
            volumen = (peso - 20) * 20 + 1500;
        }
    
        // Devolver el volumen calculado
        return volumen;
    }
});
