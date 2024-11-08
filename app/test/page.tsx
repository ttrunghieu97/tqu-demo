'use client'
import { useEffect, useState } from 'react';

interface Post {
  id: string;
  title: string;
  content: string;
  // Thêm các thuộc tính khác nếu có
}

const Page = () => {
  const [posts, setPosts] = useState<Post[]>([]); // Sử dụng kiểu dữ liệu Post[]
  const [loading, setLoading] = useState<boolean>(true); // Trạng thái tải

  // Fetch dữ liệu bài viết từ API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Fetch API từ server của bạn, thay 'your-api-endpoint' bằng API thực tế
        const response = await fetch('/api/photos/albums');
        const data = await response.json();

        // Kiểm tra kiểu dữ liệu trả về và set vào state
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Hiển thị loading nếu đang tải
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Recent Posts</h1>
      <div>
        {posts.length === 0 ? (
          <p>No posts available</p>
        ) : (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                {/* Thêm thông tin khác nếu cần */}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Page;
