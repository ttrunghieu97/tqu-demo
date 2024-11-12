import SuKien from "./sukien";
import TinTuc from "./tintuc";
import HoatDong from './hoatdong';
import HoiNghi from "./hoinghi-hoithao";
import CacCuocThi from "./caccuocthi";
import NhaTruong from "./nhatruong";
import DangBo from "./dangbo";
import Doantruong from "./doantruong";
import CongDoan from "./congdoan";





export default function GetPost() {
  return (
    <>
      <TinTuc />
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="bg-white rounded-lg shadow-md overflow-hidden">
                <h2 className="text-2xl font-bold bg-red-800 text-white p-4 text-center">
                  ► Sự kiện ◄
                </h2>
                <div className="p-4">
                  <SuKien />
                </div>
              </section>
              {/* ?????????????????????????? */}
              <section className="bg-white rounded-lg shadow-md overflow-hidden">
                <h2 className="text-2xl font-bold bg-red-800 text-white p-4 text-center">
                  ► Hoạt động ◄
                </h2>
                <div className="p-4">
                  <HoatDong />
                </div>
              </section>
              {/* ?????????????????????????? */}
              <section className="bg-white rounded-lg shadow-md overflow-hidden">
                <h2 className="text-2xl font-bold bg-red-800 text-white p-4 text-center">
                  ► Hội nghị - Hội thảo ◄
                </h2>
                <div className="p-4">
                  <HoiNghi />
                </div>
              </section>
              {/* ?????????????????????????? */}
              <section className="bg-white rounded-lg shadow-md overflow-hidden">
                <h2 className="text-2xl font-bold bg-red-800 text-white p-4 text-center">
                  ► Các cuộc thi ◄
                </h2>
                <div className="p-4">
                  <CacCuocThi />
                </div>
              </section>
              {/* ?????????????????????????? */}
              <section className="bg-white rounded-lg shadow-md overflow-hidden">
                <h2 className="text-2xl font-bold bg-red-800 text-white p-4 text-center">
                  ► Nhà Trường ◄
                </h2>
                <div className="p-4">
                  <NhaTruong />
                </div>
              </section>
              {/* ?????????????????????????? */}
              <section className="bg-white rounded-lg shadow-md overflow-hidden">
                <h2 className="text-2xl font-bold bg-red-800 text-white p-4 text-center">
                  ► Đảng Bộ ◄
                </h2>
                <div className="p-4">
                  <DangBo />
                </div>
              </section>
              {/* ?????????????????????????? */}
              <section className="bg-white rounded-lg shadow-md overflow-hidden">
                <h2 className="text-2xl font-bold bg-red-800 text-white p-4 text-center">
                  ► Đoàn Trường ◄
                </h2>
                <div className="p-4">
                  <Doantruong />
                </div>
              </section>
              {/* ?????????????????????????? */}
              <section className="bg-white rounded-lg shadow-md overflow-hidden">
                <h2 className="text-2xl font-bold bg-red-800 text-white p-4 text-center">
                  ► Công Đoàn ◄
                </h2>
                <div className="p-4">
                  <CongDoan />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}