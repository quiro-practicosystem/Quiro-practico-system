document.addEventListener('DOMContentLoaded', function () {

  const calendar = new FullCalendar.Calendar(
    document.getElementById('calendar'),
    {
      schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
      locale: 'es',

      initialView: 'resourceTimeGridWeek',
      slotDuration: '00:30:00',
      slotMinTime: '09:00:00',
      slotMaxTime: '20:00:00',

      headerToolbar: false,
      allDaySlot: false,
      nowIndicator: true,
      height: '100%',

      resources: [
        { id: 'camilo', title: 'Camilo' },
        { id: 'francisca', title: 'Francisca' },
        { id: 'juan', title: 'Juan' },
        { id: 'mariapaz', title: 'María Paz' }
      ],

      events: [
        {
          title: 'Carlos - Consulta general',
          start: '2026-01-27T10:00',
          end: '2026-01-27T11:30',
          resourceId: 'camilo',
          className: 'event-azul'
        },
        {
          title: 'Constanza - Tratamiento básico',
          start: '2026-01-27T10:30',
          end: '2026-01-27T12:00',
          resourceId: 'juan',
          className: 'event-amarillo'
        },
        {
          title: 'María Paz - Consulta básica',
          start: '2026-01-27T12:30',
          end: '2026-01-27T16:00',
          resourceId: 'mariapaz',
          className: 'event-azul'
        }
      ]
    }
  );

  calendar.render();

  document.getElementById('today').onclick = () => calendar.today();
  document.getElementById('prev').onclick = () => calendar.prev();
  document.getElementById('next').onclick = () => calendar.next();
});
