import React from 'react';
import dayjs from 'dayjs';
import { TimePicker } from 'antd';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const currentTime =dayjs();
const onChange = (time, timeString) => {
  console.log(time, timeString);
};

const ChooseTime = () => <TimePicker style={{width:'100%'}} use12Hours format="h:mm a" minuteStep={15} hourStep={1} defaultValue={currentTime} />;
export default ChooseTime;