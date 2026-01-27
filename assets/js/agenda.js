document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');

  const calendar = new FullCalendar.Calendar(calendarEl, {
    schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',

    locale: 'es',
    initialView: window.innerWidth < 768 ? 'timeGridDay' : 'resourceTimeGridWeek',
    height: 'auto',

    slotMinTime: '08:00:00',
    slotMaxTime: '20:00:00',
    nowIndicator: true,

    headerToolbar: false,

    resources: [
      { id: 'camilo', title: 'Camilo' },
      { id: 'francisca', title: 'Francisca' },
      { id: 'juan', title: 'Juan' },
      { id: 'mariapaz', title: 'María Paz' }
    ],

    events: [
      {
        title: 'Carlos - Consulta general',
        start: '2026-01-27T10:00:00',
        end: '2026-01-27T11:30:00',
        resourceId: 'camilo',
        className: 'event-azul'
      },
      {
        title: 'Carlos - Consulta básica',
        start: '2026-01-27T10:00:00',
        end: '2026-01-27T11:30:00',
        resourceId: 'francisca',
        className: 'event-rosa'
      },
      {
        title: 'Constanza - Tratamiento básico',
        start: '2026-01-27T10:30:00',
        end: '2026-01-27T12:00:00',
        resourceId: 'juan',
        className: 'event-amarillo'
      },
      {
        title: 'María Paz - Consulta básica',
        start: '2026-01-27T12:30:00',
        end: '2026-01-27T16:00:00',
        resourceId: 'mariapaz',
        className: 'event-azul'
      }
    ]
  });

  calendar.render();

  // Botones externos
  document.getElementById('todayBtn').onclick = () => calendar.today();
  document.getElementById('prevBtn').onclick = () => calendar.prev();
  document.getElementById('nextBtn').onclick = () => calendar.next();
});
