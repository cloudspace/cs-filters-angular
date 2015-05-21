var CSFilters = require('cs-filters');

var app = angular.module('cs-filters', []);

app.filter('bytes',      function() { return CSFilters.Measurements.Bytes;     });
app.filter('bandwidth',  function() { return CSFilters.Measurements.Bandwidth; });
app.filter('kilocase',   function() { return CSFilters.Measurements.KiloCase;  });

app.filter('start-from', function() { return CSFilters.Collections.StartFrom;  });

module.exports = app;
