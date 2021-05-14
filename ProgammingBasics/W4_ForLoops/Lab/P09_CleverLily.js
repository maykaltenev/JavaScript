function cleverLily(input) {
  let age = Number(input[0]);
  let washingMachine = Number(input[1]);
  let price = Number(input[2]);

  let sum = 0;
  let toys = 0;
  let money = 10;
  for (let i = 1; i <= age; i++) {
    if (i % 2 == 0) {
      sum += money;
      sum--;

      money += 10;
    } else {
      toys += 1;
    }
  }
  let priceToys = price * toys;
  let total = sum + priceToys;

  if (total >= washingMachine) {
    console.log(`Yes! ${(total - washingMachine).toFixed(2)}`);
  } else {
    console.log(`No! ${(washingMachine - total).toFixed(2)}`);
  }
}
cleverLily(["10", "170", "6"]);
