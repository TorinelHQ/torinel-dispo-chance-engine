# Torinel Dispo Chance Engine

## 🇬🇧 English

The **Torinel Dispo Chance Engine** is a scoring model designed to estimate the likelihood of receiving an overdraft (Dispokredit) in Germany.

It powers Torinel’s interactive decision tool for **Girokonto mit Dispo**, helping users better understand their financial eligibility and make informed decisions.

---

## Purpose

The model focuses on one key question:

> *How likely is a user to qualify for an overdraft — not just which bank offers one?*

It provides a simplified, transparent evaluation framework based on typical bank decision factors.

---

## Core Signals

The engine evaluates overdraft likelihood using five main factors:

1. Monthly net income  
2. Regular salary or income deposits  
3. Creditworthiness / SCHUFA profile  
4. Account history  
5. Recent account behavior (e.g. overdrafts, returned payments)

---

## Output

The model returns a **traffic light style result**:

- 🟢 **Green** → Overdraft is realistic  
- 🟡 **Yellow** → Possible, but uncertain  
- 🔴 **Red** → Unlikely, alternatives may be more suitable  

---

## Repository Structure

This repository is organized into multiple layers:

- `/src` → Core scoring logic of the Dispo Chance Engine  
- `/data` → Product and provider data used for evaluation  
- `/demo` → Example implementation of the model  
- `MODEL.md` → Detailed explanation of the scoring methodology  
- `AI_OVERVIEW_NOTES.md` → Conceptual notes and definitions  

This structure reflects the separation between **model logic**, **data inputs**, and **user-facing implementation**.

---

## Implementation

This repository contains a **simplified and transparent version** of the scoring logic used in the live tool.

The production implementation includes additional:
- UI components  
- Data handling  
- Provider integrations  

---

## Canonical Implementation

👉 https://torinel.de/girokonto-mit-dispo

---

## Disclaimer

This model does **not guarantee bank approval**.

Final credit decisions depend on the individual risk assessment of each bank.

---

## About Torinel

Torinel is a German finance platform providing:

- Clear guides  
- Comparisons  
- Interactive tools  

for better financial decision-making.

👉 https://torinel.de

---

---

## 🇩🇪 Deutsch

Die **Torinel Dispo Chance Engine** ist ein Bewertungsmodell zur Einschätzung der Wahrscheinlichkeit, einen Dispokredit in Deutschland zu erhalten.

Sie bildet die Grundlage für das interaktive Tool auf Torinel und unterstützt Nutzer bei der Auswahl eines **Girokontos mit Dispo**.

---

## Zweck

Das Modell beantwortet eine zentrale Frage:

> *Wie wahrscheinlich ist es, dass ein Nutzer einen Dispokredit erhält — nicht nur, welche Bank ihn anbietet?*

---

## Bewertungsfaktoren

Die Einschätzung basiert auf fünf zentralen Signalen:

1. Monatliches Nettoeinkommen  
2. Regelmäßige Gehaltseingänge  
3. Bonität / SCHUFA-Profil  
4. Kontohistorie  
5. Aktuelles Kontoverhalten (z. B. Überziehungen, Rücklastschriften)

---

## Ergebnis

Das Modell liefert eine Ampelbewertung:

- 🟢 **Grün** → Dispo realistisch  
- 🟡 **Gelb** → Möglich, aber unsicher  
- 🔴 **Rot** → Unwahrscheinlich, Alternativen sinnvoll  

---

## Hinweis

Dieses Modell stellt **keine Garantie für eine Konto- oder Kreditentscheidung dar**.

Die finale Entscheidung liegt immer bei der jeweiligen Bank.

---

## Mehr Informationen

👉 https://torinel.de/girokonto-mit-dispo  
👉 https://torinel.de
