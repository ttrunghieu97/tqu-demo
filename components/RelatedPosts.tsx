import { AspectRatio } from "@/components/ui/aspect-ratio"
import type { GetRelatedPostsResult } from "@wisp-cms/client";
import Image from "next/image";
import Link from "next/link";
import type { FunctionComponent } from "react";

export const RelatedPosts: FunctionComponent<{
  posts: GetRelatedPostsResult["posts"];
}> = ({ posts }) => {
  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto my-8 text-xl">
      <div className="mb-6 text-lg font-semibold tracking-tight">
        Gần đây
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
        {posts.slice(0, 7).map((post) => (
          <div className="bg-muted overflow-hidden rounded-lg" key={post.id}>
            <Link href={`/${post.slug}`}>
              <AspectRatio ratio={16 / 9} className="w-full">
                <Image
                  src={post.image || "/img/logo.png"}
                  alt={post.title}
                  fill
                  className="h-full min-h-full min-w-full object-cover object-center"
                />
              </AspectRatio>
              <div className="prose prose-sm dark:prose-invert p-2">
                <h3 className="line-clamp-2">{post.title}</h3>
                <p className="line-clamp-3">{post.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
