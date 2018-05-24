class ForagerBee {
  constructor() {
    this.age = 10;
    this.color = "yellow";
    this.food = "jelly";
    this.job = "find pollen"
    this.honeyPot = 0;
    this.canFly = true;
    this.treasureChest = [];
  }

  forage(treasure) {
    this.treasureChest.push(treasure)
  }

  eat() {
    return 'Mmmmmmmmm jelly'
  }
};
