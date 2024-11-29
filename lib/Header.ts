export type DepartmentName =
  | "Home"
  | "supham"
  | "vanhoadulich"
  | "yduoc"
  | "chinhtritamli"
  | "kinhtequantri"
  | "nonglamngu";

interface DepartmentInfo {
  title: string;
  description: string;
  logoSrc: string;
  blogId: string;
}
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

interface MenuData extends DepartmentInfo {
  universityName: string;
  items: MenuItem[];
}

const menuData: Record<DepartmentName, MenuData> = {
  Home: {
    universityName: "Tan Trao University",
    title: "Trang Chủ",
    description: "Welcome to Tân Trào University",
    logoSrc: "",
    blogId: "cm2978c2v0000117nhvudgliz", // Add your specific blogId here
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
              { label: "Hội Đồng Trường", href: "/gioi-thieu/hoi-dong-truong" },
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
              { label: "Hệ Đại học", href: "/tuyen-sinh/he-dai-hoc" },
              { label: "Sau Đại học", href: "/tuyen-sinh/sau-dai-hoc" },
              {
                label: "Tại chức - VLVH - Liên kết",
                href: "/tuyen-sinh/tai-chuc",
              },
              { label: "Hệ Cao đẳng", href: "/tuyen-sinh/cao-dang" },
            ],
          },
          {
            title: "Đào tạo",
            links: [
              {
                label: "Đăng ký học tín chỉ",
                href: "/dao-tao/dang-ki-hoc-tin-chi",
              },
              {
                label: "Kế hoạch chuyên môn",
                href: "/dao-tao/ke-hoach-chuyen-mon",
              },

              {
                label: "Mã ngành và VB liên quan",
                href: "/dao-tao/ma-nganh-va-vb-lien-quan",
              },
              {
                label: "Chương trình đào tạo",
                href: "/dao-tao/chuong-trinh-dao-tao",
              },
              { label: "Thời khóa biểu", href: "/dao-tao/thoi-khoa-bieu" },
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
                href: "/ql-chat-luong-thanh-tra/gioi-thieu-dbcl/chuc-nang-nhiem-vu",
              },
              {
                label: "Hệ thống ĐBCL",
                href: "/ql-chat-luong-thanh-tra/gioi-thieu-dbcl/he-thong-dbcl",
              },
              {
                label: "Liên hệ ĐBCL",
                href: "/ql-chat-luong-thanh-tra/gioi-thieu-dbcl/lien-he-dbcl",
              },
            ],
          },
          {
            title: "Khảo thí",
            links: [
              {
                label: "Quy định khảo thí",
                href: "/ql-chat-luong-thanh-tra/khao-thi/quy-dinh-khao-thi",
              },
              {
                label: "Hướng dẫn khảo thí",
                href: "/ql-chat-luong-thanh-tra/khao-thi/huong-dan-khao-thi",
              },
              {
                label: "Văn bản thi học phần",
                href: "/ql-chat-luong-thanh-tra/khao-thi/van-ban-thi-hoc-phan",
              },
            ],
          },
          {
            title: "Đảm bảo CLGD",
            links: [
              {
                label: "Chiến lược - chính sách",
                href: "/ql-chat-luong-thanh-tra/dam-bao-clgd/chien-luoc-chinh-sach",
              },
              {
                label: "Qui định - Hướng dẫn",
                href: "/ql-chat-luong-thanh-tra/dam-bao-clgd/quy-dinh-huong-dan",
              },
              {
                label: "Kế hoạch - khảo sát",
                href: "/ql-chat-luong-thanh-tra/dam-bao-clgd/ke-hoach-khao-sat",
              },
            ],
          },
          {
            title: "Công khai CLGD",
            links: [
              {
                label: "Công khai hàng năm",
                href: "/ql-chat-luong-thanh-tra/cong-khai-clgd/cong-khai-hang-nam",
              },
              {
                label: "Văn bản pháp quy",
                href: "/ql-chat-luong-thanh-tra/cong-khai-clgd/van-ban-phap-quy",
              },
              {
                label: "Văn bằng - Chứng chỉ",
                href: "/ql-chat-luong-thanh-tra/cong-khai-clgd/van-bang-chung-chi",
              },
            ],
          },
          {
            title: "Chuẩn đầu ra",
            links: [
              {
                label: "Các ngành Đại học",
                href: "/ql-chat-luong-thanh-tra/chuan-dau-ra/cac-nganh-dai-hoc",
              },
              {
                label: "Các ngành Cao đẳng",
                href: "/ql-chat-luong-thanh-tra/chuan-dau-ra/cac-nganh-cao-dang",
              },
            ],
          },
          {
            title: "Thanh tra nội bộ",
            links: [
              {
                label: "VB pháp quy",
                href: "/ql-chat-luong-thanh-tra/thanh-tra-noi-bo/vb-phap-quy",
              },
              {
                label: "Kế hoạch thanh tra",
                href: "/ql-chat-luong-thanh-tra/thanh-tra-noi-bo/ke-hoach-thanh-tra",
              },
              {
                label: "Báo cáo thanh tra",
                href: "/ql-chat-luong-thanh-tra/thanh-tra-noi-bo/bao-cao-thanh-tra",
              },
              {
                label: "Hồ sơ thanh tra",
                href: "/ql-chat-luong-thanh-tra/thanh-tra-noi-bo/ho-so-thanh-tra",
              },
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
                href: "http://tse.daihoctantrao.edu.vn/",
              },
            ],
          },
          {
            title: "Các đoàn thể",
            links: [
              { label: "Công Đoàn", href: "/category/cong-doan" },
              {
                label: "Ban Vì sự Tiến bộ Phụ nữ",
                href: "/category/ban-vi-su-tien-bo-phu-nu",
              },
              {
                label: "Đoàn thanh niên - Hội sinh viên",
                href: "/category/doan-thanh-nien-hoi-sinh-vien",
              },
            ],
          },
          {
            title: "Khoa chuyên môn",
            links: [
              { label: "Khoa Sư Phạm", href: "/khoa/supham" },
              { label: "Khoa Văn hóa - Du lịch", href: "/khoa/vanhoadulich" },
              { label: "Khoa Y - Dược", href: "/khoa/yduoc" },
              { label: "Khoa Chính trị và TLGD", href: "/khoa/chinhtritamli" },
              {
                label: "Khoa Kinh tế & Quản trị KD",
                href: "/khoa/kinhtequantri",
              },
              {
                label: "Khoa Nông - Lâm - Ngư nghiệp",
                href: "/khoa/nonglamngu",
              },
            ],
          },
          {
            title: "Phòng - Ban",
            links: [
              { label: "Văn Phòng", href: "/don-vi/phong-ban/van-phong" },
              {
                label: "Phòng QLCL & Thanh tra",
                href: "/don-vi/phong-ban/phong-qlcl-thanh-tra",
              },
              {
                label: "Phòng QLKH & Hợp tác QT",
                href: "/don-vi/phong-ban/phong-qlkh-hop-tac-qt",
              },
              {
                label: "Phòng Đào tạo",
                href: "/don-vi/phong-ban/phong-dao-tao",
              },
              {
                label: "Phòng Kế hoạch - Tài vụ",
                href: "/don-vi/phong-ban/phong-ke-hoach-tai-vu",
              },
              {
                label: "Phòng Quản lý Sinh viên",
                href: "/don-vi/phong-ban/phong-quan-li-sinh-vien",
              },
            ],
          },
          {
            title: "Bộ môn - Trung tâm",
            links: [
              {
                label: "TT THNN-TV và PTNN",
                href: "/don-vi/bo-mon-trung-tam/thnn-ptnn",
              },
              {
                label: "TT Thực nghiệm & Chuyển giao Công nghệ",
                href: "/don-vi/bo-mon-trung-tam/thuc-nghiem-chuyen-giao-cong-nghe",
              },
              {
                label: "TT Thể dục - Thể thao",
                href: "/don-vi/bo-mon-trung-tam/the-duc-the-thao",
              },
            ],
          },
        ],
      },
      //////////////////////////////
      {
        type: "dropdown",
        label: "NCKH",
        columns: 1,
        items: [
          {
            // title: "Khoa học công nghệ",
            links: [
              {
                label: "Biểu mẫu NCKH",
                href: "/nckh/bieu-mau-nckh",
              },
              {
                label: "Bài báo ISI/Scopus",
                href: "/nckh/bai_bao_isi_scopus",
              },
              {
                label: "Bài báo trong nước và quốc tế",
                href: "/nckh/bai_bao_trong_nuoc_va_quoc_te",
              },
              {
                label: "Hội nghị - Hội thảo",
                href: "/category/hoi-nghi-hoi-thao",
              },
              {
                label: "Đề tài - Dự án",
                href: "/nckh/de_tai_du_an",
              },
              {
                label: "GT/TLTK/Sách chuyên khảo",
                href: "/nckh/gt_tltk_sach_chuyen_khao",
              },
              {
                label: "Thông báo khoa học",
                href: "/nckh/thong_bao_khoa_hoc",
              },
            ],
          },
          // {
          //   title: "Hợp tác quốc tế",
          //   links: [
          //     {
          //       label: "Hoạt động hợp tác Quốc tế",
          //       href: "/category/cong-doan",
          //     },
          //     {
          //       label: "Các chương trình liên kết",
          //       href: "/category/ban-vi-su-tien-bo-phu-nu",
          //     },
          //     {
          //       label: "Khảo sát các đoàn vào",
          //       href: "/category/doan-thanh-nien-hoi-sinh-vien",
          //     },
          //     {
          //       label: "Hội thảo khoa học quốc tế",
          //       href: "/category/doan-thanh-nien-hoi-sinh-vien",
          //     },
          //   ],
          // },
        ],
      },
      //////////////////////////////
      {
        type: "dropdown",
        label: "Tin tức",
        columns: 1,
        items: [
          {
            title: "",
            links: [
              {
                label: "Tin tức - Sự kiện",
                href: "/category",
              },
              {
                label: "Thông tin tuyển dụng",
                href: "/tuyen-dung",
              },
              {
                label: "Lịch công tác chung",
                href: "/lich-tuan",
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
            title: "",
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
            title: "",
            links: [
              {
                label: "Thủ tục hành chính",
                href: "/tai-nguyen/thu-tuc-hanh-chinh",
              },
              { label: "Văn bản", href: "/tai-nguyen/van-ban" },
              { label: "Văn bản đào tạo", href: "/tai-nguyen/van-ban-dao-tao" },
              {
                label: "Phổ biến, giáo dục Pháp luật",
                href: "/tai-nguyen/pho-bien-giao-duc-phap-luat",
              },
              { label: "Tài liệu", href: "/tai-nguyen/tai-lieu" },
              {
                label: "Bài báo khoa học",
                href: "/tai-nguyen/bai-bao-khoa-hoc",
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
  supham: {
    universityName: "Khoa Sư Phạm",
    title: "Khoa Sư Phạm",
    description: "Chào mừng đến với Khoa Sư Phạm",
    logoSrc: "",
    blogId: "cm2wt8r2e0000pqq6sl0b22by",
    items: [
      {
        type: "simple",
        label: "Cơ cấu tổ chức",
        href: "/khoa/supham/co-cau-to-chuc",
      },
      {
        type: "simple",
        label: "Tuyển sinh",
        href: "/khoa/supham/tuyen-sinh",
      },
      {
        type: "simple",
        label: "NCKH",
        href: "/khoa/supham/nckh",
      },
    ],
  },
  vanhoadulich: {
    universityName: "Khoa Văn hóa & Du lịch",
    title: "Khoa Sư Phạm",
    description: "Chào mừng đến với Khoa Văn hóa & Du lịch",
    logoSrc: "",
    blogId: "cm31jk0jo0000ijti1e11ipmi",

    items: [
      {
        type: "simple",
        label: "Cơ cấu tổ chức",
        href: "/khoa/vanhoadulich/co-cau-to-chuc",
      },
      {
        type: "simple",
        label: "Tuyển sinh",
        href: "/khoa/vanhoadulich/tuyen-sinh",
      },
      {
        type: "simple",
        label: "NCKH",
        href: "/khoa/vanhoadulich/nckh",
      },
    ],
  },

  yduoc: {
    universityName: "Khoa Y Dược",
    title: "Khoa Y Dược",
    description: "Chào mừng đến với Khoa Y Dược",
    logoSrc: "",
    blogId: "cm31j1fmt0002jp0j9xrshae4",

    items: [
      {
        type: "simple",
        label: "Cơ cấu tổ chức",
        href: "/khoa/yduoc/co-cau-to-chuc",
      },
      {
        type: "simple",
        label: "Tuyển sinh",
        href: "/khoa/yduoc/tuyen-sinh",
      },
      {
        type: "simple",
        label: "NCKH",
        href: "/khoa/yduoc/nckh",
      },
    ],
  },
  chinhtritamli: {
    universityName: "Khoa Chính trị & Tâm lí giáo dục",
    title: "Khoa Chính trị & Tâm lí giáo dục",
    description: "Chào mừng Khoa Chính trị & Tâm lí giáo dục",
    logoSrc: "",
    blogId: "cm31j3m4n0000102ejl5rblzt",

    items: [
      {
        type: "simple",
        label: "Cơ cấu tổ chức",
        href: "/khoa/chinhtritamli/co-cau-to-chuc",
      },
      {
        type: "simple",
        label: "Tuyển sinh",
        href: "/khoa/chinhtritamli/tuyen-sinh",
      },
      {
        type: "simple",
        label: "NCKH",
        href: "/khoa/chinhtritamli/nckh",
      },
    ],
  },
  kinhtequantri: {
    universityName: "Khoa Kinh tế & Quản trị kinh doanh",
    title: "Khoa Kinh tế & Quản trị kinh doanh",
    description: "Chào mừng đến với Khoa Kinh tế & Quản trị kinh doanh",
    logoSrc: "",
    blogId: "cm2wt8r2e0000pqq6sl0b22by",

    items: [
      {
        type: "simple",
        label: "Cơ cấu tổ chức",
        href: "/khoa/kinhtequantri/co-cau-to-chuc",
      },
      {
        type: "simple",
        label: "Tuyển sinh",
        href: "/khoa/kinhtequantri/tuyen-sinh",
      },
      {
        type: "simple",
        label: "NCKH",
        href: "/khoa/kinhtequantri/nckh",
      },
    ],
  },
  nonglamngu: {
    universityName: "Khoa Nông Lâm Ngư nghiệp",
    title: "Khoa Nông Lâm Ngư nghiệp",
    description: "Chào mừng đến với Khoa Nông Lâm Ngư nghiệp",
    logoSrc: "",
    blogId: "cm2wt8r2e0000pqq6sl0b22by",
    items: [
      {
        type: "simple",
        label: "Cơ cấu tổ chức",
        href: "/khoa/nonglamngu/co-cau-to-chuc",
      },
      {
        type: "simple",
        label: "Tuyển sinh",
        href: "/khoa/nonglamngu/tuyen-sinh",
      },
      {
        type: "simple",
        label: "NCKH",
        href: "/khoa/nonglamngu/nckh",
      },
    ],
  },
};

export default menuData;
