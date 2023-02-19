import { query } from "./_generated/server";

export default query(async ({ db }, username, pw) => {
  return await db
    .query("users")
    .filter(q => q.and(q.eq(q.field("username"), username), q.eq(q.field("pw"), pw)))
    .collect();
});

// Query db for match with username and password
// If null, user does not exist. If match, user exists and login can be done.