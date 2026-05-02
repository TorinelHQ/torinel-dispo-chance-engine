import { calculateDispoScore } from "../src/dispoScore.js";

const result = calculateDispoScore({
  income: 2200,
  salaryRegular: true,
  creditScore: "medium",
  accountHistory: "existing",
  behavior: "clean",
});

console.log(result);
