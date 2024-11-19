// Hàm lấy tên danh mục
export const getCategoryTitle = (category: string) => {
  const titles: { [key: string]: string } = {
    "tin-tuc": "TIN TỨC",
    "su-kien": "SỰ KIỆN",
    "hoat-dong": "HOẠT ĐỘNG",
    "hoi-nghi-hoi-thao": "HỘI NGHỊ - HỘI THẢO",
    "cuoc-thi": "CÁC CUỘC THI",
    "nha-truong": "NHÀ TRƯỜNG",
    "dang-bo": "ĐẢNG BỘ",
    "dong-truong": "HỘI ĐỒNG TRƯỜNG",
    "cong-doan": "CÔNG ĐOÀN",
  };

  return titles[category] || category;
};

export const categories = [
  "su-kien",
  "hoat-dong",
  "hoi-nghi-hoi-thao",
  "cac-cuoc-thi",
  "nha-truong",
  "dang-bo",
  "dong-truong",
  "cong-doan",
];
