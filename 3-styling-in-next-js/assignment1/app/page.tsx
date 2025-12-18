"use client";

import Title from "./components/Title";
import Button from "./components/Button";
import Card from "./components/Card";
import AppLayout from "./components/AppLayout";
import Alert from "./components/Alert";

export default function HomePage() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <AppLayout>
      <main style={{ textAlign: "center", marginTop: "50px" }}>
        <Title />
        <p>This is the home page demonstrating a styled button component.</p>

        <Button label="Click Me" onClick={handleClick} />

        {/* Task 6: Tailwind Alert */}
        <Alert
          title="Tailwind Ready ✅"
          message="This alert is styled using Tailwind utility classes."
        />

        {/* Task 4: Inline Styled Cards */}
        <div style={{ marginTop: "30px" }}>
          <Card
            title="Blue Card"
            description="This card uses inline styles and backgroundColor from props."
            backgroundColor="#dbeafe"
          />
          <Card
            title="Green Card"
            description="Different prop value = different background color."
            backgroundColor="#dcfce7"
          />
          <Card
            title="Pink Card"
            description="Props control styles without CSS files."
            backgroundColor="#fce7f3"
          />
        </div>
      </main>
    </AppLayout>
  );
}
