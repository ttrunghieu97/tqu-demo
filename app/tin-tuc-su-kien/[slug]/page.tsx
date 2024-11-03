import BlogPosts from "@/components/BlogPosts";

export default function Home() {

  return (
    <div>
      <h1 className="text-3xl font-bold">Blog Posts</h1>
      <BlogPosts blogId='cm2978c2v0000117nhvudgliz' limit={6} />
    </div>
  );
}
