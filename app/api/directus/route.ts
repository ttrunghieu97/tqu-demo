// app/api/directus/route.ts

import { NextResponse } from "next/server";

export async function GET() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL + "items/posts";

  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: unknown) {
    // Ép kiểu `error` thành `Error` để sử dụng `message`
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Nếu lỗi không phải là instance của `Error`, trả về lỗi mặc định
    return NextResponse.json(
      { error: "Unknown error occurred" },
      { status: 500 }
    );
  }
}
