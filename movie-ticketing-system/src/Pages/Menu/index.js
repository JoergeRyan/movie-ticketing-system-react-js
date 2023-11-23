import React from 'react'
import { Button, Form} from 'antd';


function Menu() {
  return (
    <div className="flex justify-center h-screen items-center bg-primary">
       <div className='card p-3 w-400'>
          <h1 className='text-xl mb-2'>
              Mylene Movies - Register
          </h1>
          <hr/>
          <Form
            layout = "vertical">
              <Button type="primary" htmlType='submit' title='REGISTER'>Reserve</Button>
              <Button type="primary" htmlType='submit' title='REGISTER'>Cancel</Button>
          </Form>
       </div>
    </div>
  );
}

export default Menu;