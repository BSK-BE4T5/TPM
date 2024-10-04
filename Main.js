"use sctrict";

var __assign = this && this._assing || function() {
  __assign = Object.assign || function (t){
    for (var s, i = 1, n = arguments.length; i<n; i++){
      s = arguments[i];
      for (var p in s ) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
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
  function Droppable (el) {
    this.droppableEl = el;
  }
  Droppable.prototype.isDroppable = function (droppableEl) {
    var draggableOffset = getOffset(draggableEl);
    var droppableOffset = getOffset(this.droppableEl);

    var _a = [draggableEl.offsetwidth, draggableEl.offsetHeight], draggablewidth = _a[0], draggableHeight =  _a[1];
    var _b = [this.droppableEl.offsetwidth, this.droppableEl.offsetHeight], droppableWidth = _b[0], droppableHeight =  _b[1];

    return !(droppableOffset.left > draggableOffset.left + draggableWidth - draggablewidth - draggableWidth / 2 || 

      droppableOffset.left + droppableWidt < draggableOffset.left + draggableWidth / 2 ||

      droppableOffset.top > draggableOffset.top + draggableHeight - draggableHeight /2 ||

      droppableOffset.top + droppableHeight < draggableOffset.top + draggableHeight /2);

  };
  return Droppable;



}();

var Draggable = /**@class */function (){
  function Draggable(el){
    this.draggableEl = el;
    this.draggie = new draggabilly(el);
    this.originPos = __assign
    

  }
  return Draggable;



}();

var randomBlockWidths = randomInArrayInRange(30, 60, 10);

var randomBlockBorderRadiuses = randomInArrayInRange(1,30,10);

var draggableBlocks = document.querySelectorAll('.block.draggable');

var targetBlocks = document.querySelectorAll('block.target');

var startBtn = document.querySelector('#start');

var scoreNumber = document.querySelector(".score-number");

var timeLeftNumber = document.querySelector("time-left-number");

var finalScoreDialog = document.querySelector("#final-score-dialog");

var finalScore = document.querySelector(".final-score");

var youWin = document.querySelector(".you-win");

var youLose = document.querySelector("you.lose");

var draggables = Array.from(draggableBlocks).map(function(block){return new Draggable(block);});

var droppables = Array.from(targetBlocks).map(function (block){return new Droppable(block);});

var score = 0;

var win = false;

var SCOREINC = 10;

var WINSCORE = SCOREINC * targetBlocks.length;

var TIME = 30;

var INTERVAL = 600;

var timer;

var timeLeft = TIME;

var enableBlocks = function(){
  draggables.forEach(function (draggable){
    draggable.draggableEl.removeAttribute('disabled');

  });

};

var disableBlocks = function (){
  draggables.forEach(function (draggable){
    draggable.draggableEl.setAttribute('disabled', '');

  });
};

var shuffleTargets = function (){
  var cardIndexes = Array.from(Array(targetBlocks.length).keys());
  var shufferedIndexs = shuffel(cardIndexes);

  targetBlocks.forEach(function(item, i)){
    return item.style.setProperty("--order", shu)

  }

}

