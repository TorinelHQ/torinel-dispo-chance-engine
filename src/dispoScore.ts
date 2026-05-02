export function calculateDispoScore(input) {
  let score = 0;

  // Income
  if (input.income > 1500) score += 20;
  if (input.income > 2500) score += 10;

  // Salary stability
  if (input.salaryRegular) score += 20;

  // Credit (SCHUFA)
  if (input.creditScore === "good") score += 25;
  if (input.creditScore === "medium") score += 10;
  if (input.creditScore === "bad") score -= 20;

  // Account history
  if (input.accountHistory === "existing") score += 15;

  // Behavior
  if (input.behavior === "clean") score += 10;
  if (input.behavior === "mixed") score += 0;
  if (input.behavior === "negative") score -= 20;

  // Result
  let status = "red";
  if (score >= 70) status = "green";
  else if (score >= 40) status = "yellow";

  let recommendation =
    status === "green"
      ? "Girokonto mit Dispo realistisch"
      : status === "yellow"
      ? "Dispo möglich, aber unsicher"
      : "Alternative ohne Dispo realistischer";

  return { score, status, recommendation };
}
