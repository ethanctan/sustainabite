import { query } from "./_generated/server";

export default query(async ({ db }, username ) => {
    return await db
      .query("users")
      .filter(q => q.eq(q.field("username"), username))
      .collect();
  });

  // Lists all users that match a certain username