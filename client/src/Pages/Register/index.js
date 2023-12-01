import React from 'react';
import { Button, Form, Input, message } from 'antd';
import * as Icons from '@ant-design/icons';
import axios from 'axios';

function Register() {
  const onFinish = async (values) => {
    try {
      // Make the registration API call using axios
      const response = await axios.post('http://localhost:5000/api/users/signup', values);
      console.log(response.data);

      // Check the success property in the response
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      console.error('Error during registration:', error.message);
      message.error('Internal Server Error');
    }
  };

  return (
    <div id='registerBody' className='container'>
      <div className='card p-3 w-400'>
        <h1 className='text-xl mb-2'>
          Register
          <center><div className="underline"></div></center>
        </h1>
        <Form layout="vertical" onFinish={onFinish}>
          {/* ... (Your form fields) */}

          <div className="buttons">
            <Button type="primary" htmlType='submit' title='REGISTER'>
              Register
            </Button>
            <Button type="primary" htmlType='submit' title='CANCEL'>
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
