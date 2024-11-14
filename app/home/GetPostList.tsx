import PostList from "@/components/post/PostList";

export default function GetPostList() {
  const categories = [
    "Sự kiện",
    "Hoạt động",
    "Hội nghị - Hội thảo",
    "Các cuộc thi",
    "Nhà Trường",
    "Đảng Bộ",
    "Đoàn Trường",
    "Công Đoàn"
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-12 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <section key={category} className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-700 overflow-hidden transition-colors duration-200">
                <h2 className="text-2xl font-bold bg-red-800 dark:bg-red-900 text-white p-4 text-center transition-colors duration-200">
                  ► {category} ◄
                </h2>
                <div className="p-4">
                  <PostList
                    category={category}
                    linkPrefix="/tin-tuc-su-kien"
                    viewMoreLink="/tin-tuc-su-kien/dang-bo"
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