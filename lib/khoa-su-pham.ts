import {
  buildWispClient,
  GetPostsResult,
  GetPostResult,
} from "@wisp-cms/client";

export const wisp = buildWispClient({
  blogId: "cm2vu7j1a000013uh3duu7rm6",
});

export type { GetPostsResult, GetPostResult };
