'use client'
import React from 'react';
import VideoLibrary from '@/components/thuvien/thuvienvideo';
import ImageLibrary from '@/components/thuvien/thuvienhinh';
import StudentHighlights from '@/components/thuvien/sinhvientieubieu';

const Section7 = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <VideoLibrary />
        <ImageLibrary />

        <StudentHighlights />
      </div>
    </div>
  );
};

export default Section7;
