// app/api/users/store.js

const globalForUsers = globalThis;

// keep data in globalThis so it survives hot-reload in dev
export const users =
  globalForUsers.__users ??
  (globalForUsers.__users = [
    { id: "1", name: "Ram", email: "ram@example.com" },
    { id: "2", name: "Sita", email: "sita@example.com" },
  ]);

export function addUser({ name, email }) {
  const newUser = { id: String(Date.now()), name, email };
  users.push(newUser);
  return newUser;
}

export function findUserById(id) {
  return users.find((u) => u.id === id);
}

export function emailExists(email) {
  return users.some((u) => u.email.toLowerCase() === email.toLowerCase());
}
