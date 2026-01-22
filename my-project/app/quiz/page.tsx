"use client";

import { useMemo, useState } from "react";

type Question = {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
};

const QUESTIONS: Question[] = [
  {
    id: "q1",
    prompt: "Which Next.js feature maps folders to routes automatically?",
    options: ["File-based routing", "Manual route tables", "SQL routing", "Redux routing"],
    correctIndex: 0,
  },
  {
    id: "q2",
    prompt: "Which React hook is commonly used to store user input state?",
    options: ["useFetch", "useState", "useCookie", "useServer"],
    correctIndex: 1,
  },
  {
    id: "q3",
    prompt: "What is conditional rendering used for?",
    options: ["To connect to Wi-Fi", "To show/hide UI based on state", "To compile TypeScript", "To upload images"],
    correctIndex: 1,
  },
];

export default function QuizPage() {
  const [answers, setAnswers] = useState<Record<string, number | null>>(() =>
    Object.fromEntries(QUESTIONS.map((q) => [q.id, null]))
  );
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    let correct = 0;
    for (const q of QUESTIONS) {
      if (answers[q.id] === q.correctIndex) correct++;
    }
    return correct;
  }, [answers]);

  function setAnswer(qid: string, idx: number) {
    setAnswers((prev) => ({ ...prev, [qid]: idx }));
  }

  function reset() {
    setAnswers(Object.fromEntries(QUESTIONS.map((q) => [q.id, null])));
    setSubmitted(false);
  }

  return (
    <div className="grid">
      <div className="card">
        <h1>Quiz (3 Questions)</h1>
        <p className="small">
          Demonstrates mapping arrays into UI, radio inputs, state storage, and result display.
        </p>
      </div>

      <div className="card">
        {QUESTIONS.map((q, qi) => {
          const chosen = answers[q.id];
          const isCorrect = submitted && chosen === q.correctIndex;
          const isWrong = submitted && chosen !== null && chosen !== q.correctIndex;

          return (
            <div key={q.id} className="card" style={{ background: "rgba(0,0,0,0.18)" }}>
              <h2>
                {qi + 1}. {q.prompt}
              </h2>

              <div className="grid">
                {q.options.map((opt, idx) => {
                  const checked = chosen === idx;

                  // After submit, show correct/wrong marks
                  const showCorrect = submitted && idx === q.correctIndex;
                  const showWrongPick = submitted && checked && idx !== q.correctIndex;

                  return (
                    <label key={idx} className="card" style={{ padding: 12, cursor: "pointer" }}>
                      <div className="row" style={{ justifyContent: "space-between" }}>
                        <div className="row">
                          <input
                            type="radio"
                            name={q.id}
                            checked={checked}
                            onChange={() => setAnswer(q.id, idx)}
                            disabled={submitted}
                          />
                          <span>{opt}</span>
                        </div>

                        {showCorrect && <span className="ok">✓ Correct</span>}
                        {showWrongPick && <span className="no">✗ Your choice</span>}
                      </div>
                    </label>
                  );
                })}
              </div>

              {submitted && (
                <div className="small" style={{ marginTop: 8 }}>
                  {isCorrect && <span className="ok">You got this question correct.</span>}
                  {isWrong && (
                    <span className="no">
                      Incorrect. Correct answer: <b>{q.options[q.correctIndex]}</b>
                    </span>
                  )}
                  {chosen === null && (
                    <span className="no">No answer selected for this question.</span>
                  )}
                </div>
              )}
            </div>
          );
        })}

        <hr />

        <div className="row">
          <button className="btn" onClick={() => setSubmitted(true)}>
            Submit
          </button>
          <button className="btn" onClick={reset}>
            Reset
          </button>

          {submitted && (
            <span className="badge">
              Score: {score} / {QUESTIONS.length}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
