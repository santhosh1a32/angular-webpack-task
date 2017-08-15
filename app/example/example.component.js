import exampleHtml from './example.html';

/* @ngInject */
let exampleComponent = {
  template: exampleHtml,
  controllerAs: 'example',
  controller: function(exampleService, $scope) {
    const vm = this;

    /** Remove a node from tree */
    vm.remove = function(scope) {
      scope.remove();
    };

    /** to expand or collapse node */
    vm.toggle = function(scope) {
      scope.toggle();
    };

    /** Option to add  new node. Not used currently. */
    vm.newSubItem = function(scope) {
      var nodeData = scope.$modelValue;
      nodeData.nodes.push({
        id: nodeData.id * 10 + nodeData.nodes.length,
        title: nodeData.title + '.' + (nodeData.nodes.length + 1),
        nodes: []
      });
    };

    /** [collapseAll nodes] */
    vm.collapseAll = function() {
      console.log(vm.$scope);
      $scope.$broadcast('angular-ui-tree:collapse-all');
    };

    /** [expandAll nodes] */
    vm.expandAll = function() {
      $scope.$broadcast('angular-ui-tree:expand-all');
    };

    vm.data = [{
      'id': 1,
      'title': 'India',
      'nodes': [{
        'id': 11,
        'title': 'West Bengal',
        'nodes': [{
          'id': 111,
          'title': 'Kolkata',
          'nodes': []
        },{
          'id': 112,
          'title': 'Durgapur',
          'nodes': []
        }]
      },{
        'id': 12,
        'title': 'Karnataka',
        'nodes': [{
          'id': 121,
          'title': 'Bengaluru',
          'nodes': []
        }]
      },{
        'id': 13,
        'title': 'Others',
        'nodes': [{
          'id': 131,
          'title': 'Bhubaneswar',
          'nodes': []
        },{
          'id': 132,
          'title': 'Chennai',
          'nodes': []
        },{
          'id': 133,
          'title': 'NCR',
          'nodes': []
        }]
      }]
    }];

    /** [data for custom directive] */
    vm.roleList = {
      name: "India",
      children: [{
        name: "West Bengal",
        collapse: true,
        children: [{
          name: "Kolkata",
          children: []
        }, {
          name: "Durgapur",
          children: []
        }]
      }, {
        name: "Karnataka",
        collapse: true,
        children: [{
          name: "Bengaluru",
          children: []
        }]
      }, {
        name: "Others",
        collapse: true,
        children: [{
          name: "Bhubaneswar",
          children: []
        },{
          name: "Chennai",
          children: []
        },{
          name: "NCR",
          children: []
        }]
      }]
    }
  },

}

export default exampleComponent;
