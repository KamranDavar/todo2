import {Menu} from 'antd';
import {AppstoreOutlined, HomeOutlined} from '@ant-design/icons';
import {useState} from 'react';
import {Link} from 'react-router-dom';

export function Header() {
    const [current, setCurrent] = useState('/')
    return (
        <>
            <Menu onClick={(e) => setCurrent(e.key)} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="/" icon={<HomeOutlined/>}>
                    <Link to='/'>
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item key="tasks" icon={<AppstoreOutlined/>}>
                    <Link to='tasks'>
                        Tasks
                    </Link>
                </Menu.Item>
                <Menu.Item key="about">
                    <Link to='about'>
                        About Us
                    </Link>
                </Menu.Item>
            </Menu>
        </>
    );
}