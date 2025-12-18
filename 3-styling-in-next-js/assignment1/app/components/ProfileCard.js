"use client";

import styles from "./ProfileCard.module.css";

export default function ProfileCard({
  name = "John Doe",
  role = "Frontend Developer",
  email = "john@example.com",
  accentColor = "#2563eb", // inline style changes this
  status = "active", // just to show different props
}) {
  // Inline style (dynamic)
  const avatarStyle = {
    backgroundColor: accentColor,
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        {/* CSS Module + Inline style */}
        <div className={styles.avatar} style={avatarStyle}>
          {name.charAt(0).toUpperCase()}
        </div>

        <div className={styles.info}>
          {/* Tailwind utility classes for quick typography */}
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-sm text-gray-600">{role}</p>

          {/* Tailwind badge + dynamic text */}
          <span
            className={`inline-block mt-2 rounded-full px-3 py-1 text-xs font-semibold ${
              status === "active"
                ? "bg-green-100 text-green-800"
                : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {status}
          </span>
        </div>
      </div>

      {/* Tailwind utilities (spacing + colors) */}
      <div className="mt-4 text-left">
        <p className="text-sm">
          <span className="font-semibold">Email:</span>{" "}
          <span className="text-gray-700">{email}</span>
        </p>
      </div>

      {/* CSS Module footer layout + Tailwind button styles */}
      <div className={styles.footer}>
        <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Message
        </button>
        <button className="rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-50">
          View Profile
        </button>
      </div>
    </div>
  );
}
