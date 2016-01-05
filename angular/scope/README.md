scope
=====

prototypal inheritance tree
---------------------------
**define**
* `__proto__`

**function**
* properties reference

operating tree
--------------
**define**
* $parent
* $prevSibling
* $nextSibling
* $childHead
* $childTail

**function**
* traversal tree
* digest
* event
  * emit
  * broadcast

digest
------
* digest only detect children, don't effect parents

event
-----
* isolate scope is in operating tree, events will be triggerred for emit/broadcast

**index.html**
```html
<!DOCTYPE html>
<html>
<head>
  <title>scope issues</title>
  <script type="text/javascript" src="angular.js"></script>
</head>
<body>
<div ng-app="app1" id="app">
  <div ng-controller="ctrl1" id="ctrl" ng-init="init()">
    Name: <span ng-bind="name" id="span"></span><br/>
    <input type="text" ng-model="name" id="input" />
    <div xd-dir1 id="dir" my-attr="hello {{name}}"></div>
    <div xd-dir1 id="dir2" my-attr="hello {{name}}"></div>
  </div>
  <div ng-controller="ctrl2">
    <input ng-model="addr" />
  </div>
</div>
<script type="text/javascript" src="test.js"></script>
</body>
</html>
```

**test.js**
```javascript
(function() {

var _ = window._ = function(id) {
  // if (id instanceof angular.element)
  if (angular.isString(id))
    return angular.element(document.getElementById(id));

  return angular.element(id);
}

angular.module('app1', [])
.controller('ctrl1', ['$scope', function($scope) {
  $scope.name='xiad';
  $scope.init = function() {
    window.app = _('app').scope();
    window.ctrl = _('ctrl').scope();
    window.span = _('span').scope();
    window.input = _('input').scope();
    window.dir = _('dir').scope();
  }
}])
.directive('xdDir1', function() {
  return {
    template: '<div>{{localName}}</div>',
    scope: {
      localName: '@myAttr'
    },
    link: function(scope, elememt, attrs) {
      scope.$on('event1', function() {
        console.log('xxx---xxx');
      })
    }
  };
})
.run(function(){
})
.controller('ctrl2', ['$scope', function($scope) {
  $scope.addr = 'shanghai';
}])
;

})();
```