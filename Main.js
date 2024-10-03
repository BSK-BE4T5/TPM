"use sctrict";

var __assing = this && this._assing || function() {
  __assing = Object.assign || function (t){
    for (var s, i = 1, n = arguments.length; i<n; i++){
      s = arguments[i];
      for (var p in s ) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assing.apply(this, arguments);
};

var shuffel = function(_a){
  var _b;
  var arr = _a.slice(0);
  while (m) {
    var i = Math.floor(Math.random() * m--);
    _b = [arr[i], arr[m]], arr[m] = _b[0], arr[i] = _b[1];
    
  }
  return arr;

};

var getOffset = function(el) {

  var offset = el.getBoundingClientRect();
  return {top: offset.top - window.scrollY, left: offset.left - window.scrollX };
};

var randomInArrayInRange = function (min, max, n){
  if (n === void 0) {n = 1;}

  return Array.from({length:n},function(){return Math.floor(Math.random()*(max-min+1))+min;});


};

var Droppable = /** @class */function(){

  
}