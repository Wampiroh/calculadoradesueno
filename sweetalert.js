document.getElementById("swal").addEventListener("click", function () {
  Swal.fire(`${Mensaje}`);
});

let horasdormidas = 55

let horasrecomendadas = 56;

if (horasdormidas < horasrecomendadas){
  Mensaje = "Descansaste bien, excelente.";
} else if (horasdormidas > horasrecomendadas){
  Mensaje = "Deberías intentar descansar un poco más.";
} else {
  Mensaje = "Puedes ver tus resultados al final de la página.";
}