import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';

const Sidebar = (props) => {
    const items = [
        {
          key: '1',
          icon: <PieChartOutlined onClick={props.onHomeClick} />,
          label: <span onClick={props.onHomeClick}>Home</span>,
        },
        {
          key: '2',
          icon: <DesktopOutlined  onClick={props.onAboutClick}/>,
          label: <span onClick={props.onAboutClick}>About</span>,
        },
        {
          key: '3',
          icon: <ContainerOutlined onClick={props.onServicesClick}/>,
          label: <span onClick={props.onServicesClick}>Services</span>,
        },
        {
          key: 'sub1',
          label: <span onClick={props.onProductsClick}>Products</span>,
          icon: <MailOutlined onClick={props.onProductsClick} />,
          children: [
            {
              key: '5',
              label: <span onClick={props.onProduct1Click}>Product 1</span>,
            },
            {
              key: '6',
              label: <span onClick={props.onProduct2Click}>Product 2</span>,
            },
            {
              key: '7',
              label: <span onClick={props.onProduct3Click}>Product 3</span>,
            },
            {
              key: '8',
              label: <span onClick={props.onProduct4Click}>Product 4</span>,
            },
          ],
        },
        {
          key: 'sub2',
          label: <span onClick={props.onContactClick}>Contact</span>,
          icon: <AppstoreOutlined onClick={props.onContactClick} />,
          children: [
            {
              key: '9',
              label: <span onClick={props.onContact1Click}>Contact 1</span>,
            },
            {
              key: '10',
              label: <span onClick={props.onContact2Click}>Contact 2</span>,
            },
            ],
          },
            {

              key: 'sub3',
              label: <span onClick={props.onCareerClick}>Career</span>,
              icon : < MenuUnfoldOutlined onClick={props.onCareerClick} />,
              children: [
                {
                  key: '11',
                  label: <span onClick={props.onCareer1Click}>Career 1</span>,
                },
                {
                  key: '12',
                  label: <span onClick={props.onCareer2Click}>Career 2</span>,
                },
              ],
            },
          ]
        
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };



  return (
    <div>
      
  
    <div
      style={{
        width: 256,
     
      }}
    >
    
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
    </div>
  );
};
export default Sidebar;