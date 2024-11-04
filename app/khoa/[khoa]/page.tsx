// app/khoa/[khoa]/page.tsx

'use client';

import React from 'react';
import menuData, { DepartmentName } from '@/data/Header';
import Header from '@/components/Header';
import { useParams } from 'next/navigation';
import Footer from '@/components/Footer';
import BlogPostsGrid from '@/components/BlogPostsGrid';
import AutoBreadcrumbs from '@/components/AutoBreadcrumb';

const DepartmentPage = () => {
  const params = useParams();
  const khoa = params?.khoa as DepartmentName;

  const departmentData = React.useMemo(() => {
    return menuData[khoa];
  }, [khoa]);

  if (!khoa) {
    return <div className="p-4">Loading...</div>;
  }

  if (!departmentData) {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold text-red-600">Khoa không tồn tại</h1>
      </div>
    );
  }

  return (
    <>
      <Header department={khoa} />
      <AutoBreadcrumbs />
      {/* Pass the blogId dynamically to the BlogPostsGrid */}
      <BlogPostsGrid blogId={departmentData.blogId} />
      <Footer />
    </>
  );
};

export default DepartmentPage;
