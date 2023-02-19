import { query } from "./_generated/server";

export default query(async ({ db }, name, desc, username ) => {
      return await db.query("posts").collect();
    });


// export default query(async ({ db }, name, desc, username ) => {
//     return await db
//         .query("posts")
//         .filter(q => q.eq(q.field("username"), username))
//         .collect();
//   });

// List posts with the following characteristics:
// image
// name 
// desc
// score
// username
// date

// According to the following parameters (use OR logic to match any of the following):
// name

// TBD:
// desc
// username (for loop to find all friends? -> do this on the app side)