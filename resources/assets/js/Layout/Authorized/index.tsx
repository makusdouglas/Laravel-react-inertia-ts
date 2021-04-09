import React from 'react';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined, DashboardOutlined } from '@ant-design/icons';
import { InertiaLink } from '@inertiajs/inertia-react'

import './index.css';
const { Header, Content, Footer, Sider } = Layout;

const AuthorizedLayout: React.FC = ({ children }) => {
    return (
        <Layout style={{ minHeight: '100vh', minWidth: '100vw' }}>
            <Sider
                style={{ flex: 1 }}
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        <InertiaLink href='/' method='get'>Home</InertiaLink>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        <InertiaLink href='/profile' method='get'>Profile</InertiaLink>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<DashboardOutlined />}>
                        <InertiaLink href='/dashboard' method='get'>Dashboard</InertiaLink>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        {children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
}
export default AuthorizedLayout
