import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"
import Image from "next/image"
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Giới thiệu chung - Trường Đại Học Tân Trào',
  description: 'Demo For Learning',
  icons: {
    icon: "/img/logo.png",
  },
};
const leaders = [
  {
    name: "NGUYỄN MINH ANH TUẤN",
    position: "HIỆU TRƯỞNG",
    rank: "Giảng viên chính",
    politicalTheory: "Cao cấp",
    education: "Tiến sĩ",
    email: "",
    phone: "",
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2024/nmat.jpg"
  },
  {
    name: "PHẠM DUY HƯNG",
    position: "Phó Hiệu trưởng",
    rank: "Giảng viên chính",
    politicalTheory: "Cao cấp",
    education: "Tiến sĩ",
    email: "",
    phone: "",
    imageUrl: "https://daihoctantrao.edu.vn/media/news/2024/Anh-the-6_2023.jpg"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 ">
          <span> TRƯỜNG ĐẠI HỌC TÂN TRÀO - TAN TRAO UNIVERSITY (TTrU) </span>
        </h1>
        <div className='container mx-auto flex justify-center items-center'>
          <Image src="https://daihoctantrao.edu.vn/media/introduce/2013/small_440.jpg" alt="dhtt" width={1000} height={1000} />
        </div>
        {/* //////////////////////////////// */}
        <div>
          <div className="max-w-6xl mx-auto p-4 space-y-6">
            <h1 className="text-2xl font-bold text-center mb-6 mt-6 line">TRƯỜNG ĐẠI HỌC TÂN TRÀO - TAN TRAO UNIVERSITY (TTrU)</h1>
            <div className='text-2xl text-justify'>
              <div>
                <h2 className="text-2xl font-semibold mb-2">Sứ mạng:</h2>
                <p><strong>TTrU</strong> là cơ sở đào tạo, nghiên cứu khoa học, hợp tác quốc tế và cung cấp các sản phẩm, dịch vụ nâng cao chất lượng cuộc sống và xây dựng đất nước.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mt-2 mb-2">Tầm nhìn:</h2>
                <p><strong>TTrU</strong> sẽ trở thành một trung tâm phát triển bền vững, làm biến đổi cuộc sống và phục vụ cộng đồng.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-2 mt-2">Chính sách chất lượng:</h2>
                <p><strong>TTrU</strong> cam kết liên tục cải tiến để có khả năng cung cấp các dịch vụ có chất lượng, đảm bảo mức độ hài lòng cao nhất của người học và đối tác, qua một hệ thống quản lý năng động, xuất sắc, chuyên nghiệp và đổi mới.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-2 mt2">Giá trị cốt lõi:</h2>
                <blockquote>&ldquo;Chất lượng đào tạo là yếu tố cốt lõi để tồn tại và phát triển&rdquo;</blockquote>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-2 mt-2">Mục tiêu giáo dục:</h2>
                <p><strong>Đào tạo</strong> người học có kiến thức và kỹ năng chuyên môn của chuyên ngành được đào tạo một cách vững chắc và thực tiễn, có phẩm chất chính trị, có đạo đức tốt, đáp ứng các chuẩn mực cần thiết của người lao động trong nền kinh tế thị trường theo định hướng XHCN và theo xu thế hội nhập nền kinh tế thế giới. <strong>Người học</strong> được trang bị các kiến thức cơ sở ngành đào tạo để có khả năng nghiên cứu, cập nhật công nghệ mới, khả năng tự học suốt đời trong môi trường công tác sau khi ra trường; có kỹ năng thực hành chuyên sâu và chuyên nghiệp của chuyên ngành được đào tạo, đủ khả năng hành nghề, khả năng tạo việc làm và phát triển sự nghiệp; được trang bị các kỹ năng và phẩm chất của người lao động hiện đại, chú trọng các kỹ năng giao tiếp, kỹ năng hợp tác làm việc nhóm, sự tự tin và chủ động trong vị trí công tác được xã hội phân công.</p>
              </div>
            </div>
          </div>
        </div>
        {/* //////////////////////////////// */}
        <div>
          <div className="max-w-6xl mx-auto p-4 space-y-6">
            <h1 className="text-2xl font-bold text-center mb-6 mt-6 line">GIỚI THIỆU CHUNG VỀ NHÀ TRƯỜNG
            </h1>

            <div className='text-2xl text-justify'>
              <div>
                <h2 className="text-2xl font-semibold mb-2">1. Lịch sử truyền thống:</h2>
                <p><strong>Trường Đại học Tân Trào</strong> tiền thân là trường Sơ cấp sư phạm được thành lập ngày 13 tháng 10 năm 1959 theo Quyết định số 264/TCC3 của Chủ tịch Ủy ban Hành chính Khu tự trị Việt Bắc. Đến tháng 6/1969 trường được nâng cấp lên thành trường Trung cấp Sư phạm Tuyên Quang. Qua quá trình phát triển, nhà trường đã nhiều lần thay đổi địa điểm, thay đổi tên gọi và hợp nhất nhiều trường Sư phạm khác nhau như Trường Sư phạm cấp I; Trường Sư phạm cấp II; Trường Sơ cấp nuôi dạy trẻ; Trường Sơ cấp Sư phạm Mầm non; Trường Cán bộ Quản lý giáo dụcngày 11 tháng 02. Năm 1999 được nâng cấp thành Cao đẳng sư phạm Tuyên Quang theo Quyết định số 18/1999/QĐ-TTg của Thủ tướng Chính phủ. Ngày 30 tháng 6 năm 2011 Trường Cao đẳng Sư phạm Tuyên Quang được đổi tên thành trường Cao đẳng Tuyên Quang theo Quyết định số 2651/QĐ-BGDĐT của Bộ trưởng Bộ GDĐT và ngày 14 tháng 8 năm 2013 Thủ tướng Chính phủ nước Cộng hòa xã hội chủ nghĩa Việt Nam đã ký Quyết định số 1404/QĐ-TTg, nâng cấp Trường Cao đẳng Tuyên Quang thành Trường Đại học Tân Trào.
                </p>
                <p>Từ đây Trường Đại học Tân Trào trở thành trường Đại học đầu tiên trên quê hương cách mạng, thủ đô khu giải phóng, thủ đô kháng chiến.</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2 mt-2">2. Cơ cấu tổ chức:</h2>
                <div className='container mx-auto flex justify-center items-center'>
                  <Image src="https://daihoctantrao.edu.vn/media/news/z5806004947617_3d7f9a5c2ef24779604b34bd80fc442c-(1).jpg" alt="Cơ cấu tổ chức" width={1000} height={1000} />
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-semibold mb-2 mt-2">2.1 Ban giám hiệu:</h2>

            <div className="grid gap-8 max-w-5xl mx-auto">
              {leaders.map((leader, index) => (
                <Card
                  key={index}
                  className="transition-all duration-300 ease-in-out 
                hover:shadow-lg hover:bg-accent
                bg-white p-4 rounded-md"
                >
                  <CardContent className="p-10">
                    <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
                      <div className="w-60 h-60 relative shrink-0">
                        <Image
                          src={leader.imageUrl}
                          alt={leader.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-contain object-top rounded-lg"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-3">{leader.name}</h2>
                        <p className="text-xl text-muted-foreground mb-6">{leader.position}</p>
                        <div className="space-y-4">
                          <div className="flex items-center justify-center md:justify-start gap-3">
                            <span className="font-semibold">Ngạch viên chức:</span>
                            <span className="text-lg">{leader.rank}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-3">
                            <span className="font-semibold">Lý luận chính trị:</span>
                            <span className="text-lg">{leader.politicalTheory}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-3">
                            <span className="font-semibold">Trình độ chuyên môn:</span>
                            <span className="text-lg">{leader.education}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-3">
                            <Phone className="h-5 w-5 text-muted-foreground" />
                            <span className="text-lg">{leader.phone}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-3">
                            <Mail className="h-5 w-5 text-muted-foreground" />
                            <a
                              href={`mailto:${leader.email}`}
                              className="text-lg text-primary hover:underline"
                            >
                              {leader.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <h2 className="text-2xl font-semibold mb-2 mt-2">2.2 Khoa và Bộ môn:</h2>
            </div>
            <li>Khoa Sư phạm</li>
            <li>Khoa Nông - Lâm - Ngư nghiệp</li>
            <li>Khoa Kinh tế - Quản trị Kinh doanh</li>
            <li>Khoa Văn hóa - Du lịch</li>
            <li>Khoa Chính trị và Tâm lý Giáo dục</li>
            <li>Khoa Y Dược</li>
            <h2 className="text-2xl font-semibold mb-2 mt-2">2.3 Phòng, Ban chức năng:</h2>
            <li>Văn phòng</li>
            <li>Phòng Đào tạo</li>
            <li>Phòng Quản lý Sinh viên</li>
            <li>Phòng Kế hoạch - Tài vụ</li>
            <li>Phòng Quản lý chất lượng và Thanh tra</li>
            <li>Phòng Quản lý khoa học và Hợp tác quốc tế</li>
            <h2 className="text-2xl font-semibold mb-2 mt-2">2.4 Trung tâm:</h2>
            <li>Trung tâm Tin học - Ngoại ngữ - Thư viện và Phát triển Nghề nghiệp</li>
            <li>Trung tâm Thực nghiệm và Chuyển giao công nghệ</li>
            <li>Trung tâm Thể dục - Thể thao</li>
            <h2 className="text-2xl font-semibold mb-2 mt-2">2.5 Đội ngũ cán bộ giảng viên:</h2>
            <li> Tổng số cán bộ giảng viên: 245CBGV</li>
          </div>
        </div>
      </div>

    </div>
  )
}