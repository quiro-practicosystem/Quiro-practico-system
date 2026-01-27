const agendaBody = document.getElementById("agendaBody");

const startHour = 9;
const endHour = 20;
const interval = 30;
const providers = 5;

// Crear grid
for (let hour = startHour; hour < endHour; hour++) {
  for (let min = 0; min < 60; min += interval) {

    // Columna hora
    const timeCell = document.createElement("div");
    timeCell.className = "time-slot";
    timeCell.innerText = `${hour.toString().padStart(2, "0")}:${min === 0 ? "00" : min}`;
    agendaBody.appendChild(timeCell);

    // Columnas prestadores
    for (let p = 0; p < providers; p++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      agendaBody.appendChild(cell);
    }
  }
}

// Ejemplo de citas
function addAppointment(providerIndex, startRow, duration, text, color) {
  const index = startRow * (providers + 1) + providerIndex + 1;
  const cell = agendaBody.children[index];

  const app = document.createElement("div");
  app.className = `appointment ${color}`;
  app.style.top = "2px";
  app.style.height = `${duration * 40 - 4}px`;
  app.innerHTML = text;

  cell.appendChild(app);
}

// Citas demo
addAppointment(0, 2, 3, "Carlos<br>Consulta general<br>10:00 - 11:30", "blue");
addAppointment(1, 2, 3, "Carlos<br>Consulta básica<br>10:00 - 11:30", "pink");
addAppointment(2, 1, 4, "Constanza<br>Tratamiento básico", "yellow");
addAppointment(3, 3, 2, "Raúl<br>Tratamiento simple", "pink");
addAppointment(4, 5, 3, "María Paz<br>Consulta general", "blue");
