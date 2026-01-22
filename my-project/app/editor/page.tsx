"use client";

import { useMemo, useState } from "react";

export default function EditorPage() {
  const [text, setText] = useState<string>("");

  const stats = useMemo(() => {
    const chars = text.length;
    const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    return { words, chars };
  }, [text]);

  return (
    <div className="grid">
      <div className="card">
        <h1>Text Editor</h1>
        <p className="small">
          Demonstrates controlled textarea, transformations, and derived values (word/char count).
        </p>
      </div>

      <div className="card">
        <label className="small">Your text</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something here..."
        />

        <hr />

        <div className="row">
          <button className="btn" onClick={() => setText(text.toUpperCase())}>
            UPPERCASE
          </button>
          <button className="btn" onClick={() => setText(text.toLowerCase())}>
            lowercase
          </button>
          <button className="btn" onClick={() => setText("")}>
            Clear
          </button>

          <span className="badge">Words: {stats.words}</span>
          <span className="badge">Characters: {stats.chars}</span>
        </div>
      </div>
    </div>
  );
}
