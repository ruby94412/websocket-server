import {Button, Checkbox, Form, Input} from 'antd';
import axios from 'axios';
const LOCALBACKEND = 'http://47.100.26.104:8080/login';
export default ({
  setIsLoggedIn,
}) => {
  const [form] = Form.useForm();
  const handleSubmit = () => {
    axios.post(LOCALBACKEND, form.getFieldsValue())
      .then(res => {
        const data = res?.data;
        if (data.status === 'success') {
          setIsLoggedIn(true);
        }
      })
  }
  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item
        label={<span style={{color: 'white'}}>用户名</span>}
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={<span style={{color: 'white'}}>密码</span>}
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox style={{color: 'white'}}>记住我</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" onClick={handleSubmit}>
          登录
        </Button>
      </Form.Item>
    </Form>
  );
}