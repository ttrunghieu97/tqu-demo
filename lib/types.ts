export type Post = {
  id: string;
  title: string;
  slug: string;
  featured_image: { id: string };
  body: string;
};

export default Post;
