document.addEventListener('DOMContentLoaded', () => {
    // Manejo de botones de vista (Calendario / Lista)
    const viewButtons = document.querySelectorAll('.view-toggle button');
    
    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            viewButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            console.log("Cambiando vista a: " + btn.innerText);
        });
    });

    // Simulación de clic en una cita
    const appointments = document.querySelectorAll('.appointment');
    appointments.forEach(app => {
        app.addEventListener('click', () => {
            alert("Detalle de la cita: " + app.querySelector('p').innerText);
        });
    });
});
