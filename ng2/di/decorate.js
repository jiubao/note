var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

var __decorate = function(decorators, target, key, desc) {
  var len = arguments.length;
  var result, decorator;

  if (len < 3) {
    result = target;
  } else {
    if (desc === null) {
      desc = Object.getOwnPropertyDescriptor(target, key);
    }
    result = desc;
  }

  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
    result = Reflect.decorate(decorators, target, key, desc);
  } else {
    for (var i = decorators.length - 1; i >= 0; i--) {
      var temp;
      if (decorator = decorators[i]) {
        if (len < 3) {
          temp = decorator(result);
        } else if (len > 3) {
          temp = decorator(target, key, result);
        } else {
          temp = decorator(target, key);
        }
      }
      result = temp || result;
    }
  }

  if (len > 3 && result) {
    Object.defineProperty(target, key, result);
  }

  return result;
}


var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var __metadata = function(key, value) {
  if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') {
    return Reflect.metadata(key, value);
  }
}
