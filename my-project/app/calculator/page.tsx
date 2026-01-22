"use client";

import { useMemo, useState } from "react";

export default function CalculatorPage() {
  const [a, setA] = useState<string>("");
  const [b, setB] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const parsed = useMemo(() => {
    const na = Number(a);
    const nb = Number(b);
    const aOk = a.trim() !== "" && Number.isFinite(na);
    const bOk = b.trim() !== "" && Number.isFinite(nb);
    return { na, nb, aOk, bOk };
  }, [a, b]);

  function requireNumbers(): boolean {
    if (!parsed.aOk || !parsed.bOk) {
      setResult("Please enter valid numbers in both fields.");
      return false;
    }
    return true;
  }

  const ops = {
    add: () => {
      if (!requireNumbers()) return;
      setResult(String(parsed.na + parsed.nb));
    },
    sub: () => {
      if (!requireNumbers()) return;
      setResult(String(parsed.na - parsed.nb));
    },
    mul: () => {
      if (!requireNumbers()) return;
      setResult(String(parsed.na * parsed.nb));
    },
    div: () => {
      if (!requireNumbers()) return;
      if (parsed.nb === 0) {
        setResult("Cannot divide by zero.");
        return;
      }
      setResult(String(parsed.na / parsed.nb));
    },
    clear: () => {
      setA("");
      setB("");
      setResult("");
    },
  };

  return (
    <div className="grid">
      <div className="card">
        <h1>Calculator</h1>
        <p className="small">
          Demonstrates state, controlled inputs, and button click handlers.
        </p>
      </div>

      <div className="card">
        <div className="grid two">
          <div>
            <label className="small">Number A</label>
            <input
              className="input"
              value={a}
              onChange={(e) => setA(e.target.value)}
              placeholder="e.g. 10"
              inputMode="decimal"
            />
          </div>

          <div>
            <label className="small">Number B</label>
            <input
              className="input"
              value={b}
              onChange={(e) => setB(e.target.value)}
              placeholder="e.g. 5"
              inputMode="decimal"
            />
          </div>
        </div>

        <hr />

        <div className="row">
          <button className="btn" onClick={ops.add}>Add</button>
          <button className="btn" onClick={ops.sub}>Subtract</button>
          <button className="btn" onClick={ops.mul}>Multiply</button>
          <button className="btn" onClick={ops.div}>Divide</button>
          <button className="btn" onClick={ops.clear}>Clear</button>
        </div>

        <hr />

        <div className="card" style={{ background: "rgba(0,0,0,0.18)" }}>
          <div className="small">Result</div>
          <div style={{ fontSize: 22, marginTop: 6 }}>{result || "—"}</div>
        </div>
      </div>
    </div>
  );
}
