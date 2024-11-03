// /home/hieutt/project/tqu-demo/app/khoa/[departmentName]/page.tsx
'use client';
import { useParams } from 'next/navigation';
import BlogPostsGrid from '@/components/BlogPostsGrid';
import Header from '@/components/Header';
import { useEffect } from 'react';
import AutoBreadcrumbs from '@/components/AutoBreadcrumb';

type DepartmentName = 'supham' | 'vhdl' | 'yduoc' | 'cttl' | 'ktqt' | 'nln';

type DepartmentInfo = {
  title: string;
  description: string;
  logoSrc: string;
  department: "sp"
  | "vhdl"
  | "yduoc"
  | "cttl"
  | "ktqt"
  | "nln";
  blogId: string;
};

const departmentInfo: Record<DepartmentName, DepartmentInfo> = {
  supham: {
    title: "Khoa Sư Phạm",
    description: "Chào mừng đến với Khoa Sư Phạm",
    logoSrc: '/path/to/supham-logo.png',
    department: 'sp',
    blogId: 'cm2wt8r2e0000pqq6sl0b22by',
  },
  vhdl: {
    title: "Khoa Văn hóa - Du lịch",
    description: "Chào mừng đến với Khoa Văn hóa - Du lịch",
    logoSrc: '/path/to/vhdl-logo.png',
    department: 'vhdl',
    blogId: 'cm2wt8r2e0000pqq6sl0b22by',
  },
  yduoc: {
    title: "Khoa Y Dược",
    description: "Chào mừng đến với Khoa Y Dược",
    logoSrc: '/path/to/yduoc-logo.png',
    department: 'yduoc',
    blogId: 'cm2wt8r2e0000pqq6sl0b22by',
  },
  cttl: {
    title: "Khoa Công Nghệ Thông Tin",
    description: "Chào mừng đến với Khoa Công Nghệ Thông Tin",
    logoSrc: '/path/to/cttl-logo.png',
    department: 'cttl',
    blogId: 'cm2wt8r2e0000pqq6sl0b22by',
  },
  ktqt: {
    title: "Khoa Kinh Tế Quốc Tế",
    description: "Chào mừng đến với Khoa Kinh Tế Quốc Tế",
    logoSrc: '/path/to/ktqt-logo.png',
    department: 'ktqt',
    blogId: 'cm2wt8r2e0000pqq6sl0b22by',
  },
  nln: {
    title: "Khoa Nông Lâm",
    description: "Chào mừng đến với Khoa Nông Lâm",
    logoSrc: '/path/to/nonglam-logo.png',
    department: 'nln',
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
