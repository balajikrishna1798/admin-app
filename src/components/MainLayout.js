import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import "./MainLayout.css";
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineBgColors,
} from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";

import { SiBrandfolder } from "react-icons/si";
import { BiCategory } from "react-icons/bi";
import { TfiLayoutListThumbAlt } from "react-icons/tfi";
import { ImBlog } from "react-icons/im";
import { BsFillClipboardCheckFill } from "react-icons/bs";
import { FaBlogger } from "react-icons/fa";
import { Link, Outlet, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-white text-center py-2">
            <span className="sm-logo">BC</span>
            <span className="lg-logo">Balaji Corner</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard className="fs-4" />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <AiOutlineUser className="fs-4" />,
              label: "Customers",
            },
            {
              key: "catalog",
              icon: <AiOutlineShoppingCart className="fs-4" />,
              label: "Catalog",
              children: [
                {
                  key: "product",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Product",
                },
                {
                  key: "product-list",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Product List",
                },
                {
                  key: "brand",
                  icon: <SiBrandfolder className="fs-4" />,
                  label: "Brand",
                },
                {
                  key: "brand-list",
                  icon: <SiBrandfolder className="fs-4" />,
                  label: "Brand List",
                },
                {
                  key: "category",
                  icon: <BiCategory className="fs-4" />,
                  label: "Category",
                },
                {
                  key: "category-list",
                  icon: <BiCategory className="fs-4" />,
                  label: "Category List",
                },
                {
                  key: "color",
                  icon: <AiOutlineBgColors className="fs-4" />,
                  label: "Color",
                },
                {
                  key: "color-list",
                  icon: <AiOutlineBgColors className="fs-4" />,
                  label: "Color List",
                },
              ],
            },
            {
              key: "orders",
              icon: <TfiLayoutListThumbAlt className="fs-4" />,
              label: "Orders",
            },
            {
              key: "blogs",
              icon: <FaBlogger className="fs-4" />,
              label: "Blogs",
              children: [
                {
                  key: "blog",
                  icon: <ImBlog className="fs-4" />,
                  label: "Add Blog",
                },
                {
                  key: "bloglist",
                  icon: <FaBlogger className="fs-4" />,
                  label: "Blog List",
                },
                {
                  key: "blog-category",
                  icon: <ImBlog className="fs-4" />,
                  label: "Blog Category",
                },
                {
                  key: "blog-category-list",
                  icon: <FaBlogger className="fs-4" />,
                  label: "Blog Category List",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <BsFillClipboardCheckFill className="fs-4" />,
              label: "Enquiries",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="d-flex pe-5 ps-3 justify-content-between"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="d-flex gap-3 align-items-center position-relative">
            <div className="mb-1">
              <IoMdNotifications className="bell" />
              <span className="badge bg-warning p-1 position-absolute">3</span>
            </div>
            <div className="d-flex gap-3 align-items-center dropdown">
              <div>
                <img
                  className="img-fluid img mb-2"
                  src="https://e1.pxfuel.com/desktop-wallpaper/718/825/desktop-wallpaper-22-3d-for-whatsapp-dp-cool-dp.jpg"
                  alt=""
                ></img>
              </div>
            </div>
            <div
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <h5 className="mb-0">Balaji</h5>
              <p className="mb-0">balajikrishna44589@gmail.com</p>
            </div>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li className="py-2">
                <Link
                  className="dropdown-item"
                  style={{ height:"auto", lineHeight: "20px" }}
                  to="/"
                >
                  View Profile
                </Link>
              </li>
              <li className="py-2">
                <Link
                  className="dropdown-item"
                  style={{ lineHeight: "20px" }}
                  to="/"
                >
                  Signout
                </Link>
              </li>
           
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
