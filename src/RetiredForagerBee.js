class RetiredForagerBee {
  constructor() {
    this.age = 40;
    this.color = "grey";
    this.food = "jelly";
    this.job = "gamble"
    this.honeyPot = 0;
    this.canFly = false;
    this.treasureChest = [];
  }
  forage() {
    return ("I am too old, let me play cards instead");
  }
  gamble(treasure) {
    this.treasureChest.push(treasure)
  }
  eat() {
    return 'Mmmmmmmmm jelly'

  }
}