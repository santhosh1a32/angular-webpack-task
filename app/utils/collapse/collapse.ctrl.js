class CollapseController {
  constructor($scope) {
  	this.$scope = $scope;
  }

  funCall(){
  	console.log("asdasd");
  }
}

CollapseController.$inject = ['$scope'];

export default CollapseController;
