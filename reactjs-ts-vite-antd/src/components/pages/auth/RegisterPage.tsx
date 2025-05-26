import { RegisterData } from '@/lib/types/authTypes';
import services from '@/services';
import { setLocale } from '@/store/reducer/AuthReducer';
import { useMutation } from '@tanstack/react-query';
import { Button, Form, Input, Modal } from 'antd';
import en_US from 'antd/locale/en_US'; // Import the desired locale
import { get } from 'lodash';
import { useState } from 'react';
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

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);

  // Mutations
  const handleRegister = useMutation({
    mutationFn: (data: RegisterData) => {
      return services.auth.handleRegister(data);
    },
  });

  function onSubmit(data: RegisterData) {
    handleRegister.mutate(data, {
      onError: error => {
        const message = get(error, 'data.message', 'Something went wrong');
        // An error happened!
        console.error('Register error:', message);
      },
      onSuccess: () => {
        console.log('Register success');
        navigate('/auth/login');
      },
    });
  }

  return (
    <div>
      <Modal
        title="Locale Modal"
        open={open}
        onCancel={() => setOpen(false)}
        onOk={() => setOpen(false)}
      >
        <p>Locale Modal</p>
      </Modal>

      <Button type="primary" onClick={() => setOpen(true)}>
        Open Locale Modal
      </Button>

      <Button
        className="ml-2"
        type="primary"
        onClick={() => {
          dispatch(setLocale(en_US)); // Change to the desired locale
        }}
      >
        Change Locale
      </Button>
      <div>Resigister Page</div>
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
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>

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

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The new password that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterPage;
