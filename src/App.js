import logo from './logo.svg';
import './App.css';
import {Dropdown, Modal, Button, Space} from 'antd';
import {useState} from 'react';

function App() {
    const [open, setOpen] = useState(false);
    return (<Space direction="vertical">
        <div>
            重现步骤：1.点击按钮一触发Dropdown显示内容<br/>2.点击Dropdown内容中的按钮二弹出弹窗<br/>3.发现Dropdown内容层级在弹窗上面，期望它的层级在弹窗下面，不然会遮挡弹窗内容展示。
        </div>
        <Dropdown trigger="click" dropdownRender={() => {
            return <div style={{
                background: '#FFFFFF', width: '200px'
            }}>
                Dropdown随机内容Dropdown随机内容Dropdown随机内容Dropdown随机内容Dropdown随机内容Dropdown随机内容Dropdown随机内容Dropdown随机内容
                <Button onClick={() => {
                    setOpen(true);
                }}>按钮二</Button>
            </div>
        }}>
            <Button>
                按钮一
                <Modal open={open} onCancel={() => {
                    setOpen(false);
                }}>
                    我是一个弹框
                </Modal>
            </Button>

        </Dropdown>
    </Space>);
}

export default App;
