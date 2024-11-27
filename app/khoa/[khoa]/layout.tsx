import * as React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trường Đại Học Tân Trào',
  description: 'Demo For Learning',
  icons: {
    icon: "/img/logo.png",
  },
};

const VALID_DEPARTMENTS = ['supham', 'vanhoadulich', 'yduoc', 'chinhtritamli', 'kinhtequantri', 'nonglamngu'] as const;
type ValidDepartment = typeof VALID_DEPARTMENTS[number];

function isValidDepartment(department: string): department is ValidDepartment {
  return VALID_DEPARTMENTS.includes(department as ValidDepartment);
}

export default async function KhoaLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<
    {
      khoa: string
    }>;
}) {
  const resolvedParams = await params; // Resolve promise

  if (!isValidDepartment(resolvedParams.khoa)) {
    notFound();
  }

  return (
    <>
      <div className='dark:bg-gray-900 white:bg-gray-100' >
        <Header department={resolvedParams.khoa} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}