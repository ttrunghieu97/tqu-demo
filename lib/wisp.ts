import {
  buildWispClient,
  GetPostsResult,
  GetPostResult,
} from "@wisp-cms/client";

// Function to create a Wisp client with a dynamic blogId
export const createWispClient = (blogId: string) => {
  return buildWispClient({
    blogId,
  });
};

export type { GetPostsResult, GetPostResult };
