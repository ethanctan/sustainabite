import { mutation } from "./_generated/server";

export default mutation(({ db }, username, pw) => {
  const user = { username: username, pw: pw };
  db.insert("users", user);
});

// This is not a secure way to store passwords, but it's good enough for this proof of concept