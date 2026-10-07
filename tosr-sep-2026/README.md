# Reconciling the R2 Task Order Across an Option-Year Transition

**Prepared by:** Derrick M. Sprague, Operations Analyst, Knowesis, Inc.
**Period:** September 2026 TOSR (PWS 1.22) · OY1 closed 16 SEP 26 · OY2 began 17 SEP 26

## Overview

The requiring activity asked for a shortened September Task Order Status Report built only on "minimum essential, verifiable information." Because Option Year 1 closed mid-month, September's spend had to be split across two budgets. This review audited the seven-slide financial enclosure line by line before submission and produced the Finance (Sections 1–3) and Logistics enclosures from the corrected figures.

## Key results

| Result | Value |
|---|---|
| Discrepancies identified before submission | 11 |
| Overstatement identified in the OY2 starting balance | ~$62K ($1,353,116.44 reported vs. $1,291,034.41 corrected) |
| September costs assigned to neither option year | $10,871.31 |
| Competing uncommitted-funds methods tested | 3 (one rule recommended) |
| Amazon bulk order vs. SOA projection | $206,531.29 actual vs. $290,577.80 projected (28.9% under) |

Status: completed 07 OCT 26; government review of the corrected OY2 baseline is pending.

## Method

1. **Source**: extract every slide table into a structured dataset with slide references.
2. **Validate**: recompute every row and total and flag mismatches in place.
3. **Cross-walk**: reconcile the full-month September view against the OY1 and OY2 views until the difference closes to $0.
4. **Test alternatives**: rebuild the uncommitted-funds balance under each competing rule.
5. **Judge and restate**: separate fact from judgment, state assumptions and limits, and restate the OY2 baseline.

## Using the page

Open `index.html` in any browser; it is a single self-contained file (slide images embedded, no build step). Views:

- **Crosswalk**: waterfall from the full-month total to a $0 remainder.
- **OY1 Close**: monthly chart with tooltips, balance-rule comparison and the flagged monthly table.
- **September Split**: 1–16 vs. 17–30 SEP, as reported and corrected.
- **OY2 Scenarios**: toggle each correction and watch the FY27 balance update.
- **Amazon Order**: 37 lines filterable by option year.
- **Findings**: the 11-item discrepancy register with sources and fixes.
- **Enclosures**: Finance Sections 1–3 and the Logistics Enclosure, ready to copy.

Each view includes the original source slide with a qualitative review.

## Limitations

Figures come from the enclosure slides only and have not been reconciled against CostPoint, the general ledger or vendor receipts. Option-year assignment of the Amazon order by location is read from the slide's row shading. The corrected OY2 balance assumes spent, pending and projected costs are all deducted.

---
**Handling:** Unclassified.
