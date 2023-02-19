import { mutation } from "./_generated/server";

export default mutation(({ db }, user, friend) => {
    const pairing = { user: user, friend: friend };
    db.insert("friends", pairing);
  });  

// this will be a way for user to add friends. we will have a new table, with user-friend pairings. to find a user's friends, we will query the table for all entries with the user's username, and then return the friend's username for each entry.