// app/[khoa]/page.tsx

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { DepartmentName } from '@/data/Header'; // Import kiểu DepartmentName

interface KhoaPageProps {
  params: {
    khoa: string;
  };
}

// Hàm kiểm tra xem khoa có thuộc kiểu DepartmentName không
const isValidDepartment = (khoa: string): khoa is DepartmentName => {
  return [
    "Home",
    "supham",
    "vanhoadulich",
    "yduoc",
    "chinhtritamli",
    "kinhtequantri",
    "nonglamngu"
  ].includes(khoa);
};

export default function KhoaPage({ params }: KhoaPageProps) {
  const { khoa } = params;

  // Kiểm tra giá trị khoa và ép kiểu nếu hợp lệ
  if (!isValidDepartment(khoa)) {
    return <p>Invalid department: {khoa}</p>; // Hiển thị thông báo lỗi nếu khoa không hợp lệ
  }

  return (
    <>
      <Header department={khoa} />

      <Footer />
    </>
  );
}
