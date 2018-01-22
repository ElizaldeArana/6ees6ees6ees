class HoneyMakerBee {
  constructor() {
    this.age = 10;
    this.color = "yellow";
    this.food = "jelly";
    this.job = "make honey"
    this.honeyPot = 0;
  }
  makeHoney() {
    this.honeyPot++
  }
  giveHoney() {
    this.honeyPot--
  }
  eat() {
    return 'Mmmmmmmmm jelly'

  }
};