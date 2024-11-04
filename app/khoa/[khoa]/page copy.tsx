// /home/hieutt/project/tqu-demo/app/khoa/[departmentName]/page.tsx
'use client';
import { useParams } from 'next/navigation';
import BlogPostsGrid from '@/components/BlogPostsGrid';
import Header from '@/components/Header';
import { useEffect } from 'react';
import AutoBreadcrumbs from '@/components/AutoBreadcrumb';
import { DepartmentType } from '@/data/Header';

type DepartmentName = 'supham' | 'vanhoadulich' | 'yduoc' | 'chinhtritamli' | 'kinhtequantri' | 'nonglamngu';

type DepartmentInfo = {
  title: string;
  description: string;
  logoSrc: string;
  department: "supham"
  | "vanhoadulich"
  | "yduoc"
  | "chinhtritamli"
  | "kinhtequantri"
  | "nonglamngu";
  blogId: string;
};

const departmentInfo: Record<DepartmentName, DepartmentInfo> = {
  supham: {
    title: "Khoa Sư Phạm",
    description: "Chào mừng đến với Khoa Sư Phạm",
    logoSrc: '/path/to/supham-logo.png',
    department: 'supham',
    blogId: 'cm2wt8r2e0000pqq6sl0b22by',
  },
  vanhoadulich: {
    title: "Khoa Văn hóa - Du lịch",
    description: "Chào mừng đến với Khoa Văn hóa - Du lịch",
    logoSrc: '/path/to/vhdl-logo.png',
    department: 'vanhoadulich',
    blogId: 'cm31jk0jo0000ijti1e11ipmi',
  },
  yduoc: {
    title: "Khoa Y Dược",
    description: "Chào mừng đến với Khoa Y Dược",
    logoSrc: '/path/to/yduoc-logo.png',
    department: 'yduoc',
    blogId: 'cm31j1fmt0002jp0j9xrshae4',
  },
  chinhtritamli: {
    title: "Khoa Công Nghệ Thông Tin",
    description: "Chào mừng đến với Khoa Công Nghệ Thông Tin",
    logoSrc: '/path/to/chinhtritamli-logo.png',
    department: 'chinhtritamli',
    blogId: 'cm31j3m4n0000102ejl5rblzt',
  },
  kinhtequantri: {
    title: "Khoa Kinh Tế Quốc Tế",
    description: "Chào mừng đến với Khoa Kinh Tế Quốc Tế",
    logoSrc: '/path/to/kinhtequantri-logo.png',
    department: 'kinhtequantri',
    blogId: 'cm2wt8r2e0000pqq6sl0b22by',
  },
  nonglamngu: {
    title: "Khoa Nông Lâm",
    description: "Chào mừng đến với Khoa Nông Lâm",
    logoSrc: '/path/to/nonglam-logo.png',
    department: 'nonglamngu',
    blogId: 'cm2wt8r2e0000pqq6sl0b22by',
  },
};

const DepartmentPage = () => {
  const params = useParams();
  const departmentName = params.departmentName as DepartmentName; // Chuyển đổi sang kiểu DepartmentName

  // Kiểm tra xem departmentName có hợp lệ không
  const currentDepartment = departmentInfo[departmentName] || {
    title: "Khoa Không Tồn Tại",
    description: "Khoa bạn tìm không tồn tại.",
    logoSrc: '/path/to/default-logo.png',
    department: '',
    blogId: '',
  };
  useEffect(() => {
    document.title = currentDepartment.title;
  }, [currentDepartment.title]);

  return (
    <>
      <Header department={currentDepartment.department} />
      <AutoBreadcrumbs />
      <BlogPostsGrid blogId={currentDepartment.blogId} />
    </>
  );
};



export default DepartmentPage;
