export default function HomePage() {
  return (
    <div className="grid">
      <div className="card">
        <h1>Course Summary + 4 Views Project</h1>
        <p>
          This project demonstrates key Next.js concepts covered in the course:
          <span className="badge" style={{ marginLeft: 10 }}>Routing</span>{" "}
          <span className="badge">Components</span>{" "}
          <span className="badge">State (useState)</span>{" "}
          <span className="badge">Events</span>{" "}
          <span className="badge">Conditional Rendering</span>{" "}
          <span className="badge">Lists/Mapping</span>
        </p>
        <p className="small">
          Each route below is a separate page (App Router). Interactivity is done
          with client components using React state and event handlers.
        </p>
      </div>

      <div className="grid two">
        <div className="card">
          <h2>View 2: Calculator (/calculator)</h2>
          <p>
            Two number inputs + buttons for Add/Subtract/Multiply/Divide.
            Implemented using <b>useState</b> to store input values and result,
            and click handlers to compute output.
          </p>
        </div>

        <div className="card">
          <h2>View 3: Text Editor (/editor)</h2>
          <p>
            Textarea with transformations: <b>UPPERCASE</b>, <b>lowercase</b>,
            <b>clear</b>, plus word/character counts. Uses state + derived values.
          </p>
        </div>

        <div className="card">
          <h2>View 4: Quiz (/quiz)</h2>
          <p>
            3 multiple-choice questions with a Submit button. Uses an array of questions,
            stores selected answers in state, then shows correct/incorrect results
            via conditional rendering.
          </p>
        </div>

       
      </div>
    </div>
  );
}
