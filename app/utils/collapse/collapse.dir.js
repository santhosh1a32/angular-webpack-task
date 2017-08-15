function tree($compile) { 
  return {
    restrict: "E",
    scope: { content: '=' },
    template: '<p>{{ content.name }}</p>' +
      '<ul>' +
      '<li ng-repeat="child in content.children">' +
      '<tree content="child"></tree>' +
      '</li>' +
      '</ul>',
    compile: function(tElement, tAttr) {
      var contents = tElement.contents().remove();
      var compiledContents;
      return function(scope, iElement, iAttr) {
        if (!compiledContents) {
          compiledContents = $compile(contents);
        }
        compiledContents(scope, function(clone, scope) {
          iElement.append(clone);
        });
      };
    },
    link: function(scope, iElement, iAttrs){
      scope.funCall = function(){
        console.log(scope);
      }
    },
    controller: 'CollapseController',
        controllerAs: 'vm',
        bindToController: {
          content: '=ngModel',
        }
  };
}

tree.$inject = ['$compile'];

export default tree;
