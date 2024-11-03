'use client'

import Header from '@/components/Header'
import Footer from "@/components/Footer"
import AutoBreadcrumbs from '@/components/AutoBreadcrumb'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header department='Home' />
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center space-x-2 text-sm mb-8">
          <AutoBreadcrumbs />        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 ">
          <span> TRIẾT LÝ GIÁO DỤC</span>
        </h1>
        {/* //////////////////////////////// */}
        <div className="max-w-6xl mx-auto p-4 space-y-6">

          <div className="text-2xl text-justify">
            <h2 className="text-2xl font-semibold mb-2">Phát biểu triết lý giáo dục</h2>
            <blockquote className="font-bold text-center text-primary">
              &ldquo;Chất lượng - phát triển bền vững - hội nhập&rdquo;
            </blockquote>
          </div>

          <div className="text-2xl text-justify">
            <h2 className="text-2xl font-semibold mb-2 mt-6">Ý nghĩa chung của triết lý giáo dục</h2>
            <p>Theo triết lý giáo dục “Chất lượng - phát triển bền vững - hội nhập”, TTrU không chỉ cung cấp cho sinh viên chương trình đào tạo tiến bộ, chất lượng cao và phù hợp với xu hướng quốc tế mà còn tạo điều kiện thuận lợi cho sinh viên phát triển tiềm năng cá nhân. TTrU chú trọng việc bồi dưỡng cho sinh viên kiến thức, kỹ năng và thái độ cần thiết để đáp ứng nhu cầu ngày càng cao của xã hội, đồng thời đề cao tinh thần tìm tòi, nghiên cứu và học tập ở sinh viên để học tập suốt đời. Điều này sẽ giúp sinh viên cải thiện bản thân, phát triển tiềm năng sáng tạo và kỹ năng hội nhập để thích ứng với sự phát triển của công nghệ trong thời đại mới.</p>
          </div>

          <div className="text-2xl text-justify">
            <h2 className="text-2xl font-semibold mb-2 mt-6">Ý nghĩa cụ thể của triết lý giáo dục</h2>

            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Chất lượng:</strong> là khái niệm cho thấy khả năng thoả mãn nhu cầu của các bên liên quan trong đào tạo và nghiên cứu của Trường. Đánh giá chất lượng của một cơ sở giáo dục phải đứng trên quan điểm của sinh viên và nhà tuyển dụng. TTrU sử dụng chất lượng như là một công cụ có thể đo lường chỉ số hài lòng của các bên liên quan của trường.
              </li>
              <li>
                <strong>Phát triển bền vững:</strong> là phát triển để có thể đáp ứng được nhu cầu của các bên liên quan không những ở thời điểm hiện tại mà còn trong tương lai, gắn với nghề nghiệp và đáp ứng nhu cầu xã hội. Phát triển bền vững liên quan đến tầm nhìn của các đơn vị đào tạo và năng lực, phẩm chất của người học trong quá trình học tập, làm việc trước và sau khi tốt nghiệp.
              </li>
              <li>
                <strong>Hội nhập:</strong> là khả năng học tập và làm việc theo xu thế của lực lượng lao động hiện nay và được đánh giá theo tiêu chuẩn của khu vực và quốc tế. Hội nhập cũng được thể hiện qua việc các chương trình đào tạo của trường và sinh viên tốt nghiệp được các trường đại học có cùng khối ngành đào tạo trong khu vực và trên thế giới chấp nhận.
              </li>
            </ul>
          </div>
        </div>
        {/* //////////////////////////// */}
      </div>

      <Footer />
    </div>
  )
}