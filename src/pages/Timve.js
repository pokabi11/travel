import React from 'react';
import { Form, Input, Button, Space } from 'antd';
const MyFormItemContext = React.createContext([]);
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
  return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};
const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};
const Timve = () => {
  const onFinish = (value) => {
    console.log(value);
  };
  return (
    <div class="container mx-auto">
      <p class="font-bold mt-8 uppercase" style={{ fontSize: "27px" }}>
        Tìm vé
      </p>
        <Space class="flex justify-center">
        <Form name="form_item_path" layout="vertical" onFinish={onFinish} style={{fontSize:'27px'}}>
      <MyFormItemGroup prefix={['user']}>
        <MyFormItemGroup prefix={['name']}>
          <MyFormItem name="phone" label={<span class="font-bold" style={{ fontSize: '18px' }}>Số điện thoại</span>}>
            <Input />
          </MyFormItem>
          <MyFormItem name="name" label={<span class="font-bold" style={{ fontSize: '18px' }}>Họ và Tên</span>}>
            <Input />
          </MyFormItem>
        </MyFormItemGroup>

        <MyFormItem name="uid" label={<span class="font-bold" style={{ fontSize: '18px' }}>Mã số vé</span>}>
          <Input />
        </MyFormItem>
      </MyFormItemGroup>

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
        </Space>
    </div>
  );
};
export default Timve;