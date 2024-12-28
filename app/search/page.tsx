"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  slug: string;
  created_at: string; // Thêm created_at vào kiểu dữ liệu
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return;
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `http://100.100.10.103:8055/items/posts?search=${encodeURIComponent(query)}`
        );

        if (!response.ok) {
          throw new Error("Có lỗi xảy ra khi tìm kiếm.");
        }

        const data = await response.json();
        const sortedResults = (data.data || [])
          .sort((a: SearchResult, b: SearchResult) => {
            // Sắp xếp theo created_at từ mới nhất đến cũ nhất
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
          });

        setResults(sortedResults);
      } catch {
        setError("Không thể tải kết quả tìm kiếm.");
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Kết quả tìm kiếm cho: <span className="text-blue-500">&quot;{query}&quot;</span>
      </h2>

      {loading && <p className="text-gray-500">Đang tìm kiếm...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {results.length === 0 && !loading && !error && (
        <p className="text-gray-500">
          Không tìm thấy kết quả nào cho từ khóa <strong>&quot;{query}&quot;</strong>.
        </p>
      )}

      <div className="space-y-4">
        {results.map((item) => (
          <Link
            key={item.id}
            href={`/category/tin-tuc/${item.slug}`}
            className="block p-4 bg-gray-50 rounded-md shadow-sm hover:bg-gray-100 transition duration-200"
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
            {/* Hiển thị created_at */}
            <p className="text-gray-400 text-sm mt-2">
              Ngày đăng: {new Date(item.created_at).toLocaleDateString("vi-VN")}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
