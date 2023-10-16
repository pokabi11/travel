import React from 'react';
import {Col,Row} from 'antd';

export default function Lichtrinh(props) {
  return (
    <div class="container mx-auto">
      <p class="font-bold uppercase mt-12" style={{ fontSize: "27px" }}>
        Lịch trình
      </p>
      <div class="mt-6 flex w-full flex-col gap-4 overflow-auto">
        <div class="row">
          <div class="ant-col ant-col-6">Tuyến xe</div>
          <div class="ant-col ant-col-2">Loại xe</div>
          <div class="ant-col ant-col-3">Quãng đường</div>
          <div class="ant-col ant-col-4">Thời gian hành trình </div>
          <div class="ant-col ant-col-2">Giá vé</div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">An Nhơn</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">639km</div>
            <div class="ant-col ant-col-4">11 giờ 30 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">An Nhơn</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">660km</div>
            <div class="ant-col ant-col-4">13 giờ 46 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Bạc Liêu</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP.Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">271km</div>
            <div class="ant-col ant-col-4">6 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Bảo Lộc</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Đà Nẵng</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">756km</div>
            <div class="ant-col ant-col-4">16 giờ 38 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Bảo Lộc</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Huế</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">827km</div>
            <div class="ant-col ant-col-4">19 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Bảo Lộc</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Quảng Ngãi</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-3">---</div>
            <div class="ant-col ant-col-4"></div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Bến Tre</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP.Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col ant-col-3">75km</div>
            <div class="ant-col ant-col-4">2 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Bình Dương</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Bình Dương</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Limousine</div>
            <div class="ant-col ant-col-3">260km</div>
            <div class="ant-col ant-col-4">5 giờ 26 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Bình Dương</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Cà Mau</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Limousine</div>
            <div class="ant-col ant-col-3">317km</div>
            <div class="ant-col ant-col-4">6 giờ 21 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Bình Dương</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Cà Mau</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Limousine</div>
            <div class="ant-col ant-col-3">380km</div>
            <div class="ant-col ant-col-4">7 giờ 37 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Bình Dương</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Hà Tiên</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Limousine</div>
            <div class="ant-col ant-col-3">352km</div>
            <div class="ant-col ant-col-4">8 giờ 30 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Bình Dương</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Rạch Giá</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Limousine</div>
            <div class="ant-col ant-col-3">272km</div>
            <div class="ant-col ant-col-4">6 giờ 35 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Bình Dương</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Sóc Trăng</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Limousine</div>
            <div class="ant-col ant-col-3">255km</div>
            <div class="ant-col ant-col-4">5 giờ 26 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Bình Dương</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Vĩnh Thuận (Kiên Giang)</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">311km</div>
            <div class="ant-col ant-col-4">8 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Buôn Ma Thuột</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Nha Trang</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-3">---</div>
            <div class="ant-col ant-col-4"></div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Buôn Ma Thuột</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP.Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">435km</div>
            <div class="ant-col ant-col-4">9 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">BX An Sương</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Đà Nẵng</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">966km</div>
            <div class="ant-col ant-col-4">17 giờ 52 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">BX An Sương</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Quảng Ngãi</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">820km</div>
            <div class="ant-col ant-col-4">16 giờ 37 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Cà Mau</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Bình Dương</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Limousine</div>
            <div class="ant-col ant-col-3">380km</div>
            <div class="ant-col ant-col-4">7 giờ 37 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Cà Mau</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Bình Dương</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Limousine</div>
            <div class="ant-col ant-col-3">317km</div>
            <div class="ant-col ant-col-4">6 giờ 21 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Cà Mau</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Cần Thơ</span>
              </div>
            </div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col ant-col-3">143km</div>
            <div class="ant-col ant-col-4">4 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Cà Mau</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Cần Thơ</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">135km</div>
            <div class="ant-col ant-col-4">3 giờ 33 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Cà Mau</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Châu Đốc</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">236km</div>
            <div class="ant-col ant-col-4">6 giờ 30 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Cà Mau</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">282km</div>
            <div class="ant-col ant-col-4">6 giờ 30 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Cà Mau</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP.Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">302km</div>
            <div class="ant-col ant-col-4">8 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Cam Ranh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Đà Nẵng</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">568km</div>
            <div class="ant-col ant-col-4">10 giờ 4 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Cam Ranh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP.Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">350km</div>
            <div class="ant-col ant-col-4">9 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Cần Thơ</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Cà Mau</span>
              </div>
            </div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col ant-col-3">144km</div>
            <div class="ant-col ant-col-4">4 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Cần Thơ</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Cà Mau</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">135km</div>
            <div class="ant-col ant-col-4">3 giờ 33 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Cần Thơ</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Châu Đốc</span>
              </div>
            </div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col ant-col-3">115km</div>
            <div class="ant-col ant-col-4">4 giờ 30 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Cần Thơ</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Đà Lạt</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">459km</div>
            <div class="ant-col ant-col-4">11 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Cần Thơ</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Năm Căn</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">190km</div>
            <div class="ant-col ant-col-4">4 giờ 4 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Cần Thơ</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Rạch Giá</span>
              </div>
            </div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col ant-col-3">112km</div>
            <div class="ant-col ant-col-4">4 giờ 30 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Cần Thơ</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Limousine</div>
            <div class="ant-col ant-col-3">166km</div>
            <div class="ant-col ant-col-4">4 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Cần Thơ</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP.Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col ant-col-3">167km</div>
            <div class="ant-col ant-col-4">4 giờ 30 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Cần Thơ</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Vũng Tàu</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Limousine</div>
            <div class="ant-col ant-col-3">451km</div>
            <div class="ant-col ant-col-4">9 giờ 9 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Cao Lãnh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP.Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">144km</div>
            <div class="ant-col ant-col-4">3 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Châu Đốc</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Cà Mau</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">236km</div>
            <div class="ant-col ant-col-4">6 giờ 30 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Châu Đốc</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Cần Thơ</span>
              </div>
            </div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col ant-col-3">115km</div>
            <div class="ant-col ant-col-4">4 giờ 30 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Châu Đốc</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP.Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">240km</div>
            <div class="ant-col ant-col-4">6 giờ 15 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Đà Lạt</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Cần Thơ</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">457km</div>
            <div class="ant-col ant-col-4">11 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Đà Lạt</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Đà Nẵng</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">757km</div>
            <div class="ant-col ant-col-4">17 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Đà Lạt</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Huế</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">843km</div>
            <div class="ant-col ant-col-4">17 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Đà Lạt</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Nha Trang</span>
              </div>
            </div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col ant-col-3">137km</div>
            <div class="ant-col ant-col-4">4 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Đà Lạt</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Phan Thiết</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Limousine</div>
            <div class="ant-col ant-col-3">163km</div>
            <div class="ant-col ant-col-4">4 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Đà Lạt</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Quảng Ngãi</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">511km</div>
            <div class="ant-col ant-col-4">10 giờ 49 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Đà Lạt</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Limousine</div>
            <div class="ant-col ant-col-3">310km</div>
            <div class="ant-col ant-col-4">8 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Đà Lạt</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Limousine</div>
            <div class="ant-col ant-col-3">305km</div>
            <div class="ant-col ant-col-4">8 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Đà Lạt</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP.Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">293km</div>
            <div class="ant-col ant-col-4">8 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Đà Lạt</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP.Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">294km</div>
            <div class="ant-col ant-col-4">8 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Đà Lạt</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP.Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">320km</div>
            <div class="ant-col ant-col-4">8 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Đà Lạt</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Vũng Tàu</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Limousine</div>
            <div class="ant-col ant-col-3">318km</div>
            <div class="ant-col ant-col-4">8 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Đà Nẵng</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Bảo Lộc</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">756km</div>
            <div class="ant-col ant-col-4">16 giờ 38 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Đà Nẵng</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>BX An Sương</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">966km</div>
            <div class="ant-col ant-col-4">20 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Đà Nẵng</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Cam Ranh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">568km</div>
            <div class="ant-col ant-col-4">10 giờ 4 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Đà Nẵng</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Đà Lạt</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">666km</div>
            <div class="ant-col ant-col-4">17 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Đà Nẵng</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Đắk Nông</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">636km</div>
            <div class="ant-col ant-col-4">12 giờ 12 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Đà Nẵng</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Hà Nội</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">736km</div>
            <div class="ant-col ant-col-4">14 giờ 38 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Đà Nẵng</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Hà Nội</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">766km</div>
            <div class="ant-col ant-col-4">18 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Đà Nẵng</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Nha Trang</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">528km</div>
            <div class="ant-col ant-col-4">9 giờ 25 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Đà Nẵng</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Nha Trang</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">543km</div>
            <div class="ant-col ant-col-4">12 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Đà Nẵng</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Qui Nhơn</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-3">---</div>
            <div class="ant-col ant-col-4"></div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Đà Nẵng</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">957km</div>
            <div class="ant-col ant-col-4">20 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Đà Nẵng</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP.Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">850km</div>
            <div class="ant-col ant-col-4">20 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Đại Lộc</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">942km</div>
            <div class="ant-col ant-col-4">17 giờ 29 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Đại Ngãi</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP.Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">230km</div>
            <div class="ant-col ant-col-4">6 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Đắk Nông</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Đà Nẵng</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">636km</div>
            <div class="ant-col ant-col-4">12 giờ 12 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Đơn Dương</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Limousine</div>
            <div class="ant-col ant-col-3">290km</div>
            <div class="ant-col ant-col-4">8 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Hà Nội</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Đà Nẵng</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">763km</div>
            <div class="ant-col ant-col-4">14 giờ 38 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Hà Nội</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Đà Nẵng</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">764km</div>
            <div class="ant-col ant-col-4">18 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Hà Nội</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Huế</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">654km</div>
            <div class="ant-col ant-col-4">12 giờ 50 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Hà Nội</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Nam Định</span>
              </div>
            </div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col ant-col-3">79km</div>
            <div class="ant-col ant-col-4">2 giờ 30 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Hà Tiên</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Bình Dương</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Limousine</div>
            <div class="ant-col ant-col-3">352km</div>
            <div class="ant-col ant-col-4">8 giờ 30 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Hà Tiên</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Rạch Giá</span>
              </div>
            </div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col ant-col-3">89km</div>
            <div class="ant-col ant-col-4">3 giờ 30 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Hà Tiên</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP.Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">314km</div>
            <div class="ant-col ant-col-4">8 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Hộ Phòng</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">271km</div>
            <div class="ant-col ant-col-4">5 giờ 21 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Hồng Ngự</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP.Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">178km</div>
            <div class="ant-col ant-col-4">5 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Huế</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Bảo Lộc</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">827km</div>
            <div class="ant-col ant-col-4">19 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Huế</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Đà Lạt</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">745km</div>
            <div class="ant-col ant-col-4">16 giờ 35 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Huế</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Hà Nội</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">654km</div>
            <div class="ant-col ant-col-4">12 giờ 50 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Huế</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">1042km</div>
            <div class="ant-col ant-col-4">18 giờ 25 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Huế</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">1043km</div>
            <div class="ant-col ant-col-4">19 giờ 15 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Huế</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP.Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">943km</div>
            <div class="ant-col ant-col-4">25 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Long Xuyên</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP.Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col ant-col-3">186km</div>
            <div class="ant-col ant-col-4">5 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Mũi Né</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">205km</div>
            <div class="ant-col ant-col-4">5 giờ 30 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Mũi Né</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP.Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">210km</div>
            <div class="ant-col ant-col-4">6 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Năm Căn</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Cần Thơ</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">190km</div>
            <div class="ant-col ant-col-4">4 giờ 4 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Năm Căn</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP.Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">357km</div>
            <div class="ant-col ant-col-4">7 giờ 18 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Nam Định</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Hà Nội</span>
              </div>
            </div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col ant-col-3">78km</div>
            <div class="ant-col ant-col-4">2 giờ 30 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Ngã 5</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">224km</div>
            <div class="ant-col ant-col-4">5 giờ 30 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Nha Trang</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Buôn Ma Thuột</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-3">---</div>
            <div class="ant-col ant-col-4"></div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Nha Trang</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Đà Lạt</span>
              </div>
            </div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col ant-col-3">138km</div>
            <div class="ant-col ant-col-4">4 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Nha Trang</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Đà Nẵng</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">528km</div>
            <div class="ant-col ant-col-4">9 giờ 25 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Nha Trang</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Đà Nẵng</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">545km</div>
            <div class="ant-col ant-col-4">12 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Nha Trang</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Limousine</div>
            <div class="ant-col ant-col-3">436km</div>
            <div class="ant-col ant-col-4">9 giờ 40 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Nha Trang</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP.Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">427km</div>
            <div class="ant-col ant-col-4">11 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Nha Trang</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP.Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">429km</div>
            <div class="ant-col ant-col-4">12 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Ninh Hoà</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Limousine</div>
            <div class="ant-col ant-col-3">469km</div>
            <div class="ant-col ant-col-4">9 giờ 18 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Ninh Hoà</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Limousine</div>
            <div class="ant-col ant-col-3">465km</div>
            <div class="ant-col ant-col-4">9 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Ninh Hòa</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP.Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">464km</div>
            <div class="ant-col ant-col-4">12 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Ninh Thuận</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">341km</div>
            <div class="ant-col ant-col-4">7 giờ 54 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Phan Rang</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">326km</div>
            <div class="ant-col ant-col-4">7 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Phan Thiết</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Đà Lạt</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Limousine</div>
            <div class="ant-col ant-col-3">163km</div>
            <div class="ant-col ant-col-4">4 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Phan Thiết</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">192km</div>
            <div class="ant-col ant-col-4">4 giờ 15 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Phan Thiết</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP.Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">205km</div>
            <div class="ant-col ant-col-4">6 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Quãng Ngãi</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP.Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">753km</div>
            <div class="ant-col ant-col-4">18 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Quảng Ngãi</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Bảo Lộc</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-3">---</div>
            <div class="ant-col ant-col-4"></div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Quảng Ngãi</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>BX An Sương</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">820km</div>
            <div class="ant-col ant-col-4">16 giờ 37 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Quảng Ngãi</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Đà Lạt</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">511km</div>
            <div class="ant-col ant-col-4">10 giờ 49 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Quảng Ngãi</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">812km</div>
            <div class="ant-col ant-col-4">15 giờ 57 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Qui Nhơn</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Đà Nẵng</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">---</div>
            <div class="ant-col ant-col-4"></div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Qui Nhơn</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">643km</div>
            <div class="ant-col ant-col-4">12 giờ 36 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Qui Nhơn</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP.Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">612km</div>
            <div class="ant-col ant-col-4">14 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Rạch giá</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP.Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">271km</div>
            <div class="ant-col ant-col-4">6 giờ 15 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Rạch Giá</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Bình Dương</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Limousine</div>
            <div class="ant-col ant-col-3">272km</div>
            <div class="ant-col ant-col-4">6 giờ 35 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Rạch Giá</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Cần Thơ</span>
              </div>
            </div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col ant-col-3">112km</div>
            <div class="ant-col ant-col-4">4 giờ 30 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Rạch Giá</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Hà Tiên</span>
              </div>
            </div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col ant-col-3">89km</div>
            <div class="ant-col ant-col-4">3 giờ 30 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Sa Đéc</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP.Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col ant-col-3">142km</div>
            <div class="ant-col ant-col-4">4 giờ 30 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Sóc Trăng</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP.Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">222km</div>
            <div class="ant-col ant-col-4">6 giờ 30 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Tây Ninh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">121km</div>
            <div class="ant-col ant-col-4">3 giờ 50 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Tây Ninh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">112km</div>
            <div class="ant-col ant-col-4">3 giờ 50 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Tây Ninh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-3">103km</div>
            <div class="ant-col ant-col-4">3 giờ 34 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Tây Ninh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Limousine</div>
            <div class="ant-col ant-col-3">84km</div>
            <div class="ant-col ant-col-4">3 giờ 30 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Tây Ninh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-3">103km</div>
            <div class="ant-col ant-col-4">3 giờ 34 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Thốt Nốt</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP.Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-3">208km</div>
            <div class="ant-col ant-col-4">5 giờ 30 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Tịnh Biên</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">252km</div>
            <div class="ant-col ant-col-4">5 giờ 13 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP. Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>An Nhơn</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">639km</div>
            <div class="ant-col ant-col-4">11 giờ 30 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP. Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>An Nhơn</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">660km</div>
            <div class="ant-col ant-col-4">13 giờ 46 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP. Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Cà Mau</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">282km</div>
            <div class="ant-col ant-col-4">6 giờ 30 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP. Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Cần Thơ</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Limousine</div>
            <div class="ant-col ant-col-3">166km</div>
            <div class="ant-col ant-col-4">3 giờ 12 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP. Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Đà Lạt</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Limousine</div>
            <div class="ant-col ant-col-3">305km</div>
            <div class="ant-col ant-col-4">8 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP. Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Đà Lạt</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Limousine</div>
            <div class="ant-col ant-col-3">310km</div>
            <div class="ant-col ant-col-4">8 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP. Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Đà Nẵng</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">957km</div>
            <div class="ant-col ant-col-4">17 giờ 48 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP. Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Đại Lộc</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">942km</div>
            <div class="ant-col ant-col-4">17 giờ 29 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP. Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Đơn Dương</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Limousine</div>
            <div class="ant-col ant-col-3">290km</div>
            <div class="ant-col ant-col-4">8 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP. Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Huế</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">1042km</div>
            <div class="ant-col ant-col-4">22 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP. Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Huế</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">1043km</div>
            <div class="ant-col ant-col-4">22 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP. Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Mũi Né</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">205km</div>
            <div class="ant-col ant-col-4">5 giờ 30 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP. Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Ngã Năm</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">224km</div>
            <div class="ant-col ant-col-4">5 giờ 30 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP. Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Nha Trang</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Limousine</div>
            <div class="ant-col ant-col-3">436km</div>
            <div class="ant-col ant-col-4">9 giờ 40 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP. Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Ninh Hoà</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Limousine</div>
            <div class="ant-col ant-col-3">469km</div>
            <div class="ant-col ant-col-4">9 giờ 18 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP. Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Ninh Hoà</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Limousine</div>
            <div class="ant-col ant-col-3">465km</div>
            <div class="ant-col ant-col-4">9 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP. Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Ninh Thuận</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">341km</div>
            <div class="ant-col ant-col-4">7 giờ 54 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP. Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Phan Rang</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">326km</div>
            <div class="ant-col ant-col-4">7 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP. Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Phan Thiết</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">192km</div>
            <div class="ant-col ant-col-4">4 giờ 15 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP. Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Quảng Ngãi</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">812km</div>
            <div class="ant-col ant-col-4">15 giờ 57 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP. Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Qui Nhơn</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">643km</div>
            <div class="ant-col ant-col-4">12 giờ 36 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP. Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Tây Ninh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Limousine</div>
            <div class="ant-col ant-col-3">84km</div>
            <div class="ant-col ant-col-4">3 giờ 30 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP. Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Tây Ninh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-3">122km</div>
            <div class="ant-col ant-col-4">3 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP. Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Tây Ninh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">121km</div>
            <div class="ant-col ant-col-4">3 giờ 50 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP. Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Tây Ninh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">11km</div>
            <div class="ant-col ant-col-4">3 giờ 50 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP. Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Tây Ninh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-3">122km</div>
            <div class="ant-col ant-col-4">3 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP. Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Trà Ôn</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">161km</div>
            <div class="ant-col ant-col-4">3 giờ 16 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP. Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Tuy Hoà</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">506km</div>
            <div class="ant-col ant-col-4">12 giờ 41 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP. Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Vĩnh Châu</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">247km</div>
            <div class="ant-col ant-col-4">5 giờ 51 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP. Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Vĩnh Thuận</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">283km</div>
            <div class="ant-col ant-col-4">5 giờ 23 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP. Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Vũng Tàu</span>
              </div>
            </div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col ant-col-3">105km</div>
            <div class="ant-col ant-col-4">3 giờ 44 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Bạc Liêu</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">272km</div>
            <div class="ant-col ant-col-4">6 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Bến Tre</span>
              </div>
            </div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col ant-col-3">75km</div>
            <div class="ant-col ant-col-4">2 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Buôn Ma Thuột</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">435km</div>
            <div class="ant-col ant-col-4">9 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Cà Mau</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">303km</div>
            <div class="ant-col ant-col-4">8 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Cam Ranh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">350km</div>
            <div class="ant-col ant-col-4">9 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Cần Thơ</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">167km</div>
            <div class="ant-col ant-col-4">4 giờ 30 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Cao Lãnh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">145km</div>
            <div class="ant-col ant-col-4">3 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Châu Đốc</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">240km</div>
            <div class="ant-col ant-col-4">6 giờ 15 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Đà Lạt</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">310km</div>
            <div class="ant-col ant-col-4">8 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Đà Lạt</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">310km</div>
            <div class="ant-col ant-col-4">8 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Đà Lạt</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">310km</div>
            <div class="ant-col ant-col-4">8 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Đà Nẵng</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">980km</div>
            <div class="ant-col ant-col-4">20 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Đại Ngãi</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">230km</div>
            <div class="ant-col ant-col-4">6 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Hà Tiên</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">316km</div>
            <div class="ant-col ant-col-4">8 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Hộ Phòng</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">271km</div>
            <div class="ant-col ant-col-4">5 giờ 21 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Hồng Ngự</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">178km</div>
            <div class="ant-col ant-col-4">5 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Huế</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">943km</div>
            <div class="ant-col ant-col-4">25 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Long Xuyên</span>
              </div>
            </div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col ant-col-3">186km</div>
            <div class="ant-col ant-col-4">5 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Mũi Né</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">207km</div>
            <div class="ant-col ant-col-4">6 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Năm Căn</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">357km</div>
            <div class="ant-col ant-col-4">7 giờ 18 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Nha Trang</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">427km</div>
            <div class="ant-col ant-col-4">11 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Nha Trang</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">426km</div>
            <div class="ant-col ant-col-4">12 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Ninh Hòa</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">462km</div>
            <div class="ant-col ant-col-4">12 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Phan Thiết</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">203km</div>
            <div class="ant-col ant-col-4">6 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Quãng Ngãi</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">757km</div>
            <div class="ant-col ant-col-4">18 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Qui Nhơn</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">585km</div>
            <div class="ant-col ant-col-4">14 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Rạch Giá</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">272km</div>
            <div class="ant-col ant-col-4">6 giờ 15 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Sa Đéc</span>
              </div>
            </div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col ant-col-3">142km</div>
            <div class="ant-col ant-col-4">4 giờ 30 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Sóc Trăng</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">223km</div>
            <div class="ant-col ant-col-4">6 giờ 30 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Thốt Nốt</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-3">208km</div>
            <div class="ant-col ant-col-4">5 giờ 30 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Tịnh Biên</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">252km</div>
            <div class="ant-col ant-col-4">5 giờ 13 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Trà Vinh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">133km</div>
            <div class="ant-col ant-col-4">4 giờ 30 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Tri Tôn</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">232km</div>
            <div class="ant-col ant-col-4">5 giờ 59 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Tuy Hòa</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">535km</div>
            <div class="ant-col ant-col-4">12 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Vị Thanh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">209km</div>
            <div class="ant-col ant-col-4">5 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">TP.Hồ Chí Minh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Vũng Tàu</span>
              </div>
            </div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col ant-col-3">94km</div>
            <div class="ant-col ant-col-4">3 giờ 30 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Trà Ôn</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">161km</div>
            <div class="ant-col ant-col-4">3 giờ 16 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Trà Vinh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP.Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">130km</div>
            <div class="ant-col ant-col-4">4 giờ 30 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Tri Tôn</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">232km</div>
            <div class="ant-col ant-col-4">5 giờ 59 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Tuy Hoà</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">506km</div>
            <div class="ant-col ant-col-4">12 giờ 41 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Tuy Hòa</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP.Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">535km</div>
            <div class="ant-col ant-col-4">12 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Vị Thanh</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP.Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col ant-col-3">209km</div>
            <div class="ant-col ant-col-4">5 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Vĩnh Châu</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">247km</div>
            <div class="ant-col ant-col-4">5 giờ 51 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Vĩnh Thuận</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">283km</div>
            <div class="ant-col ant-col-4">5 giờ 23 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">
                  Vĩnh Thuận (Kiên Giang)
                </span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Bình Dương</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Giường</div>
            <div class="ant-col ant-col-3">311km</div>
            <div class="ant-col ant-col-4">8 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default mr-2"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
        <div class="schedule-card flex w-full flex-col gap-[6px] text-left">
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Vũng Tàu</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Cần Thơ</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Limousine</div>
            <div class="ant-col ant-col-3">451km</div>
            <div class="ant-col ant-col-4">9 giờ 9 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Vũng Tàu</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>Đà Lạt</span>
              </div>
            </div>
            <div class="ant-col ant-col-2">Limousine</div>
            <div class="ant-col ant-col-3">318km</div>
            <div class="ant-col ant-col-4">7 giờ 30 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Vũng Tàu</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col ant-col-3">105km</div>
            <div class="ant-col ant-col-4">3 giờ 44 phút </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
          <div class="ant-row items-center">
            <div class="ant-col ant-col-6">
              <div class="flex w-full items-center gap-2">
                <span class="font-medium text-orange">Vũng Tàu</span>
                <img src="./images/icons/ic_double_arrow.svg" alt="arrow" />
                <span>TP.Hồ Chí Minh</span>
              </div>
            </div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col ant-col-3">95km</div>
            <div class="ant-col ant-col-4">3 giờ </div>
            <div class="ant-col ant-col-2">---</div>
            <div class="ant-col ant-col-2"></div>
            <div class="ant-col flex justify-end" style={{"flex": "1 1 auto"}}>
              <button
                type="button"
                class="ant-btn ant-btn-round ant-btn-default button-default false"
              >
                <span>Tìm tuyến xe</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
