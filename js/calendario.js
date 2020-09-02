document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid' ],
      locale: 'es',
      events: [
        {
          title: 'Evento prueba 1',
          start: '2021-06-30'
        },
        {
            title: 'Evento prueba 2',
            start: '2020-11-01'
          },
        {
            title: 'Mi cumpleaños',
            start: '2020-11-28',
            end:'2020-07-09'
          },
        {
            title: 'Evento prueba 3',
            start: '2021-08-02'
          }, 
        {
            title: 'Evento prueba 4',
            start: '2020-09-10'
          }, 
        {
            title: 'Evento prueba 5',
            start: '2021-03-10'
          }, 
        {
            title: 'Evento prueba 6',
            start: '2020-12-01'
          },
        {
            title: 'Evento prueba 7',
            start: '2020-12-15'
          }    
        ] 
    });

    calendar.render();
  });