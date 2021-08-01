// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { useState } from "react";
import {
  Layout,
  Input,
  Avatar,
  Badge,
  Menu,
  Row,
  Col,
  Button,
  Dropdown,
  Table,
} from "antd";
import {
  BarsOutlined,
  SearchOutlined,
  UserOutlined,
  DesktopOutlined,
  MessageOutlined,
  DownOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faTicketalt,
  faPlane,
  faGlobe,
  faStore,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";
import { faLifeRing } from "@fortawesome/free-regular-svg-icons";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="https://www.antgroup.com">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="https://www.aliyun.com">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

const dataSource = [
  {
    key: "1",
    item: [
      {
        src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        title: "Angus Beef Rump Steak",
        desc: "Roasted sliced potatoes, Portobello mushrooms and mini vegetables, red wine soft sauce",
      },
    ],
    type: "main dishes",
    price: "$60.0",
    available: "Available in All Countries",
    detail: "",
  },
  {
    key: "2",
    item: [
      {
        src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        title: "French Tabbouleh",
        desc: "Semolina, green and red pepper, tomatoes, olives, onions, juice of mint lemon, parsley",
      },
    ],
    type: "starters",
    price: "$25.0",
    available: "Available in All Countries",
    detail: "",
  },
  {
    key: "3",
    item: [
      {
        src: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        title: "Tuna Salad",
        desc: "Hearts of lettuce, tomatoes, croutons, grilled tuna, hard-boiled eggs, Caesar dressing",
      },
    ],
    type: "starters",
    price: "$40.0",
    available: "Available in All Countries",
    detail: "",
  },
  {
    key: "4",
    item: [
      {
        src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        title: "Le Private Revisité",
        desc: "Cocoa tartlet, with a heart of molten caramel, topped with dark chocolate and caramel mousse",
      },
    ],
    type: "desserts",
    price: "$30.0",
    available: "Available in All Countries",
    detail: "",
  },
  {
    key: "5",
    item: [
      {
        src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        title: "Tuna Salad",
        desc: "Hearts of lettuce, tomatoes, croutons, grilled tuna, hard-boiled eggs, Caesar dressing",
      },
    ],
    type: "starters",
    price: "$40.0",
    available: "Available in All Countries",
    detail: "",
  },
  {
    key: "6",
    item: [
      {
        src: "https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        title: "Château Sainte Marguerite, Cru classé, Rose Wine 2015",
        desc: "On the nose it's floral and delicate with aromas of white flowers and passion fruit. On the palate delicate acidity with notes of peach, orange peel and exotic fruits.",
      },
    ],
    type: "wines",
    price: "$35.0",
    available: "Available in All Countries",
    detail: "",
  },
];

const columns = [
  {
    title: "Item",
    dataIndex: "item",
    key: "item",
    render: (item) => (
      <>
        {item.map((value, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "120px",
                  objectFit: "cover",
                  flexShrink: 0,
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              >
                <img src={value.src} alt={value.src} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  justifyContent: "space-between",
                  padding: "0 10px",
                  width: "370px",
                }}
              >
                <div style={{ fontWeight: "bold" }}>
                  <span
                    style={{
                      display: "block",
                      whiteSpace: "nowrap",
                      maxWidth: "100%",
                      overFlow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {value.title}
                  </span>
                </div>
                <div
                  style={{
                    marginBottom: 0,
                    marginTop: "auto",
                    width: "100%",
                  }}
                >
                  <span
                    style={{
                      display: "-webkit-box",
                      "-webkit-line-clamp": 3,
                      "-webkit-box-orient": "vertical",
                      overFlow: "hidden",
                      textOverflow: "ellipsis",
                      wordBreak: "break-word",
                    }}
                  >
                    {value.desc}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </>
    ),
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    render: (type) => (
      <span
        style={{
          color: "#19C0FF",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        {type}
      </span>
    ),
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (price) => <strong>{price}</strong>,
  },
  {
    title: "Available",
    dataIndex: "available",
    key: "available",
    render: (availability) => (
      <>
        <CheckCircleOutlined
          style={{
            backgroundColor: "#7ED321",
            borderRadius: "50%",
            color: "white",
          }}
        />{" "}
        {availability}
      </>
    ),
  },
  {
    title: "",
    dataIndex: "detail",
    key: "detail",
    render: () => <Button style={{ fontWeight: "bold" }}>VIEW DETAILS</Button>,
  },
];

export default function Home() {
  const [active, setActive] = useState(() => false);

  return (
    <Layout className="wrapper">
      <Header>
        <div className="header-logo">JETOS</div>
        <div className="header-content">
          <div className="left-header-content">
            {active && <BarsOutlined onClick={() => setActive(true)} />}
            <div className="search-header">
              <SearchOutlined />
              <Input placeholder="Search keyword" />
            </div>
          </div>
          <div className="avatar">
            <Avatar src="https://images.unsplash.com/photo-1620510625142-b45cbb784397?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
            <div className="avatar-info">
              <span className="avatar-name">philip doe</span>
              <span className="avatar-job">avian jets</span>
            </div>
          </div>
          <div className="notification">
            <Badge dot className="notification-item">
              <Avatar shape="square" icon={<UserOutlined />} />
            </Badge>
            <Badge dot className="notification-item">
              <Avatar shape="square" icon={<UserOutlined />} />
            </Badge>
            <Badge dot className="notification-item">
              <Avatar shape="square" icon={<UserOutlined />} />
            </Badge>
          </div>
        </div>
      </Header>
      <Layout>
        <aside className={`${active ? "is-active aside-tab" : "aside-tab"}`}>
          {active && (
            <Button onClick={() => setActive(false)}>
              <CloseCircleOutlined />
            </Button>
          )}
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
          >
            <Menu.Item key="0" icon={<DesktopOutlined />}>
              DASHBOARD
            </Menu.Item>
            <SubMenu
              key="sub1"
              icon={<FontAwesomeIcon icon={faBriefcase} />}
              title="COMPANY"
            >
              <Menu.Item key="1">Customers</Menu.Item>
              <Menu.Item key="2">Employees</Menu.Item>
              <Menu.Item key="3">Fleet</Menu.Item>
              <Menu.Item key="4">Memberships</Menu.Item>
              <Menu.Item key="5">Partners</Menu.Item>
              <Menu.Item key="6">Services</Menu.Item>
              <Menu.Item key="7">Disputes</Menu.Item>
              <Menu.Item key="8">Orders</Menu.Item>
              <Menu.Item key="9">Invoices</Menu.Item>
              <Menu.Item key="10">Avian Pay</Menu.Item>
              <Menu.Item key="11">Settings</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              icon={<FontAwesomeIcon icon={faTicketalt} />}
              title="FLIGHTS"
            >
              <Menu.Item key="12">Flights</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<FontAwesomeIcon icon={faPlane} />}
              title="BOOKINGS"
            >
              <Menu.Item key="13">Bookings</Menu.Item>
            </SubMenu>
            <Menu.Item key="14" icon={<MessageOutlined />}>
              MESSAGES
            </Menu.Item>
            <SubMenu
              key="sub4"
              icon={<FontAwesomeIcon icon={faGlobe} />}
              title="COMMUNITY"
            >
              <Menu.Item key="15">Community</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub5"
              icon={<FontAwesomeIcon icon={faStore} />}
              title="MARKETPLACE"
            >
              <Menu.Item key="16">Marketplace</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub6"
              icon={<FontAwesomeIcon icon={faCompass} />}
              title="COMPASS"
            >
              <Menu.Item key="17">Compass</Menu.Item>
            </SubMenu>
            <Menu.Item key="18" icon={<FontAwesomeIcon icon={faLifeRing} />}>
              Report & Improment
            </Menu.Item>
          </Menu>
        </aside>
        <Content>
          <Row>
            <Col span={12}>
              <div className="title-content">service items</div>
              <p>Service item for trips</p>
            </Col>
            <Col span={12} style={{ textAlign: "right" }}>
              <Button className="btn-new-item">CREATE NEW ITEM</Button>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <div className="simple-search">
                <input type="text" placeholder="Search" />
                <button>
                  <SearchOutlined />
                </button>
              </div>
            </Col>
            <Col span={12} style={{ textAlign: "right" }}>
              <span style={{ color: "#65686F" }}>Sort by </span>
              <Dropdown overlay={menu} trigger={["click"]}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <Button style={{ color: "#65686F" }}>
                    Name A - Z
                    <DownOutlined />
                  </Button>
                </a>
              </Dropdown>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Table dataSource={dataSource} columns={columns} />
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}
