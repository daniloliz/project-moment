(function (angular) {

  function ComponenteCtrl($filter) {

    var comp = this;

    comp.hoje =  new Date();

    moment.locale('en-gb');

    comp.dataFormatada = $filter('formatDatesExample')(comp.hoje, "America/Los_Angeles");
    comp.dataRelativa = $filter('formatRelativeTime')(comp.hoje, "America/Los_Angeles");
    comp.calendarTime = $filter('formatCalendarTime')(comp.hoje, "America/Los_Angeles");
    comp.formatLocale = $filter('formatLocale')(comp.hoje, "America/Los_Angeles");

    moment.locale('pt-br');

    comp.dataFormatadaBR = $filter('formatDatesExample')(comp.hoje, "America/Sao_Paulo");
    comp.dataRelativaBR = $filter('formatRelativeTime')(comp.hoje, "America/Sao_Paulo");
    comp.calendarTimeBR = $filter('formatCalendarTime')(comp.hoje, "America/Sao_Paulo");
    comp.formatLocaleBR = $filter('formatLocale')(comp.hoje, "America/Sao_Paulo");

    moment.locale('pt');

    comp.dataFormatadaES = $filter('formatDatesExample')(comp.hoje, "Europe/Lisbon");
    comp.dataRelativaES = $filter('formatRelativeTime')(comp.hoje, "Europe/Lisbon");
    comp.calendarTimeES = $filter('formatCalendarTime')(comp.hoje, "Europe/Lisbon");
    comp.formatLocaleES = $filter('formatLocale')(comp.hoje, "Europe/Lisbon");
  }

  angular.$inject = ['$filter'];

  angular.module('app')
    .controller('ComponenteCtrl', ComponenteCtrl);

})(window.angular);
