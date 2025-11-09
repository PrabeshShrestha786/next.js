"use client";

import Title from "./components/Title";
import Button from "./components/Button";

export default function HomePage() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <Title />
      <p>This is the home page demonstrating a styled button component.</p>

      <Button label="Click Me" onClick={handleClick} />
    </main>
  );
}
