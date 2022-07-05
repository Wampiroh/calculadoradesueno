let sleepCalc = document.getElementById("sleepCalc");

sleepCalc.addEventListener("submit", calcHandler);
// Obteniendo nombre y valores
function getValues() {
  let nombreUsuario = document.getElementById("nombreUsuario").value,
    lunes = document.getElementById("lunes").value,
    martes = document.getElementById("martes").value,
    miercoles = document.getElementById("miercoles").value,
    jueves = document.getElementById("jueves").value,
    viernes = document.getElementById("viernes").value,
    sabado = document.getElementById("sabado").value,
    domingo = document.getElementById("domingo").value;
  return {
    nombreUsuario,
    lunes,
    martes,
    miercoles,
    jueves,
    viernes,
    sabado,
    domingo,
  };
}
// fin obteniendo nombre y valores

// aquí se hace el Teorema de Pitágoras y binomio al cuadrado perfecto
function calcHandler(e) {
  e.preventDefault();
  const {
    nombreUsuario,
    lunes,
    martes,
    miercoles,
    jueves,
    viernes,
    sabado,
    domingo,
  } = getValues();
  let horasdormidas =
    parseInt(lunes) +
    parseInt(martes) +
    parseInt(miercoles) +
    parseInt(jueves) +
    parseInt(viernes) +
    parseInt(sabado) +
    parseInt(domingo);
  let horasrecomendadas = 56;
  let balance = horasrecomendadas - horasdormidas;
  UI(nombreUsuario, horasdormidas, balance);
  // terminamos con la matemática cuántica

  // local storage, self explanatory
  localStorage.setItem("nombreUsuario", JSON.stringify(nombreUsuario));
  localStorage.setItem("horasdormidas", JSON.stringify(horasdormidas));
  localStorage.setItem("balance", JSON.stringify(balance));
  // acaba local storage
}

// Muestra de resultados
function UI(nombreUsuario, horasdormidas, balance) {
  let result = document.getElementById("result");
  let dataPrint = document.createElement("div");
  dataPrint.innerHTML = `
    <div class="container-data">
      <div class="col s4">
        <h5>${nombreUsuario}</h5>  
      </div>
      <div class="col s4">
        <h5>${horasdormidas}</h5>   
      </div>
      <div class="col s4">
        <h5>${balance} horas</h5>   
      </div>
    </div>
  `;
  result.appendChild(dataPrint);
  reset();
}

function reset() {
  document.getElementById("sleepCalc").reset();
}
// fin de muestra de resultados

// fetch gato random du le bonne chance
let generate_btn = document.querySelector(".generate_btn");

generate_btn.addEventListener("click", fetchPics);

function fetchPics() {
  let catImgDiv = document.querySelector(".catImgDiv");
  catImgDiv.innerHTML = "";

  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      let catImgUrl = data[0].url;

      let catImgEl = document.createElement("img");
      catImgEl.setAttribute("src", `${catImgUrl}`);
      catImgEl.classList.add("showcase");

      let catImgDiv = document.querySelector(".catImgDiv");
      catImgDiv.appendChild(catImgEl);
    })
    .catch((err) => console.log(err));
}
// c'est fini