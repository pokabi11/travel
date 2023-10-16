import React from 'react'
import { Layout, Select, Space, TimePicker} from "antd"
import ChooseTime from '../modules/ChooseTime';
import ChooseNum from '../modules/ChooseNum';

//list city
const cityData = {
    MienBac: ['Hanoi', 'Thai Binh', 'Quang Ninh'],
    MienTrung: ['Da Nang', 'Hue', 'Quang Tri'],
    MienNam: ['Ho Chi Minh City', 'Binh Duong', 'somewhere'],
  };
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log('search:', value);
  };
  
  // Filter `option.label` match the user type `input`
  const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    export default function Timxe(props){
        return(
    <Space>
      <div class="grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
        <div class="reflative flex justify-center sm:gap-4">
        <div class="columns-1 flex-1">
          <p >Chọn điểm đi</p>
          <Select style={{width:'%'}}
            showSearch
            placeholder="Chọn điểm đi"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={filterOption}
            options={[
              {
                value: 'hanoi',
                label: 'Hanoi',
              },
              {
                value: 'hcm',
                label: 'Ho Chi Minh City',
              },
              {
                value: 'danang',
                label: 'Da Nang',
              },
            ]}
          />
        </div>
        <div class="columns-1 flex-1">
          <p>Chọn điểm đi</p>
          <Select style={{width:'80%',}}
            showSearch
            placeholder="Chọn điểm đi"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={filterOption}
            options={[
              {
                value: 'hanoi',
                label: 'Hanoi',
              },
              {
                value: 'hcm',
                label: 'Ho Chi Minh City',
              },
              {
                value: 'danang',
                label: 'Da Nang',
              },
            ]}
          />
        </div>
        </div>
        <div class="reflative flex justify-center sm:gap-4">
        <div class="columns-1 flex-1">
          <p>Thời gian đi</p>
          <ChooseTime/>
        </div>
        <div class="columns-1 flex-1">
          <p>Số lượng vé</p>
          <ChooseNum/>
        </div>
        </div>
        <div class="relative flex w-full justify-center">
          <button class="absolute rounded-full z-10 px-20 h-10 bg-orange-700  text-white transition duration-200">Tìm xe </button>
        </div>
      </div>
    </Space>
        )
    }