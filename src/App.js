import React from 'react';
import { Layout, Space, Menu } from 'antd';
import TodoListContainer from './containers/TodoListContainer';
import TodoFormContainer from './containers/TodoFormContainer';
import { Link } from 'react-router-dom';
const { Header, Content, Footer } = Layout;
function App() {
  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1"><Link to="/">首页&nbsp;&nbsp;</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/done">&nbsp;&nbsp;done</Link></Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64, textAlign: 'center' }}>
        <TodoFormContainer />
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          <Space>
            <TodoListContainer filter={false} />
          </Space>

        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Power By Geticsen</Footer>
    </Layout>
  );
}
export default App;