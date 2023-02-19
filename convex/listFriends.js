import { query } from "./_generated/server";

export default query(async ({ db }, user ) => {
    return await db
      .query("friends")
      .filter(q => q.eq(q.field("user"), user))
      .collect();
  });

  // Lists all friends of a certain user