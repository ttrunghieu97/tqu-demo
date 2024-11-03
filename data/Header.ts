export type DepartmentType =
  | "Home"
  | "sp"
  | "vhdl"
  | "yduoc"
  | "cttl"
  | "ktqt"
  | "nln";

interface MenuItem {
  type: "simple" | "dropdown" | "title";
  label: string;
  href?: string;
  columns?: number;
  items?: {
    title?: string;
    links: Array<{
      label: string;
      href: string;
    }>;
  }[];
}

interface MenuData {
  universityName: string;
  items: MenuItem[];
}

const menuData: Record<DepartmentType, MenuData> = {
  Home: {
    universityName: "Tân Trào University",
    items: [
      {
        type: "dropdown",
        label: "Giới thiệu",
        columns: 2,
        items: [
          {
            title: "Tỉnh Tuyên Quang",
            links: [
              { label: "Thông tin chung", href: "/gioi-thieu/thong-tin-chung" },
            ],
          },
          {
            title: "Trường ĐH Tân Trào",
            links: [
              {
                label: "Giới thiệu chung",
                href: "/gioi-thieu/gioi-thieu-chung",
              },
              {
                label: "Triết lí giáo dục",
                href: "/gioi-thieu/triet-li-giao-duc",
              },
              { label: "Ban giám hiệu", href: "/gioi-thieu/ban-giam-hieu" },
              { label: "Hội Đồng Trường", href: "/gioi-thieu/ban-giam-hieu" },
            ],
          },
        ],
      },
      // //////////////////////////////////////
      {
        type: "dropdown",
        label: "Tuyển sinh - Đào Tạo",
        columns: 2,
        items: [
          {
            title: "Tuyển sinh",
            links: [
              { label: "Hệ Đại học", href: "/gioi-thieu/thong-tin-chung" },
              { label: "Sau Đại học", href: "/gioi-thieu/thong-tin-chung" },
              {
                label: "Tại chức - VLVH - Liên kết",
                href: "/gioi-thieu/thong-tin-chung",
              },
              { label: "Hệ Cao đẳng", href: "/gioi-thieu/thong-tin-chung" },
            ],
          },
          {
            title: "Đào tạo",
            links: [
              {
                label: "Đăng ký học tín chỉ",
                href: "/gioi-thieu/gioi-thieu-chung",
              },
              {
                label: "Kế hoạch chuyên môn",
                href: "/gioi-thieu/gioi-thieu-chung",
              },

              {
                label: "Mã ngành và VB liên quan",
                href: "/gioi-thieu/gioi-thieu-chung",
              },
              {
                label: "Chương trình đào tạo",
                href: "/gioi-thieu/triet-li-giao-duc",
              },
              { label: "Thời khóa biểu", href: "/gioi-thieu/ban-giam-hieu" },
            ],
          },
        ],
      },
      //////////////////////////////////////////
      {
        type: "dropdown",
        label: "QL-Chất lượng - Thanh tra",
        columns: 6,
        items: [
          {
            title: "Giới thiệu ĐBCL",
            links: [
              {
                label: "Chức năng - nhiệm vụ",
                href: "/gioi-thieu/thong-tin-chung",
              },
              { label: "Hệ thống ĐBCL", href: "/gioi-thieu/thong-tin-chung" },
              { label: "Liên hệ ĐBCL", href: "/gioi-thieu/thong-tin-chung" },
            ],
          },
          {
            title: "Khảo thí",
            links: [
              {
                label: "Quy định khảo thí",
                href: "/gioi-thieu/thong-tin-chung",
              },
              {
                label: "Hướng dẫn khảo thí",
                href: "/gioi-thieu/thong-tin-chung",
              },
              {
                label: "Văn bản thi học phần",
                href: "/gioi-thieu/thong-tin-chung",
              },
            ],
          },
          {
            title: "Đảm bảo CLGD",
            links: [
              {
                label: "Chiến lược - chính sách",
                href: "/gioi-thieu/thong-tin-chung",
              },
              {
                label: "Qui định - Hướng dẫn",
                href: "/gioi-thieu/thong-tin-chung",
              },
              {
                label: "Kế hoạch - khảo sát",
                href: "/gioi-thieu/thong-tin-chung",
              },
            ],
          },
          {
            title: "Công khai CLGD",
            links: [
              {
                label: "Công khai hàng năm",
                href: "/gioi-thieu/thong-tin-chung",
              },
              {
                label: "Văn bản pháp quy",
                href: "/gioi-thieu/thong-tin-chung",
              },
              {
                label: "Văn bằng - Chứng chỉ",
                href: "/gioi-thieu/thong-tin-chung",
              },
            ],
          },
          {
            title: "Chuẩn đầu ra",
            links: [
              {
                label: "Các ngành Đại học",
                href: "/gioi-thieu/thong-tin-chung",
              },
              {
                label: "Các ngành Cao đẳng",
                href: "/gioi-thieu/thong-tin-chung",
              },
            ],
          },
          {
            title: "Thanh tra nội bộ",
            links: [
              { label: "VB pháp quy", href: "/gioi-thieu/thong-tin-chung" },
              {
                label: "Kế hoạch thanh tra",
                href: "/gioi-thieu/thong-tin-chung",
              },
              {
                label: "Báo cáo thanh tra",
                href: "/gioi-thieu/thong-tin-chung",
              },
              { label: "Hồ sơ thanh tra", href: "/gioi-thieu/thong-tin-chung" },
            ],
          },
        ],
      },

      ///////////////////////
      {
        type: "dropdown",
        label: "Đơn vị",
        columns: 5,
        items: [
          {
            title: "Đơn vị trực thuộc",
            links: [
              {
                label: "Trường PT Tuyên Quang",
                href: "/gioi-thieu/thong-tin-chung",
              },
            ],
          },
          {
            title: "Các đoàn thể",
            links: [
              { label: "Công Đoàn", href: "/gioi-thieu/thong-tin-chung" },
              {
                label: "Ban Vì sự Tiến bộ Phụ nữ",
                href: "/gioi-thieu/thong-tin-chung",
              },
              {
                label: "Đoàn thanh niên - Hội sinh viên",
                href: "/gioi-thieu/thong-tin-chung",
              },
            ],
          },
          {
            title: "Khoa chuyên môn",
            links: [
              { label: "Khoa Sư Phạm", href: "/khoa/sp" },
              { label: "Khoa Văn hóa - Du lịch", href: "/khoa/vhdl" },
              { label: "Khoa Y - Dược", href: "/khoa/yduoc" },
              { label: "Khoa Chính trị và TLGD", href: "/khoa/cttl" },
              { label: "Khoa Kinh tế & Quản trị KD", href: "/khoa/ktqt" },
              {
                label: "Khoa Nông - Lâm - Ngư nghiệp",
                href: "/khoa/nln",
              },
            ],
          },
          {
            title: "Phòng - Ban",
            links: [
              { label: "Văn Phòng", href: "/gioi-thieu/thong-tin-chung" },
              {
                label: "Phòng QLCL & Thanh tra",
                href: "/gioi-thieu/thong-tin-chung",
              },
              {
                label: "Phòng QLKH & Hợp tác QT",
                href: "/gioi-thieu/thong-tin-chung",
              },
              { label: "Phòng Đào tạo", href: "/gioi-thieu/thong-tin-chung" },
              {
                label: "Phòng Kế hoạch - Tài vụ",
                href: "/gioi-thieu/thong-tin-chung",
              },
              {
                label: "Phòng Quản lý Sinh viên",
                href: "/gioi-thieu/thong-tin-chung",
              },
            ],
          },
          {
            title: "Bộ môn - Trung tâm",
            links: [
              {
                label: "TT THNN-TV và PTNN",
                href: "/gioi-thieu/thong-tin-chung",
              },
              {
                label: "TT Thực nghiệm & Chuyển giao Công nghệ",
                href: "/gioi-thieu/thong-tin-chung",
              },
              {
                label: "TT Thể dục - Thể thao",
                href: "/gioi-thieu/thong-tin-chung",
              },
            ],
          },
        ],
      },
      //////////////////////////////
      {
        type: "dropdown",
        label: "Tin tức",
        columns: 1,
        items: [
          {
            title: "Tin tức",
            links: [
              {
                label: "Tin tức - Sự kiện",
                href: "/gioi-thieu/thong-tin-chung",
              },
              { label: "Thông báo", href: "/gioi-thieu/thong-tin-chung" },
              {
                label: "Thông tin tuyển dụng",
                href: "/gioi-thieu/thong-tin-chung",
              },
              {
                label: "Lịch công tác chung",
                href: "/gioi-thieu/thong-tin-chung",
              },
            ],
          },
        ],
      },
      ///////////////////////////////
      {
        type: "dropdown",
        label: "Công tác HSSV",
        columns: 1,
        items: [
          {
            title: "Công tác HSSV",
            links: [
              {
                label: "Hoạt động ngoại khóa",
                href: "/gioi-thieu/thong-tin-chung",
              },
              {
                label: "Học bổng - Trợ cấp XH",
                href: "/gioi-thieu/thong-tin-chung",
              },
              { label: "Giải đáp", href: "/gioi-thieu/thong-tin-chung" },
              {
                label: "Nội quy - Quy chế",
                href: "/gioi-thieu/thong-tin-chung",
              },
              {
                label: "Phản hồi sinh viên",
                href: "/gioi-thieu/thong-tin-chung",
              },
            ],
          },
        ],
      },
      {
        type: "dropdown",
        label: "Tài nguyên",
        columns: 1,
        items: [
          {
            title: "Tài nguyên",
            links: [
              {
                label: "Thủ tục hành chính",
                href: "/gioi-thieu/thong-tin-chung",
              },
              { label: "Văn bản", href: "/gioi-thieu/thong-tin-chung" },
              { label: "Văn bản đào tạo", href: "/gioi-thieu/thong-tin-chung" },
              {
                label: "Phổ biến, giáo dục Pháp luật",
                href: "/gioi-thieu/thong-tin-chung",
              },
              { label: "Tài liệu", href: "/gioi-thieu/thong-tin-chung" },
              {
                label: "Bài báo khoa học",
                href: "/gioi-thieu/thong-tin-chung",
              },
            ],
          },
        ],
      },

      ///////////////////////////////
    ],
  },
  ////////////////////////////////////

  /////////////////////////////////
  sp: {
    universityName: "Khoa Sư Phạm",
    items: [
      {
        type: "simple",
        label: "Cơ cấu tổ chức",
        href: "/khoa/su-pham/co-cau-to-chuc",
      },
      {
        type: "simple",
        label: "Tuyển sinh",
        href: "/khoa/su-pham/tuyen-sinh",
      },
      {
        type: "simple",
        label: "NCKH",
        href: "/khoa/su-pham/nckh",
      },
    ],
  },
  vhdl: {
    universityName: "Khoa Nông Lâm",
    items: [
      {
        type: "simple",
        label: "Cơ cấu tổ chức",
        href: "/khoa/nong-lam/co-cau-to-chuc",
      },
      {
        type: "simple",
        label: "Tuyển sinh",
        href: "/khoa/nong-lam/tuyen-sinh",
      },
      {
        type: "simple",
        label: "NCKH",
        href: "/khoa/nong-lam/nckh",
      },
    ],
  },

  yduoc: {
    universityName: "Khoa Nông Lâm",
    items: [
      {
        type: "simple",
        label: "Cơ cấu tổ chức",
        href: "/khoa/nong-lam/co-cau-to-chuc",
      },
      {
        type: "simple",
        label: "Tuyển sinh",
        href: "/khoa/nong-lam/tuyen-sinh",
      },
      {
        type: "simple",
        label: "NCKH",
        href: "/khoa/nong-lam/nckh",
      },
    ],
  },
  cttl: {
    universityName: "Khoa Nông Lâm",
    items: [
      {
        type: "simple",
        label: "Cơ cấu tổ chức",
        href: "/khoa/nong-lam/co-cau-to-chuc",
      },
      {
        type: "simple",
        label: "Tuyển sinh",
        href: "/khoa/nong-lam/tuyen-sinh",
      },
      {
        type: "simple",
        label: "NCKH",
        href: "/khoa/nong-lam/nckh",
      },
    ],
  },
  ktqt: {
    universityName: "Khoa Nông Lâm",
    items: [
      {
        type: "simple",
        label: "Cơ cấu tổ chức",
        href: "/khoa/nong-lam/co-cau-to-chuc",
      },
      {
        type: "simple",
        label: "Tuyển sinh",
        href: "/khoa/nong-lam/tuyen-sinh",
      },
      {
        type: "simple",
        label: "NCKH",
        href: "/khoa/nong-lam/nckh",
      },
    ],
  },
  nln: {
    universityName: "Khoa Nông Lâm",
    items: [
      {
        type: "simple",
        label: "Cơ cấu tổ chức",
        href: "/khoa/nong-lam/co-cau-to-chuc",
      },
      {
        type: "simple",
        label: "Tuyển sinh",
        href: "/khoa/nong-lam/tuyen-sinh",
      },
      {
        type: "simple",
        label: "NCKH",
        href: "/khoa/nong-lam/nckh",
      },
    ],
  },
};

export default menuData;
