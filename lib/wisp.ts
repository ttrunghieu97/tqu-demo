import {
  buildWispClient,
  GetPostsResult,
  GetPostResult,
} from "@wisp-cms/client";

export const wisp = buildWispClient({
  blogId: "cm2978c2v0000117nhvudgliz",
});

export type { GetPostsResult, GetPostResult };
