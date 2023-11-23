import React from 'react'
import { Button, Form } from 'antd';
import "../../Stylesheets/Menu.css"
import "../../Stylesheets/General.css"

function Menu() {
    return (
        <div id="menuBodyContainer">
            <div id="menuBodyCss" >
                <div className='card p-3 w-400'>
                    <h1>
                        MENU
                    </h1>
                    <hr/>

                    <Form
                        layout="vertical">
                        <Button id="buttonReserve" type="primary" htmlType='submit' title='REGISTER'>Reserve</Button>
                        <Button id="buttonCancel" type="primary" htmlType='submit' title='REGISTER'>Cancel</Button>
                        <Button id="buttonLogOut" type="primary" htmlType='submit' title='REGISTER'>Log Out</Button>
                    </Form>
                </div>
            </div>
        </div>

    );
}

export default Menu;