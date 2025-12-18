"use client";

export default function Card({
  title = "Card Title",
  description = "This is a card component using inline styles.",
  backgroundColor = "#ffffff",
}) {
  const cardStyle = {
    backgroundColor,          // ✅ driven by prop
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    width: "320px",
    margin: "12px auto",
    textAlign: "left",
  };

  const titleStyle = {
    marginBottom: "8px",
    fontSize: "20px",
    fontWeight: 700,
  };

  const descStyle = {
    fontSize: "14px",
    opacity: 0.85,
  };

  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>{title}</h2>
      <p style={descStyle}>{description}</p>
    </div>
  );
}
