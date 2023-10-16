export default function Lienhe(props) {
  return (
    <section class="flex flex-col items-center py-6 px-4 text-center sm:p-10">
      <p class="home-title text-green-900 uppercase font-bold" style={{fontSize:'27px'}}>KẾT NỐI Travel Agency</p>
      <span class="home-title-content max-w-2xl">
        Kết nối đa dạng hệ sinh thái Travel Agency qua App TA: mua vé Xe Travel Agency, Xe Buýt, Xe Hợp Đồng, Giao Hàng,...
      </span>
      <div class="mt-10 mb-4">
        <img
          class="hidden sm:block"
          src="https://storage.googleapis.com/futa-busline-cms-dev/1_ketnoi_3c401512ac/1_ketnoi_3c401512ac.svg"
          alt="futa connect"
        />
        <img
          class="sm:hidden"
          src="https://storage.googleapis.com/futa-busline-web-cms-prod/Mobile_8c827bf843/Mobile_8c827bf843.png"
          alt="futa connect"
        />
      </div>
    </section>
  );
}
