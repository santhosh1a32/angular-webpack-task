import tree from './collapse.dir';
import CollapseController from './collapse.ctrl';

 const myTreeviewModule = angular.module('tree', []);

angular.module('tree', []) 
.directive('tree', tree)
.controller('CollapseController', CollapseController)

export default myTreeviewModule.name;  