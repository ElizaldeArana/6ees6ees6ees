class ForagerBee {
  constructor() {
    this.age = 10;
    this.color = "yellow";
    this.food = "jelly";
    this.job = "find pollen"
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