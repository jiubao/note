var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var _decorate = function(decorators, target, key, desc) {
  var len = arguments.length;
  var r, decorator;

  if (len < 3) {
    r = target;
  } else if (desc === null) {
    r = desc = Object.getOwnPropertyDescriptor(target, key);
  } else {
    r = desc;
  }

  for (var i = decorators.length - 1; i >= 0; i--) {
    var result;
    if (decorator = decorators[i]) {
      if (len < 3) {
        result = decorator(r);
      } else if (len > 3) {
        result = decorator(target, key, r);
      } else {
        result = decorator(target, key);
      }

      result = result || r;
    }
  }

  if (len > 3 && result) {
    Object.defineProperty(target, key, result);
  }

  return result;
}
