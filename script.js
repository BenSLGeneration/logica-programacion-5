// Generar número aleatorio entre 1 y 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const intentos = [];

console.log("Número secreto:", numeroSecreto); // Para pruebas en consola

function verificarNumero() {
    const input = document.getElementById("inputNumero");
    const mensaje = document.getElementById("mensaje");
    const listaIntentos = document.getElementById("listaIntentos");

    let numero = parseInt(input.value);

    // Validar que el input sea un número válido
    if (isNaN(numero) || numero < 1 || numero > 100) {
        mensaje.innerHTML = "Ingresa un numero valido entre 1 y 100";
        mensaje.className = "text-danger fw-bold";
        return;
    }

    // Agregar el intento a la lista
    intentos.push(numero);
    let nuevoIntento = document.createElement("li");
    nuevoIntento.classList.add("list-group-item");
    nuevoIntento.innerText = `Intento: ${numero}`;
    listaIntentos.appendChild(nuevoIntento);

    // Comprobar si el número es correcto o dar pistas
    if (numero === numeroSecreto) {
        mensaje.innerHTML = `Felicidades! Adivinaste el número secreto: ${numeroSecreto}.`;
        mensaje.className = "text-success fw-bold";

        console.log("Lista de intentos:", intentos);
    } else if (numero > numeroSecreto) {
        mensaje.innerHTML = "El numero ingresado es muy alto. Intenta de nuevo.";
        mensaje.className = "text-warning fw-bold";
    } else {
        mensaje.innerHTML = "El numero ingresado es muy bajo. Intenta de nuevo.";
        mensaje.className = "text-warning fw-bold";
    }

    // Limpiar input después de ingresar un número
    input.value = "";
}
