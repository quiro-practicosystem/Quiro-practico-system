const specialists = ["Camilo", "Francisca", "Juan", "María Paz", "Valentina"];
const startHour = 9;
const endHour = 20;

// Datos de ejemplo simulando la imagen
const appointments = [
    { spec: 0, start: "10:00", end: "11:30", name: "Carlos", desc: "Consulta general", type: "type-blue" },
    { spec: 1, start: "10:00", end: "11:30", name: "Carlos", desc: "Consulta básica", type: "type-pink" },
    { spec: 2, start: "09:30", end: "12:00", name: "Constanza", desc: "Tratamiento básico", type: "type-yellow" },
    { spec: 4, start: "09:00", end: "14:30", name: "Mañana Libre", desc: "", type: "type-grey" }
];

function initCalendar() {
    const grid = document.getElementById('calendarGrid');
    
    // 1. Generar celdas de tiempo y slots
    for (let h = startHour; h <= endHour; h++) {
        for (let m of ['00', '30']) {
            if (h === endHour && m === '30') break;

            // Columna de hora
            const timeDiv = document.createElement('div');
            timeDiv.className = 'time-cell';
            timeDiv.textContent = `${h}:${m}`;
            grid.appendChild(timeDiv);

            // Celdas vacías para cada especialista
            for (let i = 0; i < specialists.length; i++) {
                const slot = document.createElement('div');
                slot.className = 'slot-cell';
                grid.appendChild(slot);
            }
        }
    }

    renderAppointments();
}

function renderAppointments() {
    const grid = document.getElementById('calendarGrid');
    
    appointments.forEach(app => {
        const div = document.createElement('div');
        div.className = `appointment ${app.type}`;
        
        // Calcular posición
        const [hStart, mStart] = app.start.split(':').map(Number);
        const [hEnd, mEnd] = app.end.split(':').map(Number);
        
        const startTotalMin = (hStart - startHour) * 60 + mStart;
        const durationMin = ((hEnd * 60) + mEnd) - ((hStart * 60) + mStart);
        
        // 40px es la altura de 30min (ver CSS)
        const top = (startTotalMin / 30) * 40;
        const height = (durationMin / 30) * 40;
        
        // Ancho: 100% / 5 especialistas (dejando fuera la col de horas)
        const left = `calc(60px + ( (100% - 60px) / 5 ) * ${app.spec})`;
        const width = `calc((100% - 60px) / 5 - 4px)`;

        div.style.top = `${top}px`;
        div.style.height = `${height}px`;
        div.style.left = left;
        div.style.width = width;
        
        div.innerHTML = `
            <span class="time-tag"><i class="far fa-clock"></i> ${app.start} - ${app.end}</span>
            <strong><i class="fas fa-user"></i> ${app.name}</strong><br>
            <span>${app.desc}</span>
        `;
        
        grid.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', initCalendar);
