import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-400 mb-4">Không tìm thấy trang</h2>
      <p className="text-gray-500 dark:text-gray-500 mb-8">Xin lỗi, trang bạn đang tìm kiếm không tồn tại.</p>
      <Link
        href="/"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
      >
        Quay lại trang chủ
      </Link>
    </div>
  )
}