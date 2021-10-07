const Player = function (name) {
  this.name = name;
  this.hand = [];
};

Player.prototype.countCards = function () {
  return this.hand.length;
};
