import {
  buildWispClient,
  GetPostsResult,
  GetPostResult,
} from "@wisp-cms/client";

export const wisp = buildWispClient({
  blogId: "cm2wt8r2e0000pqq6sl0b22by",
});

export type { GetPostsResult, GetPostResult };
