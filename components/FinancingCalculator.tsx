"use client";

import { useMemo, useState } from "react";

/**
 * Illustrative-only monthly payment estimator. Clearly disclaimed —
 * this is NOT a quoted rate or an offer, and no specific lender is
 * named until a financing partner is actually confirmed.
 */
export function FinancingCalculator() {
  const [amount, setAmount] = useState(12000);
  const [apr, setApr] = useState(9.99);
  const [months, setMonths] = useState(120);

  const monthlyPayment = useMemo(() => {
    const r = apr / 100 / 12;
    if (r === 0) return amount / months;
    return (amount * r) / (1 - Math.pow(1 + r, -months));
  }, [amount, apr, months]);

  return (
    <div className="border border-line bg-white p-8 sm:p-10">
      <div className="grid gap-6 sm:grid-cols-3">
        <label className="block text-sm">
          <span className="font-medium text-ink">Project Amount</span>
          <input
            type="number"
            value={amount}
            min={1000}
            step={500}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="mt-2 w-full border border-line px-3 py-2 text-ink outline-none focus:border-ink"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-ink">Estimated APR (%)</span>
          <input
            type="number"
            value={apr}
            min={0}
            step={0.1}
            onChange={(e) => setApr(Number(e.target.value))}
            className="mt-2 w-full border border-line px-3 py-2 text-ink outline-none focus:border-ink"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-ink">Term (months)</span>
          <input
            type="number"
            value={months}
            min={12}
            step={12}
            onChange={(e) => setMonths(Number(e.target.value))}
            className="mt-2 w-full border border-line px-3 py-2 text-ink outline-none focus:border-ink"
          />
        </label>
      </div>

      <div className="mt-8 border-t border-line pt-8 text-center">
        <p className="eyebrow text-xs text-steel">Estimated Monthly Payment</p>
        <p className="mt-2 text-5xl font-black tracking-tight text-ink">
          $
          {monthlyPayment.toLocaleString(undefined, {
            maximumFractionDigits: 0,
          })}
          <span className="text-lg font-medium text-steel">/mo</span>
        </p>
      </div>

      <p className="mt-6 text-xs text-steel">
        This calculator is illustrative only and does not represent an offer
        of credit. Actual rate, term, and payment are determined by our
        financing partner following a credit application and approval.
      </p>
    </div>
  );
}
