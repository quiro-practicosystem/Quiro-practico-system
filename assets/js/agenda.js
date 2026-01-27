document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');

  const calendar = new FullCalendar.Calendar(calendarEl, {
    locale: 'es',
    initialView: window.innerWidth < 768 ? 'timeGridDay' : 'timeGridWeek',
    height: 'auto',
    nowIndicator: true,
    expandRows: true,

    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },

    buttonText: {
      today: 'Hoy',
      month: 'Mes',
      week: 'Semana',
      day: 'Día'
    },

    selectable: true,
    selectMirror: true,

    dateClick(info) {
      alert(`Nueva cita: ${info.dateStr}`);
    },

    events: [
      {
        title: 'Consulta',
        start: '2026-01-27T10:00:00',
        end: '2026-01-27T11:00:00'
      },
      {
        title: 'Ajuste',
        start: '2026-01-27T12:00:00',
        end: '2026-01-27T12:30:00'
      }
    ]
  });

  calendar.render();
});
