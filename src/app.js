var CSFilters = require('cs-filters');
var angular   = require('angular');

var app = angular.module('cs-filters');

app.filter('bytes',      function() { return CSFilters.Measurements.Bytes; });
app.filter('bandwidth',  function() { return CSFilters.Measurements.Bytes; });
app.filter('kilo-case',  function() { return CSFilters.Measurements.Bytes; });

app.filter('start-from', function() { return CSFilters.Collections.Bytes;  });

module.exports = app;
