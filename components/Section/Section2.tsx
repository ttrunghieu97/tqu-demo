import { wisp } from "@/lib/wisp";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";

interface DateFormat {
  iso: string;
  localized: string;
}

export default async function BlogPostsGrid() {
  const result = await wisp.getPosts({ limit: 6 });

  // Helper function to format dates
  const formatDate = (date: Date | string | undefined): DateFormat | null => {
    if (!date) return null;
    try {
      // Convert to Date object if string is provided
      const dateObj = typeof date === 'string' ? new Date(date) : date;
      return {
        iso: dateObj.toISOString(),
        localized: dateObj.toLocaleString()
      };
    } catch {
      return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {result.posts.map((post) => {
          const date = formatDate(post.publishedAt || post.updatedAt);

          return (
            <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300">
              <Link href={`/${post.slug}`}>
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
                  {post.image ? (
                    <Image
                      alt={post.title}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      src={post.image}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <Image
                        src="/img/logo.png"
                        alt="Default"
                        width={64}
                        height={64}
                        className="opacity-50"
                      />
                    </div>
                  )}
                </div>
              </Link>

              <CardContent className="p-6">
                {date && (
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                    <CalendarDays className="h-4 w-4" />
                    <time dateTime={date.iso}>
                      {date.localized}
                    </time>
                  </div>
                )}

                <Link href={`/${post.slug}`} className="block group-hover:text-primary transition-colors">
                  <h2 className="font-bold text-xl mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-muted-foreground line-clamp-3 text-sm">
                  {post.description}
                </p>
              </CardContent>

              <CardFooter className="px-6 pb-6 pt-0">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-secondary text-secondary-foreground"
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}