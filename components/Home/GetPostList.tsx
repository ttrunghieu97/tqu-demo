import PostList from "@/components/post/PostList";

export default function GetPostList() {
  // Sử dụng 'as const' để chỉ định rằng categories là một mảng với các giá trị cố định
  const categories = [
    "su-kien",
    "hoat-dong",
    "hoi-nghi-hoi-thao",
    "cuoc-thi",
    "nha-truong",
    "dang-bo",
    "hoi-dong-truong",
    "cong-doan",
  ] as const; // 'as const' giúp TypeScript hiểu rằng các giá trị trong mảng là cố định

  // Định nghĩa đối tượng ánh xạ category sang tên hiển thị
  const categoryNames: { [key in typeof categories[number]]: string } = {
    "su-kien": "Sự kiện",
    "hoat-dong": "Hoạt động",
    "hoi-nghi-hoi-thao": "Hội nghị - Hội thảo",
    "cuoc-thi": "Các cuộc thi",
    "nha-truong": "Nhà trường",
    "dang-bo": "Đảng bộ",
    "hoi-dong-truong": "Hội đồng trường",
    "cong-doan": "Công đoàn",
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-12 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <section key={category} className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-700 overflow-hidden transition-colors duration-200">
                <h2 className="text-2xl font-bold bg-red-800 dark:bg-red-900 text-white p-4 text-center transition-colors duration-200">
                  ► {categoryNames[category] || category} ◄
                </h2>
                <div className="p-4">
                  <PostList
                    category={category}
                    linkPrefix={`/category/${category}`}
                    viewMoreLink={`/category/${category}`}
                  />
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
