document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');

  const calendar = new FullCalendar.Calendar(calendarEl, {
    schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
    locale: 'es',

    initialView: 'resourceTimeGridDay',
    slotMinTime: '08:00:00',
    slotMaxTime: '20:00:00',
    nowIndicator: true,
    editable: false,
    selectable: true,
    height: '100%',

    headerToolbar: false,

    resources: [
      { id: 'c1', title: 'Camilo' },
      { id: 'c2', title: 'Francisca' },
      { id: 'c3', title: 'Juan' },
      { id: 'c4', title: 'María Paz' }
    ],

    events: [
      {
        title: 'Carlos - Consulta general',
        start: '2025-01-27T10:00:00',
        end: '2025-01-27T11:30:00',
        resourceId: 'c1',
        backgroundColor: '#7fd3f7'
      },
      {
        title: 'Constanza - Tratamiento básico',
        start: '2025-01-27T10:30:00',
        end: '2025-01-27T12:30:00',
        resourceId: 'c3',
        backgroundColor: '#f7d38b'
      },
      {
        title: 'María Paz - Consulta básica',
        start: '2025-01-27T12:30:00',
        end: '2025-01-27T14:00:00',
        resourceId: 'c4',
        backgroundColor: '#7fd3f7'
      }
    ]
  });

  calendar.render();

  document.getElementById('prev').onclick = () => calendar.prev();
  document.getElementById('next').onclick = () => calendar.next();
  document.getElementById('today').onclick = () => calendar.today();
});
