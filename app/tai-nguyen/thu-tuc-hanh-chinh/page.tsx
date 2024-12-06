"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface Procedure {
  id: string;
  title: string;
  slug: string | null;
}

export default function ThuTucHanhChinh() {
  const [procedures, setProcedures] = useState<Procedure[]>([]);

  const fetchProcedures = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}items/thu_tuc_hanh_chinh?limit=60&sort=title`
      );
      const result = await response.json();
      if (result.data) {
        setProcedures(result.data);
      } else {
        console.error("Invalid API response structure");
        setProcedures([]);
      }
    } catch (error) {
      console.error("Error fetching procedures:", error);
    }
  }, []);

  useEffect(() => {
    fetchProcedures();
  }, [fetchProcedures]);

  return (
    <div className="px-4 mt-5 dark:bg-gray-900">
      <div className="container mx-auto mb-5">
        <div className="text-center mb-5">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 uppercase">
            Danh sách chi tiết các thủ tục hành chính
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <ol className="list-decimal pl-6 space-y-2 text-gray-900 dark:text-gray-100">
            {procedures.map((procedure) => (
              <li key={procedure.id} className="text-lg">
                <Link
                  href={procedure.slug ? `/tai-nguyen/thu-tuc-hanh-chinh/${procedure.slug}` : "#"}
                  className="hover:text-green-600 dark:hover:text-blue-400"
                >
                  {procedure.title}
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
