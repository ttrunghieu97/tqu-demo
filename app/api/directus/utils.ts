// utils.ts
export const getPostsForCategory = async (category: string, page: number) => {
  const limit = 10; // Số bài viết mỗi trang
  const offset = (page - 1) * limit;

  try {
    const response = await fetch(
      `http://100.100.10.103:8055/items/posts?filter[category][_eq]=${category}&limit=${limit}&offset=${offset}`
    );
    const result = await response.json();

    return {
      posts: result.data,
      totalPages:
        result.meta && result.meta.total_count
          ? Math.ceil(result.meta.total_count / limit)
          : 0,
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      posts: [],
      totalPages: 0,
    };
  }
};

// Hàm lấy tên danh mục
export const getCategoryTitle = (category: string) => {
  const titles: { [key: string]: string } = {
    "su-kien": "Sự kiện",
    "hoat-dong": "Hoạt động",
    "tin-tuc": "Tin tức",
    // Thêm các danh mục khác ở đây
  };

  return titles[category] || category;
};
