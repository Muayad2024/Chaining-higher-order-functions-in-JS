const transactions = [
  { amount: 100, type: "credit" },
  { amount: 20, type: "cash" },
  { amount: 150, type: "credit" },
  { amount: 50, type: "cash" },
  { amount: 75, type: "credit" }
];

const totalCreditWithBonus = transactions
  .filter((transaction) => transaction.type === "credit")
  .map((transaction) => transaction.amount * 1.1)  //here it return array of only the amount values only 
  .reduce((sum, amount) => sum + amount, 0);  //this here will summ only the amount and iterate on it 

console.log(totalCreditWithBonus); // 357.5