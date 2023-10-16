import React from "react";
import { Layout, Select, Space, TimePicker } from "antd";
import ChooseTime from "../modules/ChooseTime";
import ChooseNum from "../modules/ChooseNum";
import Khuyenmai from "./Khuyenmai";
import Busthinhhanh from "./Busthinhhanh";
import Vechungtoi from "./Vechungtoi";
import Lienhe from "./Lienhe";

//list city
const cityData = {
  MienBac: ["Hanoi", "Thai Binh", "Quang Ninh"],
  MienTrung: ["Da Nang", "Hue", "Quang Tri"],
  MienNam: ["Ho Chi Minh City", "Binh Duong", "somewhere"],
};
const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log("search:", value);
};

// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
  (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

export default function Trangchu(props) {
  return (
    <div>
      <p class="font-bold mt-8 uppercase" style={{ fontSize: "27px" }}>
        Đặt vé
      </p>
      <div
        style={{ fontSize: "18px" }}
        class="container py-12 my-12 mx-auto bg-orange-50 rounded"
      >
        <div class="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2 sm:gap-4">
          <div class="flex sm:gap-4 px-20">
            <div class="columns-1 flex-1">
              <p class="text-left font-bold">Chọn điểm đi</p>
              <Select
                style={{ width: "100%" }}
                showSearch
                placeholder="Chọn điểm đi"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={filterOption}
                options={[
                  {
                    value: "hanoi",
                    label: "Hanoi",
                  },
                  {
                    value: "thaibinh",
                    label: "Thai Binh",
                  },
                  {
                    value: "quangninh",
                    label: "Quang Ninh",
                  },
                  {
                    value: "viettri",
                    label: "Viet Tri",
                  },
                  {
                    value: "laocai",
                    label: "Lao Cai",
                  },
                  {
                    value: "danang",
                    label: "Da Nang",
                  },
                  {
                    value: "hue",
                    label: "Hue",
                  },
                  {
                    value: "quangtri",
                    label: "Quang Tri",
                  },
                  {
                    value: "quynhon",
                    label: "Quy Nhon",
                  },
                  {
                    value: "hcm",
                    label: "Ho Chi Minh City",
                  },
                  {
                    value: "binhduong",
                    label: "Binh Duong",
                  },
                  {
                    value: "baclieu",
                    label: "Bac Lieu",
                  },
                  {
                    value: "bentre",
                    label: "Ben Tre",
                  },
                  {
                    value: "camau",
                    label: "Ca Mau",
                  },
                ]}
              />
            </div>
            <div class="columns-1 flex-1">
              <p class="text-left font-bold">Chọn điểm đến</p>
              <Select
                style={{ width: "100%" }}
                showSearch
                placeholder="Chọn điểm đến"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={filterOption}
                options={[
                  {
                    value: "hanoi",
                    label: "Hanoi",
                  },
                  {
                    value: "thaibinh",
                    label: "Thai Binh",
                  },
                  {
                    value: "quangninh",
                    label: "Quang Ninh",
                  },
                  {
                    value: "viettri",
                    label: "Viet Tri",
                  },
                  {
                    value: "laocai",
                    label: "Lao Cai",
                  },
                  {
                    value: "danang",
                    label: "Da Nang",
                  },
                  {
                    value: "hue",
                    label: "Hue",
                  },
                  {
                    value: "quangtri",
                    label: "Quang Tri",
                  },
                  {
                    value: "quynhon",
                    label: "Quy Nhon",
                  },
                  {
                    value: "hcm",
                    label: "Ho Chi Minh City",
                  },
                  {
                    value: "binhduong",
                    label: "Binh Duong",
                  },
                  {
                    value: "baclieu",
                    label: "Bac Lieu",
                  },
                  {
                    value: "bentre",
                    label: "Ben Tre",
                  },
                  {
                    value: "camau",
                    label: "Ca Mau",
                  },
                ]}
              />
            </div>
          </div>
          <div class="flex sm:gap-4 px-20">
            <div class="columns-1 flex-1">
              <p class="text-left font-bold">Thời gian đi</p>
              <ChooseTime />
            </div>
            <div class="columns-1 flex-1">
              <p class="text-left font-bold">Số lượng vé</p>
              <ChooseNum />
            </div>
          </div>
          <div style={{left:'60rem'}} class="absolute top-80 sm: md:absolute" >
            <button class="relative justify-center rounded-full z-10 px-20 h-10 bg-orange-700  text-white transition duration-200">
              Tìm xe{" "}
            </button>
          </div>
        </div>
      </div>
      <p class="font-bold uppercase" style={{ fontSize: "27px" }}>
        Khuyến mãi nổi bật
      </p>
      <p>Tiết kiệm tối đa chi phí đi lại</p>
      <div class="container my-12 mx-auto">
        <Khuyenmai></Khuyenmai>
      </div>
      <p class="font-bold uppercase" style={{ fontSize: "27px" }}>
        Tuyến phổ biến
      </p>
      <p>Được khách hàng sử dụng nhiều gần đây</p>
      <div class="container my-12 mx-auto">
        <Busthinhhanh></Busthinhhanh>
      </div>
      <div class="container my-12 mx-auto">
        <Vechungtoi></Vechungtoi>
      </div>
      <div class="container my-12 mx-auto">
        <Lienhe></Lienhe>
      </div>
    </div>
  );
}
