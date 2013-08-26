var actions = require('view/actions'),
    add = require('view/add'),
    renameTag = require('view/rename-tag'),
    search = require('view/search');

function registerController(app, name, controller) {
    app.controller(name, ['$scope', '$location', controller]);
}

function configViewRouting(app) {
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/add', {templateUrl: '/js/view/add.html', controller: 'AddCtrl'})
            .when('/search', {templateUrl: '/js/view/search.html', controller: 'SearchCtrl'})
            .when('/rename-tag', {templateUrl: '/js/view/rename-tag.html', controller: 'RenameTagCtrl'})
            .when('/actions', {templateUrl: '/js/view/actions.html', controller: 'ActionsCtrl'})
            .otherwise({redirectTo: '/actions'});
    }]);
}

module.exports = {
    init: function () {
        angular.element(document).ready(function() {
            var bookmarkApp = angular.module('bookmark', ['ui.bootstrap', 'bootstrap-tagsinput', 'ngGrid', 'angularFileUpload']);

            configViewRouting(bookmarkApp);
            registerController(bookmarkApp, actions.name, actions.controller);
            registerController(bookmarkApp, add.name, add.controller);
            registerController(bookmarkApp, renameTag.name, renameTag.controller);
            registerController(bookmarkApp, search.name, search.controller);

            angular.bootstrap(document, ['bookmark']);
        });
    }
}