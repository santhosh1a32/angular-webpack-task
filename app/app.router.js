routing.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', '$httpProvider', '$sceProvider'];

export default function routing($stateProvider, $locationProvider, $urlRouterProvider, localStorageServiceProvider, $httpProvider, $sceProvider) {
    //$locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/test');

   
}
