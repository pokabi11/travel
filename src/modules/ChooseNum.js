import React from 'react';
import { InputNumber } from 'antd';
const onChange = (value) => {
  console.log('changed', value);
};
const ChooseNum = () => <InputNumber style={{width:'100%'}} min={1} max={10} defaultValue={1} onChange={onChange} />;
export default ChooseNum;