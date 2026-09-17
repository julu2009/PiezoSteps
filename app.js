// Datos Base
const DATOSBASE = {        
    energiaporpasoJ: 4, // Energia por paso en J; Rango real es entre 3-8 J
  pasospormin: 115, // Pasos por minuto; cadencia de adulto promedio
};
// Operacion para calcular la energia producida
function CalcularEnergia({ LongitudPanel, GenteALaVez, LongitudAcera, Duracion, UnidadDuracion }, A = DATOSBASE) {
  const cantidadPaneles = Math.floor(LongitudAcera / LongitudPanel);

  const PasosPorMinTotal = GenteALaVez * A.pasospormin;
  const minutosPorUnidad = { min: 1, hr: 60, dia: 1440 };
  const duracionEnMinutos = Duracion * minutosPorUnidad[UnidadDuracion]

  const pasosTotales = PasosPorMinTotal * duracionEnMinutos;
  const energiaTotalJ = pasosTotales * A.energiaporpasoJ;

  return {
    cantidadPaneles,
    pasosTotales,
    energiaTotalJ,
    energiaTotalWh: energiaTotalJ / 3600,
    energiaTotalKWh: energiaTotalJ / 3_600_000,
  };
}

// Funcion para traducir energia producida a J y kWh
function humanizarEnergia(joules) {
  if (joules < 3600) return `${joules.toFixed(0)} J`;
  const wh = joules / 3600;
  if (wh < 1000) return `${wh.toFixed(1)} Wh`;
  return `${(wh / 1000).toFixed(2)} kWh`;
}

// Comparaciones de dispositvos que de pueden cargar con la energia producida
const COMPARACIONES = [
  { etiqueta: "carga de celular",            whCosto: 15 },
  { etiqueta: "bombillo LED (1 hora)",       whCosto: 9 },
  { etiqueta: "carga de laptop",             whCosto: 50 },
  { etiqueta: "hervir 1 litro de agua",      whCosto: 110 },
  { etiqueta: "router WiFi (1 día)",         whCosto: 240 },
  { etiqueta: "microondas (10 min)",         whCosto: 200 },
  { etiqueta: "nevera funcionando (1 día)",  whCosto: 1200 },
  { etiqueta: "casa promedio (1 día)",       whCosto: 29_000 },
];

// Funcion para comparar cuantos Wh se podrian realisticamente obtener
function mejorComparacion(totalWh) {
  let mejor = COMPARACIONES[0];
  let mejorPuntaje = Infinity;
  for (const item of COMPARACIONES) {
    const cantidad = totalWh / item.whCosto;
    if (cantidad < 0.1) continue;
    const puntaje = Math.abs(Math.log10(cantidad) - 1);
    if (puntaje < mejorPuntaje) { mejorPuntaje = puntaje; mejor = item; }
  }
  const cantidad = totalWh / mejor.whCosto;
  return `Con esa energía, podrías alimentar ${cantidad.toFixed(cantidad < 10 ? 1 : 0)} ${mejor.etiqueta}${cantidad >= 2 ? "s" : ""}.`;
}

// Comando para transferir los resultados por su ID a la tabla del index

document.getElementById("Calcular").addEventListener("click", () => {
    const resultado = CalcularEnergia({
    GenteALaVez: Number(document.getElementById("GenteALaVez").value),
    LongitudPanel: Number(document.getElementById("LongitudPanel").value),
    LongitudAcera: Number(document.getElementById("LongitudAcera").value),
    Duracion: Number(document.getElementById("Duracion").value),
    UnidadDuracion: document.getElementById("UnidadDuracion").value,
  });
    Verificar(resultado);
});

// Funcion para verificar si el resultado es valido antes de mostarlo

function Verificar(resultado){
    if (resultado.energiaTotalJ == 0 || isNaN(resultado.energiaTotalJ) || resultado.cantidadPaneles <= 0 || !isFinite(resultado.cantidadPaneles)) {
    document.getElementById("Resultados").textContent =
      `${"RESULTADO INCALCULABLE!"}\n${"Por favor verificar los valores ingresados."}`;
  } else {
    document.getElementById("Resultados").textContent =
      `${humanizarEnergia(resultado.energiaTotalJ)}\n${mejorComparacion(resultado.energiaTotalWh)}\nPaneles estimados: ${resultado.cantidadPaneles}`;
  }
}