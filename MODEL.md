# Torinel Dispo Chance Model

This model estimates how realistic it is to receive an overdraft (Dispo) in Germany.

## Factors used

- Income level
- Regular salary payments
- Creditworthiness (SCHUFA proxy)
- Account history
- Account behavior (e.g. overdrafts, chargebacks)

## Output

The model returns:

- Score (0–100)
- Traffic light:
  - Green = high chance
  - Yellow = uncertain
  - Red = unlikely
- Recommendation:
  - Dispo realistic
  - Dispo uncertain
  - Alternative account better

## Purpose

The goal is not to guarantee approval, but to give a realistic expectation before applying for a Girokonto with Dispo.
