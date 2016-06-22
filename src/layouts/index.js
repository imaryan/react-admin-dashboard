/**
 * Created by Aryan on 2016/6/21.
 */
import React from 'react';
import {Menu, Icon} from 'antd';
import {  Link  } from 'react-router';
import '../style/index.css';
const SubMenu = Menu.SubMenu;

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      collapse: false
    };
    this.onCollapseChange = this.onCollapseChange.bind(this);
  }

  onCollapseChange() {
    this.setState({
      collapse: !this.state.collapse
    })
  }

  render() {
    const collapse = this.state.collapse;
    return (
      <div className={collapse ? "wrapper aside-collapse" : "wrapper"}>
        <div className="main-header">
          <div className="main-header-logo">
            <img src="./images/logo.png"/>
          </div>
          <div className="main-header-toolbar">
            <div className="main-header-left" onClick={this.onCollapseChange}>
              <Icon type="bars" />
            </div>
            <div className="main-header-right">
              <Icon type="mail" />
              <div className="user">
                <img src="./images/user6.jpg"/>
                <span>Aryan</span>
              </div>
              <Icon type="setting" />
            </div>
          </div>
        </div>
        <aside className="main-sidebar">
          <Menu style={{height: 500}} mode={collapse ? "vertical" : "inline"} theme="dark" defaultSelectedKeys={['pageone']}>
            <Menu.Item key="processlist">
              <Link to="pageone"><Icon type="appstore-o"/><span className="nav-text">Page One</span></Link>
            </Menu.Item>
            <Menu.Item key="draft">
              <Link to="pagetwo"><Icon type="delete"/><span className="nav-text">Page Two</span></Link>
            </Menu.Item>
            <Menu.Item key="task">
              <Link to="pagethree"><Icon type="message"/><span className="nav-text">Page Three</span></Link>
            </Menu.Item>
            <Menu.Item key="application">
              <Link to="pagefour"><Icon type="user"/><span className="nav-text">Page Four</span></Link>
            </Menu.Item>
            <Menu.Item key="approved">
              <Link to="pagefive"><Icon type="edit"/><span className="nav-text">Page Five</span></Link>
            </Menu.Item>
            <SubMenu key="setting" title={<span><Icon type="setting" /><span className="nav-text">SubPage List</span></span>}>
              <Menu.Item key="setting1"><Link to="subpageone">SubPage One</Link></Menu.Item>
              <Menu.Item key="setting2"><Link to="subpagetwo">SubPage Two</Link></Menu.Item>
              <Menu.Item key="setting3"><Link to="404">404 Error</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </aside>
        <div className="content-wrapper">
          <div className="content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
