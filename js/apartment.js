(function($, window, document, undefined) {
  var apartment = {
    init: function() {
      this.calendar();
    },

    calendar: function() {
      var dates = {
        apartment1: [
          // 2013
          new Date(2013, 7-1, 7), new Date(2013, 7-1, 8), new Date(2013, 7-1, 9), new Date(2013, 7-1, 10), new Date(2013, 7-1, 11),
          new Date(2013, 7-1, 12), new Date(2013, 7-1, 13), new Date(2013, 7-1, 14), new Date(2013, 7-1, 15), new Date(2013, 7-1, 16),
          new Date(2013, 7-1, 17), new Date(2013, 7-1, 18), new Date(2013, 7-1, 19), new Date(2013, 7-1, 20), new Date(2013, 7-1, 21),
          new Date(2013, 7-1, 22), new Date(2013, 7-1, 23), new Date(2013, 7-1, 24), new Date(2013, 7-1, 29), new Date(2013, 7-1, 30),
          new Date(2013, 7-1, 31), new Date(2013, 8-1, 1), new Date(2013, 8-1, 2), new Date(2013, 8-1, 3), new Date(2013, 8-1, 5),
          new Date(2013, 8-1, 6), new Date(2013, 8-1, 7), new Date(2013, 8-1, 8), new Date(2013, 8-1, 9), new Date(2013, 8-1, 10),
          new Date(2013, 8-1, 11), new Date(2013, 8-1, 12), new Date(2013, 8-1, 14), new Date(2013, 8-1, 15), new Date(2013, 8-1, 16),
          new Date(2013, 8-1, 17), new Date(2013, 8-1, 18), new Date(2013, 8-1, 19),

          // 2014
          new Date(2014, 7-1, 6), new Date(2014, 7-1, 7), new Date(2014, 7-1, 8), new Date(2014, 7-1, 9), new Date(2014, 7-1, 10),
          new Date(2014, 7-1, 11), new Date(2014, 7-1, 12), new Date(2014, 7-1, 13), new Date(2014, 7-1, 14), new Date(2014, 7-1, 15),
          new Date(2014, 7-1, 16), new Date(2014, 7-1, 17), new Date(2014, 7-1, 18), new Date(2014, 7-1, 19), new Date(2014, 7-1, 20),
          new Date(2014, 7-1, 21), new Date(2014, 7-1, 22), new Date(2014, 7-1, 23), new Date(2014, 7-1, 24), new Date(2014, 8-1, 2),
          new Date(2014, 8-1, 3), new Date(2014, 8-1, 4), new Date(2014, 8-1, 5), new Date(2014, 8-1, 6), new Date(2014, 8-1, 7),
          new Date(2014, 8-1, 8), new Date(2014, 8-1, 9), new Date(2014, 8-1, 10), new Date(2014, 8-1, 11), new Date(2014, 8-1, 12),
          new Date(2014, 8-1, 13), new Date(2014, 8-1, 14), new Date(2014, 8-1, 15), new Date(2014, 8-1, 16)
        ],

        apartment2: [
        ]
      };

      $( "#datepicker" ).datepicker({
        dateFormat: 'dd/mm/yy',
        beforeShowDay: highlightDays
      });

      function highlightDays(date) {
        var page = $('#page').data('page');

        for (var i = 0; i < dates[page].length; i++) {
          if (dates[page][i].toString() == date.toString()) {              
            return [true, 'highlight'];
          }
        }
        return [true, ''];
      }
    }
  }

  $(document).ready(function() {
    apartment.init();
  });
})(jQuery, window, document);