import React from 'react';
import styles from './index.less';
import { useState } from 'react';
import { history } from 'umi';

import { Layout, Menu } from 'antd';

// 组件
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

export default (props: any) => {
  //
  const [count, setCount] = useState(0);
  const renderMenuSider = () => {
    return (
      <Menu
        onClick={() => onHandleClick()}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1">
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item
              onClick={() => {
                history.push('/list');
              }}
              key="1"
            >
              Option 1
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                history.push('/layout');
              }}
              key="2"
            >
              Option 2
            </Menu.Item>
          </Menu.ItemGroup>
          {/* <Menu.ItemGroup key="g2" title="Item 2">
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </Menu.ItemGroup> */}
        </SubMenu>
      </Menu>
    );
  };

  const onHandleClick = () => {
    console.log(1);
  };

  const onHistoryPage = (pagePath: string) => {};

  return (
    <div>
      {/* <Layout>
        <Header className={styles.bgColor}>Header</Header>
        <Layout className={styles.pageContent}>
          <Sider style={{ minWidth: 256 }} className={styles.bgColor}>{renderMenuSider()}</Sider>
          <Content>content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout> */}

      <Layout>
        <Sider trigger={null} collapsible>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item
              onClick={() => {
                history.push('/list');
              }}
              key="1"
            >
              Option 1
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                history.push('/layout');
              }}
              key="2"
            >
              Option 2
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            {/* <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            /> */}
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 800,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
