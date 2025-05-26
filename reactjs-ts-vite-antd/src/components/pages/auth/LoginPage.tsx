import { LoginData } from '@/lib/types/authTypes';
import services from '@/services';
import { setAuthenticate } from '@/store/reducer/AuthReducer';
import { useMutation } from '@tanstack/react-query';
import { Button, Form, Input } from 'antd';
import { get } from 'lodash';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const LoginPage = () => {
  const [form] = Form.useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Mutations
  const handleLogin = useMutation({
    mutationFn: (data: LoginData) => {
      return services.auth.handleLogin(data);
    },
  });

  function onSubmit(data: LoginData) {
    handleLogin.mutate(data, {
      onError: error => {
        // An error happened!
        const message = get(error, 'data.message', 'Something went wrong');
        console.error('Login error:', message);
      },
      onSuccess: res => {
        const data = { ...get(res, 'data', {}), isAuthenticated: true };
        dispatch(setAuthenticate(data));
        console.log('Login success', data);
        navigate('/');
      },
    });
  }

  return (
    <>
      <div className="font-bold">Login Page</div>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onSubmit}
        initialValues={{ username: 'test' }}
        style={{ maxWidth: 600 }}
        scrollToFirstError
      >
        <Form.Item
          name="username"
          label="Username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginPage;
