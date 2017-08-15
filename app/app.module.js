import angular from 'angular';
import uirouter from 'angular-ui-router';
import example from './example/example.module';
import 'angular-ui-tree';

import myTreeviewModule from './utils/collapse';
// import angularTreeview from './utils/angular.treeview';
// 
// import test from './tree-test';

require('./main.scss');
angular.module('app', [
  uirouter,
  myTreeviewModule,
  'example',
  'ui.tree'
]);
