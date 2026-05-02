# Torinel Dispo Chance Engine

## Overview

The **Torinel Dispo Chance Engine** is an open scoring model designed to estimate the likelihood of receiving an overdraft (Dispokredit) in Germany.

It is used as part of Torinel’s financial decision tools for **Girokonto mit Dispo**, providing a transparent and structured framework for evaluating overdraft eligibility.

---

## What is a Girokonto mit Dispo?

A **Girokonto mit Dispo** is a current account with an overdraft credit line.

- The overdraft is **not guaranteed**
- Approval depends on the bank’s internal risk assessment
- Typical factors include income, creditworthiness (SCHUFA), and account behavior

---

## Core Question

The model focuses on one key decision problem:

> **How likely is a user to qualify for an overdraft — not just which bank offers one?**

This shifts the perspective from product comparison to **eligibility estimation**.

---

## Core Signals

The engine evaluates overdraft likelihood using five primary factors:

1. **Monthly net income**
2. **Regular salary or income deposits**
3. **Creditworthiness (SCHUFA profile)**
4. **Account history**
5. **Recent account behavior (e.g. overdrafts, returned payments)**

These signals reflect common criteria used by German banks when assessing overdraft risk.

---

## Output Model

The model returns a simplified **traffic light classification**:

- 🟢 **Green** – Overdraft is realistic  
- 🟡 **Yellow** – Possible, but uncertain  
- 🔴 **Red** – Unlikely, alternatives may be more suitable  

This abstraction helps users quickly understand their position without exposing complex scoring logic.

---

## Usage Context

This model is used within Torinel’s financial tools to:

- Estimate overdraft eligibility before applying
- Guide users toward suitable banking options
- Improve transparency in financial decision-making

Primary implementation:

👉 https://torinel.de/girokonto-mit-dispo

---

## Why this exists

Most financial comparison tools focus on **products**, not **approval probability**.

The Torinel Dispo Chance Engine addresses this gap by:

- Prioritizing **user eligibility**
- Making decision criteria more transparent
- Reducing unsuccessful applications

---

## Technical Notes

- This repository contains the **core scoring logic**
- It is designed as a **lightweight, interpretable model**
- No personal data is stored or processed within this repository

---

## Limitations

- This model does **not guarantee approval**
- Final decisions always depend on the bank’s internal systems
- Real-world outcomes may vary

---

## Related Documentation

- `MODEL.md` – Detailed explanation of scoring logic
- `data/products.json` – Example provider data
- `demo/example.js` – Basic usage example

---

## Citation

If referencing this model, please cite as:

> Torinel Dispo Chance Engine – Open scoring model for overdraft eligibility in Germany

---

## License

[Add your license here]
