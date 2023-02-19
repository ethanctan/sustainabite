import { mutation } from "./_generated/server";

// Generate a short-lived upload URL.
export const generateUploadUrl = mutation(async ({ storage }) => {
    return await storage.generateUploadUrl();
});

// Save the storage ID within a message.
export const postPost = mutation(async ({ db }, storageId, name, desc, score, username ) => {
    const post = { image: storageId, name: name, desc: desc, score: score, username: username };
    await db.insert("posts", post);
});

// Submit post with the following characteristics:
// image
// name 
// desc
// score
// username

// TODO:
// date