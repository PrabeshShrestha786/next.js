"use client";

export default function Alert({
  title = "Tailwind Ready ✅",
  message = "This alert is styled using Tailwind utility classes.",
}) {
  return (
    <div className="mx-auto mt-6 w-full max-w-xl rounded-lg border border-blue-200 bg-blue-100 p-4 text-blue-900 shadow-sm">
      <h3 className="mb-1 text-lg font-bold">{title}</h3>
      <p className="text-sm">{message}</p>
    </div>
  );
}
